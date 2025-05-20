import React from "react";
import styles from "./styles/tabs.module.css";
import Image from "next/image";
import { Row, Col } from "antd";

import img1 from "../../../public/Images/industry1.webp";
import img2 from "../../../public/Images/industry2.webp";
import img3 from "../../../public/Images/industry3.webp";

function Tabs() {
  const card = [
    {
      title: "Telemedicine",
      text: "Healthcare is broken. Fix it by building a better virtual solution with a telehealth app or a web platform",
      url: "#",
      img: img1,
      color: "#f6f6ff",
    },
    {
      title: "Dating Apps",
      text: "It is hard to find your second half but building a dating app shouldn’t be",
      url: "#",
      img: img2,
      color: "#ECEEFF",
    },
    {
      title: "Fintech",
      text: "Fintech projects are strict.We bring our innovative approach to it.",
      url: "#",
      img: img3,
      color: "#DEE0FF",
    },
  ];

  return (
    <div className="myContainer">
      <div className={styles.tab_main}>
        {/* TEXT */}
        <div className={styles.ass} style={{ textAlign: "center" }}>
          <h3 className="title">Industries we’ve excelled in</h3>
          <div className={styles.button_div}>
            <button className={styles.btn}>Telemedicine</button>
            <button className={styles.btn}>Dating Apps</button>
            <button className={styles.btn}>Fintech</button>
          </div>
        </div>

        {/* END */}
        {/* CARDS START  */}

        <div className={styles.cards_container}>
          {card?.map((card, index) => (
            <Row
              key={index}
              style={{ backgroundColor: card.color }}
              className={styles.card_main}
            >
              <Col lg={12} className={styles.text_side}>
                <div>
                  <span className={styles.span}>Industries We Serve</span>
                </div>
                <div>
                  <h4 className={styles.title}>{card.title}</h4>
                  <p className={styles.text}>{card.text}</p>
                </div>
                <div>
                  <button className={styles.card_btn}>
                    <a href={card.url}>Get Started</a>
                  </button>
                </div>
              </Col>
              <Col lg={{ span: 10, offset: 2 }}>
                <Image src={card.img} width={450} height={"auto"} />
              </Col>
            </Row>
          ))}
        </div>

        {/* END */}
      </div>
    </div>
  );
}

export default Tabs;
