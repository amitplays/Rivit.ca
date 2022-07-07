import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import grow from "../assets/grow.png";
import customAppIcon from "../assets/rivitRing.png";
import hcl from "../assets/HCL_Domino.png";
import reviveLogo from "../assets/reviveLogo.png";
import migrateMe from "../assets/mm.png";
import clients from "../assets/clients.png";

import { Button, Badge, Row, Col } from "react-bootstrap";

export default function FirstBlock() {
  return (
    <>
      {/* First Row */}
      <div className="parentOfOneCard">
        <div className="cardStyles fullWidthHomeCard">
          <Row>
            <Col sm={7}>
              <Fade left>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <h1>Enterprise Application Solutions</h1>
                  <h4>
                    Helping you rapidly build and launch enterprise-grade,
                    business, and customer-facing apps using low-code
                    development. Witness immediate business value with 10x
                    faster development. <br /> We follow the culture of constant
                    learning and improvement to provide the best solutions to
                    clients.
                  </h4>
                  <Button variant="light" className="ctaButton">
                    Get Started
                  </Button>
                  <div>
                    <div style={{ marginTop: "45px" }}></div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col sm={5}>
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
                  <h2 className="subsCardHeading">
                    Notes Domino App Migrations
                  </h2>
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

                  <Button variant="success" href={"./certifications"}>
                    Enroll Now
                  </Button>
                </div>
              </Fade>
            </div>
            {/* 2ndCard */}
            <div className="CustomCard">
              <Fade bottom>
                <div className="fourCardStyle cardFixedHeight">
                  <h2 className="subsCardHeading">
                    HCL Domino Support Services
                  </h2>
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
                  <Button variant="success">start Now</Button>
                </div>
              </Fade>
            </div>
            <div className="CustomCard">
              <Fade bottom>
                <div className="fourCardStyle cardFixedHeight">
                  <h2 className="subsCardHeading">Custom App Development</h2>
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
                  <Button variant="success">Enroll Now</Button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Fade bottom>
        <div className="fullWidthHomeCard">
          <h4
            style={{
              color: "#000",
              display: "block",
              alignSelf: "center",
              padding: 5,
            }}
          >
            Discover the X-Factor
          </h4>
          <h1
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
      {/* ---------------- Helping Our Customer Section  ---------------------- */}
      <Fade bottom>
        <div
          className="fullWidthHomeCardX"
          style={{
            backgroundImage: "linear-gradient(#05213a, #05213aeb)",
          }}
        >
          <h1
            style={{
              color: "#fff",
              display: "block",
              alignSelf: "center",
              padding: 20,
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
      <Fade bottom>
        <div className="">
          <h1
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
            <div className="CustomCard">
              <Fade bottom>
                <div className="fourCardStyleNoBorder cardFixedHeightSM">
                  <h2 className="subsCardHeading">Understanding the problem</h2>
                  <p>Is Low-Code/No-Code The Best Platform for You?</p>
                  <Button variant="success">Read More</Button>
                </div>
              </Fade>
            </div>
            <div className="CustomCard">
              <Fade bottom>
                <div className="fourCardStyleNoBorder cardFixedHeightSM">
                  <h2 className="subsCardHeading">A decade of Excellence</h2>
                  <p>Rivit's Dcom application is Celebrating 10 Years !</p>
                  <Button variant="success">Learn More</Button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
