import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./styles/testimonials.module.css";
import TestimonialCard from "./testimonialCard";

import client1 from "../../../public/Images/client1.webp";

import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

function Testimonials() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="myContainer">
      <div className={styles.main}>
        <p>
          <span className={styles.span}>what our client says</span>
        </p>
        <div className={styles.carousal}>
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div>
                <TestimonialCard
                  description="I’ve been a customer for more than a decade. Tecnologia is an example of the way Managed Services should be done. They do their very best to make sure you succeed."
                  img={client1}
                  name="Jenny"
                  company="CIO, Restaurant Product Supplier"
                />
              </div>
              <div>
                <TestimonialCard
                  description="I’ve been a customer for more than a decade. Tecnologia is an example of the way Managed Services should be done. They do their very best to make sure you succeed."
                  img={client1}
                  name="Jenny"
                  company="CIO, Restaurant Product Supplier"
                />
              </div>
              <div>
                <TestimonialCard
                  description="I’ve been a customer for more than a decade. Tecnologia is an example of the way Managed Services should be done. They do their very best to make sure you succeed."
                  img={client1}
                  name="Jenny"
                  company="CIO, Restaurant Product Supplier"
                />
              </div>
              <div>
                <TestimonialCard
                  description="I’ve been a customer for more than a decade. Tecnologia is an example of the way Managed Services should be done. They do their very best to make sure you succeed."
                  img={client1}
                  name="Jenny"
                  company="CIO, Restaurant Product Supplier"
                />
              </div>
            </Slider>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "5rem",
                justifyContent: "center",
              }}
            >
              <button className={styles.button} onClick={previous}>
                <FaLongArrowAltLeft />
              </button>
              <button className={styles.button} onClick={next}>
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
