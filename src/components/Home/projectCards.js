import React from "react";
import styles from "./styles/projectCards.module.css";

function ProjectCards({ text1, text2 }) {
  return (
    <div className={styles.main}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ProjectCards;
