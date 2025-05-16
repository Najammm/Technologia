import React from "react";
import styles from "./styles/projects.module.css";
import { Col, Row } from "antd";

import ProjectCards from "./projectCards";
import image1 from "../../../public/Images/project1image.webp";
import image2 from "../../../public/Images/project2image.webp";
import image3 from "../../../public/Images/project3image.webp";

function Projects() {
  return (
    <div className="myContainer">
      <div className={styles.section1}>
        <p>
          <span className={styles.span}>selected projects</span>
        </p>
        <h3 className={styles.title}>
          Apps we built been trending on the App Store
        </h3>
      </div>

      {/* SECTION 2 */}

      <Row>
        <Col
          lg={14}
          style={{ backgroundColor: "#DEE0FF", borderRadius: "25px" }}
        >
          <ProjectCards
            text="01."
            heading="SCUOLA"
            paragraph="Convenience, savings and rewards at your fingertips"
            img={image1}
          />
        </Col>
        <Col
          lg={{ span: 9, offset: 1 }}
          style={{ backgroundColor: "#F8F0E6", borderRadius: "25px" }}
        >
          <ProjectCards
            text="02."
            heading="JOILE"
            paragraph="Private trust management and trading platform"
            img={image2}
          />
        </Col>
      </Row>

      {/* END */}
      <Row>
        <Col
          lg={24}
          style={{ backgroundColor: "#b3a99b", borderRadius: "25px" }}
        >
          <ProjectCards
            text="01."
            heading="SCUOLA"
            paragraph="Convenience, savings and rewards at your fingertips"
            img={image3}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
