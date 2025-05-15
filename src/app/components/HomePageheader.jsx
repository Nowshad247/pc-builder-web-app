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
    <div>
        <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/1.jpg" 
              alt="Image 1"
              width={400}
              height={300}
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


