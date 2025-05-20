import React from "react";
import styles from "./styles/fourSections.module.css";
import { Col, Row } from "antd";
import Image from "next/image";

import Logo1 from "../../../public/Images/forbes.svg";
import Logo2 from "../../../public/Images/google.svg";
import section4 from "../../../public/Images/fourSections_section4_img.webp";

function FourSections() {
  const projects = [
    {
      skill: "JavaScript",
    },
    {
      skill: "TypeScript",
    },
    {
      skill: "Node.JS",
    },
    {
      skill: "React",
    },
    {
      skill: "Swift",
    },
    {
      skill: "Java",
    },
    {
      skill: "Objective-C",
    },
    {
      skill: "RxJava",
    },
  ];

  return (
    <div className="myContainer">
      <Row className={styles.main}>
        <Col xl={11} lg={12} className={styles.part1}>
          <div
            style={{ backgroundColor: "#242627" }}
            className={styles.section}
          >
            <h3 style={{ color: "white" }} className={styles.title}>
              Organizations recognized our work
            </h3>
            <div className={styles.logo_section}>
              <Image src={Logo1} width={100} height={"auto"} />
              <Image src={Logo2} width={100} height={"auto"} />
            </div>
            <div>
              <button className={styles.btn}>View More Awards</button>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#DEE0FF" }}
            className={styles.section}
          >
            <h3 style={{ color: "black" }} className={styles.title}>
              We use latest technologies to run your project smoothly
            </h3>
            <div>
              {projects?.map((projects, index) => (
                <button className={styles.skills} key={index}>
                  {projects.skill}
                </button>
              ))}
            </div>
          </div>
        </Col>
        <Col
          xl={{ span: 11, offset: 1 }}
          lg={{ span: 11, offset: 1 }}
          className={styles.part2}
        >
          <div
            style={{
              backgroundColor: "#F5F5F5",
            }}
            className={styles.section_back}
          >
            <h3 style={{ color: "black" }} className={styles.title}>
              Tecnologia has been recognized as a Leader in the 2022 Gartner®
            </h3>
            <div></div>
            <div></div>
          </div>
          <div
            style={{ backgroundColor: "#242627" }}
            className={styles.section}
          >
            <h3 style={{ color: "white" }} className={styles.title}>
              Create a great career and grow your future with Tecnologia
            </h3>
            <div
              style={{
                textAlign: "end",
                marginRight: "-1rem",
              }}
            >
              <Image className={styles.section4_img} src={section4} />
            </div>
            <div style={{ marginTop: "-7rem" }}>
              <button className={styles.btn}>View More Awards</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FourSections;
