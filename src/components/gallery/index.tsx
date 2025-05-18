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
                <img key={item.id} className="w-full" src={item.img} alt={item.alt} />
              ) : (
                <iframe
                  key={item.id}
                  className="z-0 h-full w-full"
                  src={item.video}
                  title="YouTube video player"
                  allowFullScreen
                  
                ></iframe>
              )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
