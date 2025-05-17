import React from 'react'
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomePageheader() {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-4 px-2 sm:px-2 lg:px-2">
        <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/1.jpg" 
              alt="Image 1"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/1.jpg" 
              alt="Image 1"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </CarouselItem>

     
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      
    </div>
  )
}


