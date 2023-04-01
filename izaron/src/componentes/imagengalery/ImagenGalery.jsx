import React from 'react';

export const ImageGallery = () => {
  const images = Object.values(
    import.meta.globEager('../../assets/imagenes/*.{png,jpg,jpeg,gif,svg,jfif}')
  );
 
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.default} alt={`image-${index}`} />
      ))}
    </div>
  );
};

