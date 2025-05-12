import React, { useRef } from "react";
import styles from "./styles/imageCarousal.module.css";
import { useScroll, useTransform, motion, scale } from "framer-motion";

import Image from "next/image";
import Picture1 from "../../../public/Images/scrollImage1.jpg";
import Picture2 from "../../../public/Images/scrollImage2.jpg";
import Picture3 from "../../../public/Images/scrollImage3.jpg";
import Picture4 from "../../../public/Images/scrollImage4.jpg";
import Picture5 from "../../../public/Images/scrollImage5.jpg";

function ImageScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [2, 3.5]);
  const scale5 = useTransform(scrollYProgress, [0, 2], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 2], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 2], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 2], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale8,
    },
    {
      src: Picture5,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div style={{ scale }} key={index} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image
                  src={src}
                  fill
                  sizes="100%"
                  alt="image"
                  placeholder="blur"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageScroll;
