"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { projects } from "@/app/api/FakeApi";
const SongsSection = () => {
  const images = [
    "./clients/1.webp",
    "./clients/2.webp",
    "./clients/3.webp",
    "./clients/4.webp",
    "./clients/5.webp",
    "./clients/6.webp",
    "./clients/7.webp",
    "./clients/8.webp",
    "./clients/9.webp",
    "./clients/10.webp",
    "./clients/11.webp",
    "./clients/12.webp",
    "./clients/13.webp",
  ];
  return (
    <div className="h-screen">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <img
              src={project.imgUrl}
              alt="Clientes"
              loading="lazy"
              className="lg:w-[800px] lg:h-[800px] md:w-[800px] md:h-20 h-28 w-[900px] "
            />
            <span data-swiper-parallax="-300">{project.description}</span>{" "}
            <br />
            <a
              href={project.linkYoutube}
              target="_blank"
              style={{ margin: "1em" }}
              data-swiper-parallax="-200"
            >
              Escuchar en Youtube
            </a>
            <a
              href={project.linkSpotify}
              target="_blank"
              style={{ margin: "1em" }}
              data-swiper-parallax="-100"
            >
              Escuchar en Spotify
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SongsSection;
