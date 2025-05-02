import { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-4">
      {/* Thumbnail images */}
      <div className="flex flex-col gap-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer border ${
              selectedImage === img ? 'border-green-600' : 'border-gray-300'
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Main image */}
      <div>
        <img
          src={selectedImage}
          alt="Selected product"
          className="w-full h-auto rounded object-cover max-h-[500px]"

        />
      </div>
    </div>
  );
};

export default ImageGallery;
