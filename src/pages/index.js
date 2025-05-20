import React from "react";
import HeroBackground from "@/components/Home/heroBackground";
import LogoCarousal from "@/components/Home/logoCarousal";
import ImageScroll from "@/components/Home/imageScroll";
import Services from "@/components/Home/services";
import Projects from "@/components/Home/projects";
import Tabs from "@/components/Home/tabs";
import Testimonials from "@/components/Home/testimonials";
import FourSections from "@/components/Home/fourSections";
import Stats from "@/components/Home/stats";

function index() {
  return (
    <div className="pages_main">
      <HeroBackground />
      <LogoCarousal />
      <ImageScroll />
      <Services />
      <Projects />
      <Tabs />
      <Testimonials />
      <FourSections />
      <Stats />
    </div>
  );
}

export default index;
