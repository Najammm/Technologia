import Image from "next/image";
import React from "react";
import styles from "./styles/testimonialCard.module.css";

function TestimonialCard({ description, img, name, company }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div className={styles.text}>{description}</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {
          <Image
            src={img}
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
          />
        }
        <div>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.company}>{company}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
