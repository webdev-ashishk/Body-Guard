// components/MyCarousel.js
// Ensure this is included
'use client';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

function MyCarousels() {
  return (
    <Carousel className="-z-10">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/slide/firstSlide.png"
          alt="First slide"
          width={800}
          height={400}
          unoptimized={true}
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/slide/slideFourth.png"
          alt="Third slide"
          width={800}
          height={100}
          unoptimized={true}
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/slide/thirdSlide.png"
          alt="Third slide"
          width={800}
          height={100}
          unoptimized={true}
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/slide/secondSlide.png"
          alt="Second slide"
          width={800}
          height={400}
          unoptimized={true}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousels;
