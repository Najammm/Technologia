import React from "react";
import styles from "./styles/services.module.css";
import { Col, Row } from "antd";

import { SiBasicattentiontoken } from "react-icons/si";
import { CiMobile1 } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";
import { HiCodeBracket } from "react-icons/hi2";

function Services() {
  const services = [
    {
      icon: <SiBasicattentiontoken />,
      heading: "NFT Development",
      text: "Non Fungible Tokens are in Trend. We've been building them since 2016",
    },
    {
      icon: <CiMobile1 />,
      heading: "Mobile App Development",
      text: "From Social Media Apps like TikTok to Fitness Tracking and Marketplaces",
    },
    {
      icon: <CiDesktop />,
      heading: "Web App Development",
      text: "From Social Media Apps like TikTok to Fitness Tracking and Marketplaces",
    },
    {
      icon: <HiCodeBracket />,
      heading: "Software Development",
      text: "From a custom CRM to Transportation Management System, we've built it all",
    },
  ];

  return (
    <div className="myContainer">
      <div className={styles.main}>
        <h2 className={styles.title}>
          We provide clients with award-winning services
        </h2>
        <Row>
          {services?.map((services, index) => (
            <Col
              xl={{ span: 6, offset: 0 }}
              lg={{ span: 11, offset: 1 }}
              md={{ span: 11, offset: 1 }}
              className={styles.cards}
              key={index}
            >
              <span className={styles.icon}>{services.icon}</span>
              <h3 className={styles.heading}>{services.heading}</h3>
              <p className={styles.text}>{services.text}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Services;
