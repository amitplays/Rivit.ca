import { Button, ListGroup, Alert, Col, Row } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import workBanner from "../assets/workBanner.png";
import appAnal from "../assets/appAnal.png";
import hcl from "../assets/HCL_Domino.png";
import tik from "../assets/tik.png";
import dcomBanner from "../assets/dcomBanner.png";
import revive from "../assets/revive.png";
import { useHistory } from "react-router-dom";

export default function Workshops() {
  const history = useHistory();
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
                      className="noBorder"
                      style={{
                        width: "100%",
                      }}
                    >
                      <h1 className="subsCardHeading">Migrate and Modernize</h1>
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
                      <Button
                        onClick={() => history.push("/revive")}
                        variant="light"
                        className="ctaButton"
                      >
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
                  <Fade left>
                    <div
                      className="noBorder"
                      style={{
                        width: "100%",
                      }}
                    >
                      <h1 className="subsCardHeading">Application Archiving</h1>
                      <p
                        style={{
                          maxWidth: "650px",
                        }}
                      >
                        Dcom is an Enterprise Application Archiving solution
                        that preserves access to legacy Domino application
                        databases completely independent of HCL Notes Domino.
                        <br />
                        <br />
                        Dcom transitions Domino applications to web-based XML
                        archives, converts documents to pdf and maintains the
                        original attachments.
                      </p>
                      <div className="mmListWrapper">
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Easy-to-Use for End-Users
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Simple Archiving Process
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Full Security & Access Controls
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
              <Col sm={5}>
                <Fade right>
                  <div
                    className="CustomCard"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
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
                  </div>
                </Fade>
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
                      className="noBorder"
                      style={{
                        width: "100%",
                      }}
                    >
                      <h1 className="subsCardHeading">Migration Analysis</h1>
                      <p
                        style={{
                          maxWidth: "650px",
                        }}
                      >
                        App|Analyzer is a no-cost solution that analyzes Notes
                        Domino applications to identify potential outcomes for
                        each application.
                        <br />
                        <br />
                        Only with a complete understanding of every application
                        in the Notes environment can an organization plan and
                        execute a complete migration from the platform.
                      </p>
                      <div className="mmListWrapper">
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Application Usage Statistics
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Application Complexity Analysis
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Migration Decision Support
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Porta ac consectetur ac
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
          </div>
        </div>
      </Fade>
    </div>
  );
}
