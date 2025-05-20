import React from "react";
import styles from "./styles/stats.module.css";
import { Col, Row } from "antd";

function Stats() {
  const statics = [
    {
      number: "10",
      nofw: "Years",
      text: "in business",
    },
    {
      number: "7+",
      nofw: "Years",
      text: "in app development",
    },
    {
      number: "10+",
      nofw: "Startups",
      text: "unicorns built",
    },
    {
      number: "#1",
      nofw: "Development",
      text: "company in USA",
    },
  ];

  return (
    <div className="myContainer">
      <Row>
        <Col xl={12} lg={16}>
          <h3 className="title">Mobile app development for funded companies</h3>
        </Col>
      </Row>

      {/*  */}
      <hr style={{ margin: "40px 0" }} />
      {/*  */}

      <Row>
        <Col xl={20} lg={20} md={24} xs={24}>
          <Row>
            {statics?.map((statics, index) => (
              <Col
                xl={6}
                lg={6}
                md={12}
                xs={24}
                className={styles.stats}
                key={index}
              >
                <div>
                  <h4 className={styles.number}>
                    {statics.number}
                    <span className={styles.nofw}>{statics.nofw}</span>
                  </h4>
                  <span className={styles.text}>{statics.text}</span>
                </div>
                <div>
                  <hr className={styles.hr_lines} />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
          xl={4}
          lg={4}
          md={24}
          xs={24}
        >
          <div>
            <button className={styles.touch}>Get in Touch</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Stats;
