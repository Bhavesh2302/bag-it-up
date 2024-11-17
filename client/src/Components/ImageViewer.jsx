import React, { useEffect, useMemo, useState } from 'react';

const ImageViewer = ({ bag }) => {

  const imageUrls = 
  useMemo(()=>{
      return Object.keys(bag)
    .filter((key) => key.startsWith('image_url_'))
    .map((key) => bag[key]);
  
  },[bag])
 
  const [selectedImage, setSelectedImage] = useState(null);

  // Update selectedImage once imageUrls is populated
  useEffect(() => {
    if (imageUrls.length > 0) {
      setSelectedImage(imageUrls[0]);
    }
  }, [imageUrls]);

  console.log(selectedImage, "Selected Image");
  // console.log(imageUrls[0],"hhhiiiiiiiiiii")
  // const [selectedImage, setSelectedImage] = useState(
  //   imageUrls.length > 0 ? imageUrls[0] : bag?.image_url_1
  // );
  // console.log(selectedImage,"image")

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="w-full flex gap-2">
      <div className="flex flex-col  items-start justify-start sm:mt-[12px] mt-[20px]">
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
      <div className="sm:mt-[15px] md:mt-[20px]">
        <img
          className="sm:w-[300px] sm:h-[300px] md:w-[370px] md:h-[370px]"
          src={selectedImage}
          alt="selected_image"
        />
      </div>
    </div>
  );
};

export default ImageViewer;