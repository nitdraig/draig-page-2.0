"use client";
import React from "react";
import { Autoplay, Navigation, Parallax, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { projects } from "@/app/api/FakeApi";

const SongsSection = () => {
  return (
    <section className="h-screen" id="songs">
      <Swiper
        style={{
          "--swiper-navigation-color": "#ab4ff7",
          "--swiper-pagination-color": "#650fac",
        }}
        parallax={true}
        autoplay={{
          delay: 6000,
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
              <div
                className="max-w-md  mt-4 text-center bg-white rounded-3xl bg-opacity-80 p-4 "
                data-swiper-parallax="-100"
              >
                <div data-swiper-parallax="-300">
                  <h3 className="lg:text-4xl text-3xl font-bold uppercase mb-3">
                    {slide.title}
                  </h3>
                </div>
                <p className="lg:text-2xl text-lg ">{slide.description}</p>
                <div className="flex flex-wrap mt-4 mb-2  justify-center gap-6">
                  <a
                    className="relative"
                    href={slide.linkSpotify}
                    target="_blank"
                  >
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black "></span>
                    <span className="fold-bold lg:text-2xl text-lg relative inline-block h-full w-full rounded border-2  px-3 py-1  font-bold text-white transition duration-300 bg-green-700 hover:bg-green-500 hover:text-white">
                      Spotify
                    </span>
                  </a>
                  <a
                    className="relative"
                    href={slide.linkYoutube}
                    target="_blank"
                  >
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black "></span>
                    <span className="fold-bold lg:text-2xl text-lg relative inline-block h-full w-full rounded border-2  px-3 py-1  font-bold text-white transition duration-300 bg-red-700 hover:bg-red-500 hover:text-white">
                      Youtube
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SongsSection;
