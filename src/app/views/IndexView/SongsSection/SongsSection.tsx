"use client";
import React from "react";
import {
  Autoplay,
  Navigation,
  Parallax,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { projects } from "@/app/api/FakeApi";

const SongsSection = () => {
  return (
    <div className="h-screen">
      <Swiper
        style={{
          "--swiper-navigation-color": "#ab4ff7",
          "--swiper-pagination-color": "#650fac",
        }}
        parallax={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="w-full h-screen bg-black"
      >
        {projects.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative text-black box-border p-10"
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-lg"
              style={{
                backgroundImage: `url(${slide.imgUrl})`,
              }}
              data-swiper-parallax="-23%"
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <img
                loading="lazy"
                src={slide.imgUrl}
                alt={slide.title}
                className="relative z-10 max-w-full max-h-full"
                data-swiper-parallax="-23%"
              />
            </div>
            <div className="relative z-20 content  flex flex-col justify-center items-center h-full">
              {/* <div data-swiper-parallax="-300">
                <h3 className="text-5xl">{slide.title}</h3>
              </div> */}
              <div
                className="text-3xl max-w-md  mt-4 text-center bg-white rounded-3xl bg-opacity-80 p-4 "
                data-swiper-parallax="-100"
              >
                <p>{slide.description}</p>
                <div className="buttons mt-4">
                  <a
                    href={slide.linkSpotify}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                  >
                    Spotify
                  </a>
                  <a
                    href={slide.linkYoutube}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
                  >
                    Youtube
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SongsSection;
