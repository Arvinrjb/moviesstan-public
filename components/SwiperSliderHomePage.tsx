"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { type SliderProp } from "@/types";
import Image from "next/image";

export default function SwiperSliderHomePage({ suggestions }: SliderProp) {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        className="w-full my-10 h-96"
      >
        {suggestions.map((suggestion) => (
          <SwiperSlide key={suggestion.id}>
            <Link
              href={"/id/" + suggestion.movieId}
              className="hover:opacity-50 group"
            >
              <Image
                src={"https://image.tmdb.org/t/p/original" + suggestion.image}
                fill
                alt={suggestion.title + "'s image"}
              />
              <p className="w-full z-50 absolute bottom-0 left-0 p-8 dark:bg-slate-500 bg-violet-300 bg-opacity-50">
                {suggestion.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}