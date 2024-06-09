import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const images = [
    '/showcaseimages/img1.jpg',
    '/showcaseimages/img2.jpg',
    '/showcaseimages/img3.jpg',
    '/showcaseimages/img4.jpg',
    '/showcaseimages/img5.jpg',
    '/showcaseimages/img6.jpg',
  ];

  return (
    <div className="flex items-center justify-center">
      <Slider {...settings} className=" max-w-56 md:max-w-96 ">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;