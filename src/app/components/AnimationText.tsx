"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimationText = ({ text }: any) => {
  return (
    <>
      <TypeAnimation
        splitter={(str) => str.split(/(?= )/)}
        sequence={[text, 6000, ""]}
        speed={{ type: "keyStrokeDelayInMs", value: 70 }}
        omitDeletionAnimation={true}
        repeat={Infinity}
      />
    </>
  );
};

export default AnimationText;
