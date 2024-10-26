import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banners = () => {
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
    "/bag_images/image_1.png",
    "/bag_images/image_2.jpeg",
    "/bag_images/image_3.jpeg",
    "/bag_images/image_4.jpg",
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((el) => (
          <div className="container mx-auto" key={el}>
            <div className="text-center text-gray-800">
              <p className="mt-2 text-xl bold">
                Trendy, elegant, and made just for you
              </p>
              <button className="mt-2 px-4 py-2 bg-customBlue text-white font-semibold rounded-md hover:bg-blue-400">
                Shop Now
              </button>
            </div>
            <div className="w-full m-auto mt-2">
              <img
                className="w-[1/2] h-[500px] object-fill m-auto"
                src={el}
                alt="Featured Bag"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banners;
