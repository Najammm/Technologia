import React from "react";
import styles from "./styles/heroBackground.module.css";

function HeroBackground() {
  return (
    <div className={styles.hero_main}>
      <div className="myContainer">
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Mobile app development for funded companies.
          </h1>
          <p className={styles.text}>
            Helping companiess succeed through customized software solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroBackground;
