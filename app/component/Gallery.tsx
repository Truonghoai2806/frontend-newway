// component/Gallery.tsx
import React, { FC } from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: string[]; // Define the type for the images prop
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div key={index} className="gallery-item">
          <Image
            src={src}
            alt={`Product image ${index + 1}`}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
