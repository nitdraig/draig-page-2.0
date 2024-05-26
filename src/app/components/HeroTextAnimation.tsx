"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroTextAnimation = () => {
  return (
    <>
      <TypeAnimation
        className="text-white uppercase  text-2xl lg:text-3xl "
        preRenderFirstString={true}
        sequence={[
          "No es música",
          1200,
          "mi arte",
          1000,
          "es placebo para el alma...",
          1200,
        ]}
        speed={50}
        repeat={Infinity}
      />
    </>
  );
};

export default HeroTextAnimation;
