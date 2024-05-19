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
          delay: 5000,
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
                  <h3 className="lg:text-4xl uppercase mb-3">{slide.title}</h3>
                </div>
                <p className="text-2xl ">{slide.description}</p>
                <div className="mt-6 text-3xl mb-4 ">
                  <a
                    href={slide.linkSpotify}
                    className="bg-green-700 hover:bg-green-500 transition duration-300  hover:text-black text-white font-bold py-2 px-4 rounded-2xl m-2"
                  >
                    Spotify
                  </a>
                  <a
                    href={slide.linkYoutube}
                    className="bg-red-700 hover:bg-red-500 transition duration-300 hover:text-black text-white font-bold py-2 px-4 rounded-2xl m-2"
                  >
                    Youtube
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
