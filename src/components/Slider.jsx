import React from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const GallerySlider = () => {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="bg-main-dark-bg absolute top-1/2 right-2 z-10 flex  -translate-y-1/2 items-center justify-center rounded-full  bg-opacity-60"
        onClick={onClick}
      >
        <button className="text-[30px] lg:text-[50px]">
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="bg-main-dark-bg absolute top-1/2 left-2 z-10 flex  -translate-y-1/2 items-center justify-center rounded-full  bg-opacity-60"
        onClick={onClick}
      >
        <button className="text-[30px] lg:text-[50px]">
          <MdOutlineKeyboardArrowLeft />
        </button>
      </div>
    );
  };
  const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative my-3 overflow-hidden md:my-8">
      <Slider {...settingsSlider} className="">
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <img
              className="w-full"
              src="/assets/pravilo1.jpg"
              alt="maslov pravilo"
            />
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <iframe
              className="z-0 h-full w-full"
              src="https://www.youtube.com/embed/ikcSUS8w3kk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <img
              className="w-full"
              src="/assets/massage.png"
              alt="maslov massage"
            />
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <iframe
              className="z-0 h-full w-full"
              src="https://www.youtube.com/embed/rLfAqlGJhFA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <img
              className="w-full"
              src="/assets/glr1.jpg"
              alt="maslov training"
            />
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <iframe
              className="z-0 h-full w-full"
              src="https://www.youtube.com/embed/bytJcBN2s6k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <img
              className="w-full"
              src="/assets/glr2.jpg"
              alt="maslov massage"
            />
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <iframe
              className="z-0 h-full w-full"
              src="https://www.youtube.com/embed/CIMVSG4JaNg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <img
              className="w-full"
              src="/assets/glr3.jpg"
              alt="maslov training"
            />
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <iframe
              className="z-0 h-full w-full"
              src="https://www.youtube.com/embed/tCdpoTYCApY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="slideItem relative">
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <img
              className="w-full"
              src="/assets/good.jpg"
              alt="maslov good sign"
            />
          </div>
          <p></p>
        </div>
      </Slider>
    </div>
  );
};
