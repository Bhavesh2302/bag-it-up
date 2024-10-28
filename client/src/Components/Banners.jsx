import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Banners = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    appendDots: (dots) => (
      <div style={{ marginTop: "100px" }}>
        <ul style={{ display: "flex", justifyContent: "center" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full focus:outline-none"></div>
    ),
  };

  const images = [
    "/bag_images/banner_image_5.jpg",
    "/bag_images/banner_image_4.jpeg",
    "/bag_images/banner_image_3.jpeg",
    "/bag_images/banner_image_2.jpeg",
  ];

  return (
    <div className="slider-container w-4/5 m-auto">
      <Slider {...settings}>
        {images.map((el) => (
          <div className="container mx-auto" key={el}>
            <div className="text-center text-gray-800 bold">
              <p className="mt-2 text-xl bold">
                Welcome to the bag shop lets bag it up
              </p>
              <div className="flex items-center justify-center mt-[10px]">
              <button
                className="text-white text-center rounded-[6px] h-10 max-w-fit px-5 hover:text-white font-semibold bg-customBlue sm:hidden md:block lg:block"
                onClick={() => navigate("/bag")}
              >
                Shop Now
              </button>
              </div>
            
            </div>
            <div className="w-full m-auto mt-2">
              <img
                className="object-fill m-auto cursor-pointer"
                src={el}
                alt="Featured Bag"
                onClick={() => navigate("/bag")}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banners;
