'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/image1.jpeg"
            width={100}
            height={100}
            className="w-full h-full"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/contactImage.jpg"
            width={100}
            height={100}
            className="w-full h-full"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src=""
            width={100}
            height={100}
            className="w-full h-full"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src=""
            width={100}
            height={100}
            className="w-full h-full"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src=""
            width={100}
            height={100}
            className="w-full h-full"
            alt="Slide 1"
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </>
  );
}
