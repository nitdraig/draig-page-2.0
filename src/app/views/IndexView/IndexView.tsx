import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import SongsSection from "./SongsSection/SongsSection";
import BookSection from "./BookSection/BookSection";

const IndexView = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SongsSection />
      <BookSection />
    </>
  );
};

export default IndexView;
