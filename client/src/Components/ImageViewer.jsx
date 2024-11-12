import React, { useState } from "react";

const ImageViewer = ({singleBag}) => {
    const [imageList, setImageList] = useState([singleBag.image_url_1])
    console.log(imageList,"imageList")
  return (
    <div className="w-full flex">
      <div className="w-1/3">
       
      </div>
      <div className="w-2/3"></div>
    </div>
  );
};

export default ImageViewer;
