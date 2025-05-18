import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { sliderItems } from "./data";
import { useRef } from "react";

export const Gallery = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {sliderItems.map((item) => (
          <CarouselItem key={item.id} className="basis-1/3 aspect-video">
            <div className="w-full aspect-square">

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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
