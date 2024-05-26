import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import SongsSection from "./SongsSection/SongsSection";
import BookSection from "./BookSection/BookSection";
import ContactSection from "./ContactSection/ContactSection";
import TopButton from "@/app/components/TopButton";

const IndexView = () => {
  return (
    <>
      <HeroSection />
      <TopButton />
      <AboutSection />
      <SongsSection />
      <BookSection />
      <ContactSection />
    </>
  );
};

export default IndexView;
