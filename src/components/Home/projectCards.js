import React from "react";
import styles from "./styles/projectCards.module.css";
import Image from "next/image";

function ProjectCards({ text, heading, paragraph, img }) {
  return (
    <div className={styles.main}>
      <div className={styles.section1}>
        <span className={styles.number}>{text}</span>
        <span className={styles.show}>Showcase</span>
      </div>
      <div className={styles.section2}>
        <div>
          <h3 className={styles.heading}>{heading}</h3>
          <p className={styles.text}>{paragraph}</p>
        </div>
        <div>
          <Image src={img} height={"300"} width={"90%"} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
