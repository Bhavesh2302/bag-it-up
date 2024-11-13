import React, { useMemo, useState } from 'react';

const ImageViewer = ({ bag }) => {

  const imageUrls = 
  useMemo(()=>{
      return Object.keys(bag)
    .filter((key) => key.startsWith('image_url_'))
    .map((key) => bag[key]);
  
  },[bag])
 
  console.log(imageUrls[0],"hhhiiiiiiiiiii")
  const [selectedImage, setSelectedImage] = useState(
    imageUrls.length > 0 ? imageUrls[0] : bag?.image_url_1
  );
  console.log(selectedImage,"image")

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="w-full flex">
      <div className="flex flex-col gap-4 mt-[20px]">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="cursor-pointer" onClick={() => handleImageClick(imageUrl)}>
            <img
              className="w-20 h-20 object-contain"
              src={imageUrl}
              alt={`image_${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-[20px]">
        <img
          className="w-[370px] h-[370px]"
          src={selectedImage}
          alt="selected_image"
        />
      </div>
    </div>
  );
};

export default ImageViewer;