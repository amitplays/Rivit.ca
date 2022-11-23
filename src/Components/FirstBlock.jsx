import React from "react";
import Fade from "react-reveal/Fade";
import grow from "../assets/grow.png";
import customAppIcon from "../assets/rivitRing.png";
import hcl from "../assets/HCL_Domino.png";
import revive from "../assets/revive.png";
import blogImg1 from "../assets/blogImg1.jpg";
import blogImg2 from "../assets/blogImg2.png";
import tik from "../assets/tik.png";
import blogImg3 from "../assets/blogImg3.png";
import migrateMe from "../assets/mm.png";
import { useHistory } from "react-router-dom";
import clients from "../assets/clients.png";
import { Button, ListGroup, Row, Col } from "react-bootstrap";

export default function FirstBlock() {
  const history = useHistory();
  return (
    <>
      {/* First Row */}
      <div className="parentOfOneCard">
        <div className="cardStyles fullWidthHomeCard">
          <Row style={{ paddingLeft: 13, margin: "50px 0px 10px 0px" }}>
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
                  <h1 className="headingFont">
                    Enterprise Application Solutions
                  </h1>
                  <h5>
                    Helping you rapidly build and launch enterprise-grade,
                    business, and customer-facing apps using low-code
                    development. Witness immediate business value with 10x
                    faster development. <br /> We follow the culture of constant
                    learning and improvement to provide the best solutions to
                    clients.
                  </h5>
                  <Button
                    onClick={() => history.push("/contactus")}
                    variant="light"
                    className="ctaButton"
                  >
                    Get Started
                  </Button>
                  <div>
                    <div style={{ marginTop: "45px" }}></div>
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
                  }}
                >
                  <img src={grow} alt="speed" className="CardImages" />
                </div>
              </Fade>
            </Col>
          </Row>

          <div className="CustomCardRow">
            <div className="CustomCard">
              <Fade bottom>
                <div className="fourCardStyle cardFixedHeight">
                  <h3 className="subsCardHeading">
                    Notes Domino App Migrations
                  </h3>
                  <img
                    height="38px"
                    width="170px"
                    alt="CustomApp"
                    src={migrateMe}
                    className="CardImageIconHomePage"
                  />
                  <p>
                    Notes Domino Migration Solutions. Rivit’s Industry Leading
                    Solutions and Hardened Migration Practice will Help You
                    Eliminate Notes Domino Once and For All.
                  </p>

                  <Button
                    onClick={() => history.push("/workshops")}
                    className="btnColor"
                  >
                    Learn More
                  </Button>
                </div>
              </Fade>
            </div>
            {/* ------------------- 2ndCard -------------------*/}
            <div className="CustomCard">
              <Fade bottom>
                <div className="fourCardStyle cardFixedHeight">
                  <h3 className="subsCardHeading">
                    HCL Domino Support Services
                  </h3>
                  <img
                    height="38px"
                    width="216px"
                    alt="CustomApp"
                    src={hcl}
                    className="CardImageIconHomePage"
                  />
                  <p>
                    Bring Your Legacy HCL Domino Applications Up-to-Date With
                    Your Evolving Business. HCL Nomad brings the power of HCL
                    Domino applications beyond the desktop, directly to where
                    your users need to be.
                  </p>
                  <Button
                    className="btnColor"
                    onClick={() => history.push("/hcldomino")}
                  >
                    Learn More
                  </Button>
                </div>
              </Fade>
            </div>
            <div className="CustomCard">
              <Fade bottom>
                <div className="fourCardStyle cardFixedHeight">
                  <h3 className="subsCardHeading">Custom App Development</h3>
                  <img
                    height="50px"
                    width="50px"
                    alt="CustomApp"
                    src={customAppIcon}
                    className="CardImageIconHomePage"
                  />
                  <p>
                    Unique requirements sometimes call for a unique approach. We
                    love to think outside the box!
                  </p>
                  <Button
                    onClick={() => history.push("/customapp")}
                    className="btnColor"
                    variant="outline-light"
                  >
                    Contact Us
                  </Button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------Why Rivit ? -----------------------------------  */}
      <Fade bottom>
        <Row
          style={{
            marginTop: 150,
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
                  className="noBorder cardStyles"
                  style={{
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  <h1 className="subsCardHeading headingFont">Why Rivit ?</h1>
                  <p
                    style={{
                      maxWidth: "650px",
                    }}
                  >
                    Revive is strategically compiled for the migration of
                    complex Notes Domino applications.
                    <br />
                    <br />
                    Revive's proprietary migration utilities collect and convert
                    the views, forms, code, data, and security, to recreate a
                    modern enterprise application free of the original platform.
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
                    </ListGroup>
                  </div>
                  <Button variant="light" className=" ctaButton">
                    Get Started
                  </Button>
                </div>
              </Fade>
            </div>
          </Col>
        </Row>
      </Fade>
      {/* ---------------- Helping Our Customer Section  ---------------------- */}
      <Fade bottom>
        <div
          className="fullWidthHomeCardX"
          style={{
            backgroundImage: "linear-gradient(#05213a, #05213aeb)",
            marginTop: 150,
          }}
        >
          <h1
            className="headingFont"
            style={{
              color: "#fff",
              display: "block",
              alignSelf: "center",
              padding: 25,
            }}
          >
            Helping the Customer Succeed
          </h1>
          <img
            src={clients}
            height="auto"
            alt="clients"
            className="clientImage"
          />
        </div>
      </Fade>
      {/* Rivit By Numbers*/}
      <Fade bottom>
        <div
          className="fullWidthHomeCard"
          style={{
            marginTop: 150,
          }}
        >
          <h1
            className="headingFont"
            style={{
              color: "#000",
              display: "block",
              alignSelf: "center",
              padding: 20,
            }}
          >
            Rivit by the Numbers
          </h1>
          <div className="CustomCardRow">
            <div className="CustomCard">
              <Fade left>
                <div className="fourCardStyleNoBorder cardFixedHeightSM">
                  <h1 className="subsCardHeading">120k</h1>
                  <h3>Notes Domino App Migrations</h3>
                </div>
              </Fade>
            </div>
            <div className="CustomCard">
              <Fade left>
                <div className="fourCardStyleNoBorder cardFixedHeightSM">
                  <h1 className="subsCardHeading">3500+</h1>
                  <h3>Successful Migration of 3500+ Users</h3>
                </div>
              </Fade>
            </div>
            <div className="CustomCard">
              <Fade right>
                <div className="fourCardStyleNoBorder cardFixedHeightSM">
                  <h1 className="subsCardHeading">10x</h1>
                  <h3>Fast query searches</h3>
                </div>
              </Fade>
            </div>
            <div className="CustomCard">
              <Fade right>
                <div className="fourCardStyleNoBorder cardFixedHeightSM">
                  <h1 className="subsCardHeading">210k</h1>
                  <h3>Emails Migrated</h3>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
      {/* ------------------ Riviting Insights --------------------------------*/}
      <Fade bottom>
        <div
          className="fullWidthHomeCard"
          style={{
            marginTop: 150,
          }}
        >
          <h1
            className="headingFont"
            style={{
              color: "#000",
              display: "block",
              alignSelf: "center",
              padding: 20,
            }}
          >
            Riviting Insights
          </h1>
          <div className="CustomTwoCardRow">
            <Fade bottom>
              <div className="CustomCard">
                <div className="rivitBlogCard">
                  <img
                    className="CardImageBlog"
                    height="158px"
                    width="320px"
                    alt="CustomApp"
                    src={blogImg1}
                  />
                  <h5 className="subsCardHeading">Understanding the problem</h5>
                  <p>Is Low-Code/No-Code The Best Platform for You?</p>
                  <Button
                    onClick={() => history.push("/rivitingInsights")}
                    variant="outline-primary"
                    size="sm"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="CustomCard">
                <div className="rivitBlogCard">
                  <img
                    className="CardImageBlog"
                    height="158px"
                    width="320px"
                    alt="CustomApp"
                    src={blogImg2}
                  />
                  <h5 className="subsCardHeading">A decade of Excellence</h5>
                  <p>Rivit's Dcom application is Celebrating 10 Years !</p>
                  <Button
                    onClick={() => history.push("/rivitingInsights")}
                    variant="outline-primary"
                    size="sm"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="CustomCard">
                <div className="rivitBlogCard">
                  <img
                    className="CardImageBlog"
                    height="158px"
                    width="320px"
                    alt="CustomApp"
                    src={blogImg3}
                  />
                  <h5 className="subsCardHeading">A decade of Excellence</h5>
                  <p>Rivit's Dcom application is Celebrating 10 Years !</p>
                  <Button
                    onClick={() => history.push("/rivitingInsights")}
                    variant="outline-primary"
                    size="sm"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </>
  );
}
