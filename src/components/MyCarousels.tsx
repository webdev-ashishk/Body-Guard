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
          src="https://www.promansecuritech.com/wp-content/uploads/2019/05/bouncer-services.jpg"
          alt="First slide"
          width={800}
          height={400}
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://5.imimg.com/data5/VT/RC/ZD/SELLER-2174304/bouncer-uniform-1000x1000.jpg"
          alt="Second slide"
          width={800}
          height={400}
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://denetimservices.com/wp-content/uploads/2022/03/Bouncer-Bodyguard-Hire-for-event-security-Mumbai.jpg"
          alt="Third slide"
          width={800}
          height={100}
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousels;
