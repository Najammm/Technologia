import React from "react";
import HeroBackground from "@/components/Home/heroBackground";
import LogoCarousal from "@/components/Home/logoCarousal";
import ImageScroll from "@/components/Home/imageScroll";
import Services from "@/components/Home/services";

function index() {
  return (
    <div className="pages_main">
      <HeroBackground />
      <LogoCarousal />
      <ImageScroll />
      <Services />
    </div>
  );
}

export default index;
