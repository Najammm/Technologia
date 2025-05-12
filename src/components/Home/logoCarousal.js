import React from "react";
import Slider from "react-slick";
import styles from "./styles/logoCarousal.module.css";

import Image from "next/image";
import Logo1 from "../../../public/Images/logo1.svg";
import Logo2 from "../../../public/Images/logo2.svg";
import Logo3 from "../../../public/Images/logo3.svg";
import Logo4 from "../../../public/Images/logo4.svg";
import Logo5 from "../../../public/Images/logo5.svg";

function LogoCarousal() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="myContainer">
      <div>
        <Slider {...settings}>
          <div className={styles.logo_images}>
            <Image src={Logo1} alt="image" />
          </div>
          <div className={styles.logo_images}>
            <Image src={Logo2} alt="image" />
          </div>
          <div className={styles.logo_images}>
            <Image src={Logo3} alt="image" />
          </div>
          <div className={styles.logo_images}>
            <Image src={Logo4} alt="image" />
          </div>
          <div className={styles.logo_images}>
            <Image src={Logo5} alt="image" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default LogoCarousal;
