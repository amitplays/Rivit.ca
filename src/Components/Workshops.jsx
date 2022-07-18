import { Button, ListGroup, Alert, Col, Row } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import workBanner from "../assets/workBanner.png";
import appAnal from "../assets/appAnal.png";
import hcl from "../assets/HCL_Domino.png";
import tik from "../assets/tik.png";
import dcomBanner from "../assets/dcomBanner.png";
import revive from "../assets/revive.png";
export default function Workshops() {
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
                <h1 style={{ textAlign: "left" }}>
                  Notes Domino Migration Solutions
                </h1>
                <h5 className="headingSubtext">
                  Rivit’s Industry Leading Solutions and Hardened Migration
                  Practice will Help You Eliminate Notes Domino Once and For
                  All.
                </h5>
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
                <img
                  src={workBanner}
                  alt="sideBanner_Mm"
                  className="CardImages"
                ></img>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
      <Fade bottom>
        <div className="cardStyles">
          <p style={{ paddingTop: 15, textAlign: "center" }}>Our Services</p>
          <h1 style={{ padding: "10px 60px 30px 60px", textAlign: "center" }}>
            Enterprise Application Migrating and Archiving solutions
          </h1>
          <div className="fullWidthHomeCard">
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
                        src={revive}
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
                      className="fourCardStyleNoBorder "
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
                        Revive is strategically compiled for the migration of
                        complex Notes Domino applications.
                        <br />
                        <br />
                        Revive's proprietary migration utilities collect and
                        convert the views, forms, code, data, and security, to
                        recreate a modern enterprise application free of the
                        original platform.
                      </p>
                      <div className="mmListWrapper">
                        <ListGroup variant="flush">
                          <Fade right>
                            <ListGroup.Item>
                              <span>
                                <img alt="icon" src={tik} className="mmTik" />
                              </span>
                              Comprehensive Migration Utilities
                            </ListGroup.Item>
                          </Fade>
                          <Fade right>
                            <ListGroup.Item>
                              <span>
                                <img alt="icon" src={tik} className="mmTik" />
                              </span>
                              Standardized Technology Stack
                            </ListGroup.Item>
                          </Fade>
                          <Fade right>
                            <ListGroup.Item>
                              <span>
                                <img alt="icon" src={tik} className="mmTik" />
                              </span>
                              Cloud & Mobile Ready
                            </ListGroup.Item>
                          </Fade>
                          <Fade right>
                            <ListGroup.Item>
                              <span>
                                <img alt="icon" src={tik} className="mmTik" />
                              </span>
                              Porta ac consectetur ac
                            </ListGroup.Item>
                          </Fade>
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
            {/* __________________________  DCOM CARD __________________________ */}
            <Row
              style={{
                marginTop: 70,
              }}
            >
              <Col sm={7}>
                <div className="CustomCard me">
                  <div
                    className="fourCardStyleNoBorder "
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
                      Revive is strategically compiled for the migration of
                      complex Notes Domino applications.
                      <br />
                      <br />
                      Revive's proprietary migration utilities collect and
                      convert the views, forms, code, data, and security, to
                      recreate a modern enterprise application free of the
                      original platform.
                    </p>
                    <div className="mmListWrapper">
                      <ListGroup variant="flush">
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Comprehensive Migration Utilities
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Standardized Technology Stack
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Cloud & Mobile Ready
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Porta ac consectetur ac
                          </ListGroup.Item>
                        </Fade>
                      </ListGroup>
                    </div>
                    <Button variant="light" className="ctaButton">
                      Get Started
                    </Button>
                  </div>
                </div>
              </Col>
              <Col sm={5}>
                <div
                  className="CustomCard"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Fade right>
                    <div
                      style={{
                        maxWidth: "400px",
                      }}
                    >
                      <img
                        src={appAnal}
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
            </Row>

            {/* __________________________  App Analyser __________________________ */}
            <Row
              style={{
                marginTop: 70,
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
                        src={dcomBanner}
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
                      className="fourCardStyleNoBorder "
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
                        Revive is strategically compiled for the migration of
                        complex Notes Domino applications.
                        <br />
                        <br />
                        Revive's proprietary migration utilities collect and
                        convert the views, forms, code, data, and security, to
                        recreate a modern enterprise application free of the
                        original platform.
                      </p>
                      <div className="mmListWrapper">
                        <ListGroup variant="flush">
                          <Fade right>
                            <ListGroup.Item>
                              <span>
                                <img alt="icon" src={tik} className="mmTik" />
                              </span>
                              Comprehensive Migration Utilities
                            </ListGroup.Item>
                          </Fade>
                          <Fade right>
                            <ListGroup.Item>
                              <span>
                                <img alt="icon" src={tik} className="mmTik" />
                              </span>
                              Standardized Technology Stack
                            </ListGroup.Item>
                          </Fade>
                          <Fade right>
                            <ListGroup.Item>
                              <span>
                                <img alt="icon" src={tik} className="mmTik" />
                              </span>
                              Cloud & Mobile Ready
                            </ListGroup.Item>
                          </Fade>
                          <Fade right>
                            <ListGroup.Item>
                              <span>
                                <img alt="icon" src={tik} className="mmTik" />
                              </span>
                              Porta ac consectetur ac
                            </ListGroup.Item>
                          </Fade>
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
          </div>
        </div>
      </Fade>
    </div>
  );
}
