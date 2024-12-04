'use client'
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Image from 'next/image';

// import required modules

export default function ProjectSlider() {
  const [sliderSlide, setSliderSlide] = useState([
    {thumbnail: '/images/slide-1.jpg', link: '/'},
    {thumbnail: '/images/slide-2.jpg', link: '/'},
    {thumbnail: '/images/slide-3.jpg', link: '/'},
    {thumbnail: '/images/slide-3.jpg', link: '/'},
    {thumbnail: '/images/slide-3.jpg', link: '/'},
  ]);
  return <>
    <Swiper
      modules={[Scrollbar]}
      spaceBetween={20}
      slidesPerView={'auto'}
      scrollbar={{ draggable: true, hide: false, dragSize: 'auto'}}
      autoplay={{ delay: 500, disableOnInteraction: false, }}
      className="project-slider"
    >
      {
        sliderSlide.map((slide, index) => <SwiperSlide key={index} className="project-slider__slide">
          <Link href={slide.link} className="project-slider__slide__image custom-cursor">
            <Image src={slide.thumbnail} alt="" fill priority />
          </Link>
        </SwiperSlide>)
      }
    </Swiper>
  </>;
}
