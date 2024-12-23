'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className="relative z-">
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
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/11.jpg"
            className="w-full h-[40rem]"
            width={100}
            height={100}
            alt="Slide 1"
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/22.jpg"
            className="w-full h-[40rem]"
            width={100}
            height={100}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/33.webp"
            className="w-full h-[40rem]"
            width={100}
            height={100}
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/44.webp"
            className="w-full h-[40rem]"
            width={100}
            height={100}
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/3.webp"
            className="w-full h-[40rem]"
            width={100}
            height={100}
            alt="Slide 5"
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
}
