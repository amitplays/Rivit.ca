import React from "react";
import {
  Button,
  Alert,
  Row,
  Col,
  InputGroup,
  Tabs,
  Tab,
} from "react-bootstrap";
import { StudentForm, EmployerForm } from "./StudentForm";
import faq2 from "../assets/contact.png";
import cusApp from "../assets/cusApp.png";
import migration from "../assets/migration.png";
import Fade from "react-reveal/Slide";
import fbIcon2 from "../assets/fbLogo.png";
import messIcon from "../assets/mesIcon2.png";
import instaIcon from "../assets/instaIcon.png";

export default function ContactUs() {
  return (
    <>
      <div className="contactUsBody">
        <div className="cardStyles fullWidthHomeCard">
          <Row>
            <Col sm={8}>
              <Fade left>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <h1>Contact Us</h1>
                  <h5>
                    Learn about software development and it's basics. Connect
                    with us and get our latest updates!
                  </h5>
                  <div>
                    <div style={{ marginTop: "45px" }}>
                      <ul style={{ textAlign: "center", marginTop: "15px" }}>
                        <li>
                          <a href="#">
                            <img
                              alt="MessIcon"
                              style={{
                                maxWidth: "45px",
                              }}
                              src={messIcon}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt="instaIcon"
                              style={{
                                maxWidth: "45px",
                              }}
                              src={instaIcon}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt="fbIcon"
                              style={{
                                maxWidth: "45px",
                              }}
                              src={fbIcon2}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col sm={4}>
              <Fade right>
                <div
                  style={{
                    display: "block",
                    margin: "auto",
                    maxWidth: "300px",
                    paddingTop: "10px",
                  }}
                >
                  <img src={faq2} alt="speed" className="CardImages" />
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
        <Fade bottom>
          <Tabs
            defaultActiveKey="MigrationServices"
            id="uncontrolled-tab-example"
            className="mb-3 ContactTabStyle"
            variant="pills"
          >
            {/* -------- Migration Tab ------- */}
            <Tab eventKey="MigrationServices" title="Migration Services">
              <div className="cardStyles fullWidthContactCard">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div className="Illustration">
                    <div
                      style={{
                        display: "block",
                        margin: "auto",
                        maxWidth: "300px",
                        paddingTop: "10px",
                      }}
                    >
                      <img src={migration} alt="speed" className="CardImages" />
                    </div>
                  </div>
                  <div className="formParent">
                    <StudentForm />
                  </div>
                </div>
              </div>
            </Tab>

            {/* -------- Custom App Tab ------- */}
            <Tab eventKey="CustomApp" title="Custom App">
              <div className="parentOfOneCard">
                <div className="empContactUsCard fullWidthContactCard">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div className="formParent">
                      <EmployerForm />
                    </div>
                    <div className="Illustration">
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          maxWidth: "300px",
                          paddingTop: "10px",
                        }}
                      >
                        <img src={cusApp} alt="speed" className="CardImages" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Fade>
      </div>
    </>
  );
}
