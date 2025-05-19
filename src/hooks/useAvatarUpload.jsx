import { useState } from 'react';
import { uploadToCloudinary } from '../services/uploadToCloudinary';
import { supabase } from '../libs/supabase';


const useAvatarUpload = (userId, setUser) => {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      uploadAndSave(file);
    }
  };

  const uploadAndSave = async (file) => {
    setUploading(true);
    setError(null);

    try {
      const imageUrl = await uploadToCloudinary(file);

      const { data, error: dbError } = await supabase
        .from('users')
        .update({ avatar: imageUrl })
        .eq('id', userId)
        .select()
        .single();

      if (dbError) throw dbError;

      // Update user in global context
      if (setUser && data) {
        setUser((prev) => ({ ...prev, avatar: data.avatar }));
      }

    } catch (err) {
      console.error('Upload failed:', err);
      setError('Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  return {
    preview,
    uploading,
    error,
    handleFileChange,
  };
};

export default useAvatarUpload;
