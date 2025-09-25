"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function PromotionCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-sm lg:max-w-5xl"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="-ml-4">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
          <div className="flex items-center relative w-72 h-48 lg:h-108">
            <Image
              sizes="lg"
              src="/product-1.jpeg"
              alt=""
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
          <div className="flex items-center relative w-72 h-48 lg:h-108">
            <Image
              sizes="lg"
              src="/product-2.jpeg"
              alt=""
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
          <div className="flex items-center relative w-72 h-48 lg:h-108">
            <Image
              sizes="lg"
              src="/product-3.jpeg"
              alt=""
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
          <div className="flex items-center relative w-72 h-48 lg:h-108">
            <Image
              sizes="lg"
              src="/product-4.jpeg"
              alt=""
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="hidden lg:block">
        <CarouselPrevious />
      </div>
      <div className="hidden lg:block">
        <CarouselNext />
      </div>
    </Carousel>
  );
}
