import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from "./data";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const SampleNextArrow = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-contentBlockBg bg-opacity-60"
      onClick={onClick}
    >
      <button className="text-[30px] lg:text-[50px]">
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

const SamplePrevArrow = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-contentBlockBg bg-opacity-60"
      onClick={onClick}
    >
      <button className="text-[30px] lg:text-[50px]">
        <MdOutlineKeyboardArrowLeft />
      </button>
    </div>
  );
};
export const Gallery = () => {
  const settings = {
    dots: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    waitForAnimate: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
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
    <div className="relative my-3 md:my-8">
      <Slider {...settings}>
        {sliderItems.map((item) => (
          <div className="w-full aspect-square px-1" key={item.id}>
            {item.img ? (
              <img
                key={item.id}
                className="w-full h-full object-cover"
                src={item.img}
                alt={item.alt}
                loading="lazy"
                crossOrigin="anonymous"
              />
            ) : (
              <iframe
                className="z-0 h-full w-full"
                src={item.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};
