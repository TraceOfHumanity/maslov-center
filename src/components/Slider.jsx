import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { sliderItems } from 'utils/data';

export const GallerySlider = () => {
  const { t } = useTranslation();
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-contentBlockBg bg-opacity-60"
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
        className="absolute top-1/2 left-2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-contentBlockBg bg-opacity-60"
        onClick={onClick}
      >
        <button className="text-[30px] lg:text-[50px]">
          <MdOutlineKeyboardArrowLeft />
        </button>
      </div>
    );
  };
  const settingsSlider = {
    dots: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    waitForAnimate: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: false,
    accessibility: false,
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
      <h2 className="mb-5 text-center">{t('gallery.title')}</h2>
      <Slider {...settingsSlider} className="">
        {sliderItems.map((item) => (
          <div key={item.id} className="slideItem relative">
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
              {item.img ? (
                <img className="w-full" src={item.img} alt={item.alt} />
              ) : (
                <iframe
                  className="z-0 h-full w-full"
                  src={item.video}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
