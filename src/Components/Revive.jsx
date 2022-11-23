import { Button, ListGroup, Alert, Col, Row } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import tik from "../assets/tik.png";
import reviveX from "../assets/revive.png";
import revive from "../assets/reviveFinal.png";
import reviveLong from "../assets/ReviveLong.png";
import HCL_Volt from "../assets/HCL_Domino_Volt_Logo.png";
import HCL_business from "../assets/hcl_software_business_partner_q.png";
export default function Revive() {
  return (
    <div className="faqBody">
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
                <h1 style={{ textAlign: "left" }}>Revive</h1>
                <h5 className="headingSubtext">
                  Migrate Notes Domino Applications to an Enterprise Web
                  Application
                </h5>
              </div>
            </Fade>
          </Col>
          <Col sm={4}>
            <Fade right>
              <div className="longWidthImage">
                <img
                  className="longWidthImage"
                  src={revive}
                  alt="sideBanner_Mm"
                ></img>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
      <Fade bottom>
        <div className="cardStyles">
          <h1 style={{ padding: "40px", textAlign: "center" }}>
            Enterprise Application Migrating and Archiving solutions
          </h1>
          <br />
          <Row
            style={{
              marginTop: 20,
            }}
          >
            <Col sm={5}>
              <div
                className="CustomCard"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Fade left>
                  <div
                    style={{
                      maxWidth: "400px",
                    }}
                  >
                    <img
                      src={reviveX}
                      alt="speed"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        display: "block",
                      }}
                    />
                  </div>
                </Fade>
              </div>
            </Col>
            <Col sm={7}>
              <div className="CustomCard me">
                <Fade right>
                  <div
                    className="noBorder"
                    style={{
                      width: "100%",
                    }}
                  >
                    <h1 className="subsCardHeading">Migrate and Morderize</h1>
                    <p
                      style={{
                        maxWidth: "650px",
                      }}
                    >
                      Complex Domino applications are the most significant
                      challenge to completing a migration from the HCL Notes
                      Domino platform. It’s where migrations to SharePoint and
                      Low Code platforms fail.
                      <br />
                      <br />
                      Revive Leverages proprietary migration utilities to
                      transform complex Notes Domino applications into a modern
                      web application.
                    </p>
                    <div className="mmListWrapper">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Comprehensive Migration Utilities
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Standardized Technology Stack
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Cloud & Mobile Ready
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                    <Button variant="light" className="ctaButton">
                      Get Started
                    </Button>
                  </div>
                </Fade>
              </div>
            </Col>
          </Row>
          <br />
          <div>
            <Row>
              <div>
                <Fade bottom>
                  <div
                    className="fullWidthHomeCard"
                    style={{
                      marginTop: 20,
                    }}
                  >
                    <h1
                      className="headingFont"
                      style={{
                        color: "#000",
                        display: "block",
                        alignSelf: "center",
                        padding: 2,
                      }}
                    >
                      Migration Utilities
                    </h1>
                    <div className="CustomCardRow">
                      <div className="CustomCard">
                        <Fade left>
                          <div className="fourCardStyleNoBorder cardFixedHeightSM">
                            <h2 className="subsCardHeading">
                              Application Generator
                            </h2>
                            <h6>
                              Revive extracts the Domino views and forms and
                              generates a new modern application.
                            </h6>
                          </div>
                        </Fade>
                      </div>

                      <div className="CustomCard">
                        <Fade left>
                          <div className="fourCardStyleNoBorder cardFixedHeightSM">
                            <h2 className="subsCardHeading">
                              User Profile Management
                            </h2>
                            <h6>
                              Application user information is migrated and
                              integrated with the corporate directory system.
                            </h6>
                          </div>
                        </Fade>
                      </div>
                      <div className="CustomCard">
                        <Fade right>
                          <div className="fourCardStyleNoBorder cardFixedHeightSM">
                            <h2 className="subsCardHeading">Data Migrator</h2>
                            <h6>
                              Domino data is migrated to an enterprise SQL
                              Database without the need for analysis, mapping or
                              cleansing.
                            </h6>
                          </div>
                        </Fade>
                      </div>
                      <div className="CustomCard">
                        <Fade right>
                          <div className="fourCardStyleNoBorder cardFixedHeightSM">
                            <h2 className="subsCardHeading">Logic Migration</h2>
                            <h6>
                              Application logic is migrated to the new
                              application for analysis and streamlined
                              conversion.
                            </h6>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </Row>

            <img
              src={reviveLong}
              height="auto"
              alt="clients"
              className="clientImage"
            />
            {/* __________________________  Application Advantages __________________________ */}

            <Fade bottom>
              <div
                className="fullWidthHomeCard"
                style={{
                  marginTop: 20,
                }}
              >
                <h1
                  className="headingFont"
                  style={{
                    color: "#000",
                    display: "block",
                    alignSelf: "center",
                    padding: 2,
                  }}
                >
                  Application Advantages
                </h1>
                <div className="CustomCardRow">
                  <div className="CustomCard">
                    <Fade left>
                      <div className="fourCardStyleNoBorder cardFixedHeightSM">
                        <h2 className="subsCardHeading">Sustainable</h2>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <img alt="icon" src={tik} className="mmTik" />
                        </div>
                        <h6>
                          Leveraging industry-standard web technologies
                          including Spring Boot, React JS and MS SQL, migrated
                          applications are fully supported by a vibrant
                          corporate and developer community.
                        </h6>
                      </div>
                    </Fade>
                  </div>

                  <div className="CustomCard">
                    <Fade left>
                      <div className="fourCardStyleNoBorder cardFixedHeightSM">
                        <h2 className="subsCardHeading">Intuitive UI/UX</h2>
                        <h6>
                          Dynamic data grids and advanced forms replace the
                          original application interface and provide column
                          selection, filtering, bidirectional sorting, and full
                          text search.
                        </h6>
                      </div>
                    </Fade>
                  </div>
                  <div className="CustomCard">
                    <Fade right>
                      <div className="fourCardStyleNoBorder cardFixedHeightSM">
                        <h2 className="subsCardHeading">Mobile Ready</h2>
                        <h6>
                          The new responsive application can be used and
                          consumed on a desktop, laptop, tablet, or mobile
                          device.
                        </h6>
                      </div>
                    </Fade>
                  </div>
                  <div className="CustomCard">
                    <Fade right>
                      <div className="fourCardStyleNoBorder cardFixedHeightSM">
                        <h2 className="subsCardHeading">Cloud Ready</h2>
                        <h6>
                          Migrated applications can be easily implemented to any
                          virtual and cloud environment.
                        </h6>
                      </div>
                    </Fade>
                  </div>
                  <div className="CustomCard">
                    <Fade right>
                      <div className="fourCardStyleNoBorder cardFixedHeightSM">
                        <h2 className="subsCardHeading">Cloud Ready</h2>
                        <h6>
                          Migrated applications can be easily implemented to any
                          virtual and cloud environment.
                        </h6>
                      </div>
                    </Fade>
                  </div>
                  <div className="CustomCard">
                    <Fade right>
                      <div className="fourCardStyleNoBorder cardFixedHeightSM">
                        <h2 className="subsCardHeading">Cloud Ready</h2>
                        <h6>
                          Migrated applications can be easily implemented to any
                          virtual and cloud environment.
                        </h6>
                      </div>
                    </Fade>
                  </div>
                  <div className="CustomCard">
                    <Fade right>
                      <div className="fourCardStyleNoBorder cardFixedHeightSM">
                        <h2 className="subsCardHeading">Cloud Ready</h2>
                        <h6>
                          Migrated applications can be easily implemented to any
                          virtual and cloud environment.
                        </h6>
                      </div>
                    </Fade>
                  </div>
                  <div className="CustomCard">
                    <Fade right>
                      <div className="fourCardStyleNoBorder cardFixedHeightSM">
                        <h2 className="subsCardHeading">Cloud Ready</h2>
                        <h6>
                          Migrated applications can be easily implemented to any
                          virtual and cloud environment.
                        </h6>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>

            {/* __________________________  App Analyser __________________________ */}
            <Row
              style={{
                marginTop: 70,
              }}
            >
              <h1>Domino Restart – Easy to Come Back, Easy to Move Forward</h1>
              <p>
                With Domino Restart, Domino users without maintenance and
                support can now upgrade to Domino 12, penalty-fee! An upgrade to
                v12 is direct, fast, and easy due to HCL’s continued commitment
                to ensuring your Domino applications today will run unchanged on
                the Domino of tomorrow allowing you to utilize the latest
                benefits and technology with full backwards compatibility.
              </p>
              <div
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={HCL_business}
                  alt="speed"
                  style={{
                    maxWidth: "60%",
                    maxHeight: "100%",
                    display: "block",
                  }}
                />
              </div>
            </Row>
          </div>
        </div>
      </Fade>
    </div>
  );
}
