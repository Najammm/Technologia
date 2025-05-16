import React from "react";
import styles from "./styles/projectCards.module.css";
import Image from "next/image";

function ProjectCards({ text, heading, paragraph, img }) {
  return (
    <div className={styles.main}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{text}</span>
        <span>Showcase</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>{heading}</h3>
          <p>{paragraph}</p>
        </div>
        <div>
          <Image src={img} height={"auto"} width={"auto"} />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProjectCards;
