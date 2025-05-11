import { useState } from 'react';
import { supabase } from '../libs/supabase';
import { uploadToCloudinary } from '../services/uploadToCloudinary';



const useAvatarUpload = (userId) => {
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
      // Upload to Cloudinary
      const imageUrl = await uploadToCloudinary(file);

      // Update avatar in Supabase
      const { error: dbError } = await supabase
        .from('users')
        .update({ avatar: imageUrl })
        .eq('id', userId);

      if (dbError) {
        throw dbError;
      }

    } catch (err) {
      console.error('Error uploading and saving avatar:', err);
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
