import React from "react";
import styles from "./styles/projects.module.css";
import { Col, Row } from "antd";

import ProjectCards from "./projectCards";

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
          <ProjectCards text1="saf" text2="sfds" />
        </Col>
        <Col
          lg={{ span: 9, offset: 1 }}
          style={{ backgroundColor: "#F8F0E6", borderRadius: "25px" }}
        >
          <ProjectCards text1="saf" text2="sfds" />
        </Col>
      </Row>

      {/* END */}
    </div>
  );
}

export default Projects;
