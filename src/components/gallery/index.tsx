import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { sliderItems } from "./data"

export const Gallery = () => {
  return (
    <Carousel>
      <CarouselContent>
        {sliderItems.map((item) => (
          <CarouselItem key={item.id} className="basis-1/3 aspect-video">
            {item.img ? (
              <img
                key={item.id}
                className="w-full"
                src={item.img}
                alt={item.alt}
                loading="lazy"
                crossOrigin="anonymous"
              />
            ) : (
              <iframe className="z-0 h-full w-full" src={item.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
