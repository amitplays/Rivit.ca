import React from "react";
import Fade from "react-reveal/Fade";
import grow from "../assets/grow.png";
import customAppIcon from "../assets/rivitRing.png";
import hcl from "../assets/HCL_Domino.png";
import reviveLogo from "../assets/reviveLogo.png";
import blogImg1 from "../assets/blogImg1.jpg";
import blogImg2 from "../assets/blogImg2.png";
import blogImg3 from "../assets/blogImg3.png";
import migrateMe from "../assets/mm.png";
import clients from "../assets/clients.png";

import { Button, Badge, Row, Col } from "react-bootstrap";

export default function FirstBlock() {
  return (
    <>
      {/* First Row */}
      <div className="parentOfOneCard">
        <div className="cardStyles fullWidthHomeCard">
          <Row style={{ paddingLeft: 15 }}>
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
                  <h5>
                    Helping you rapidly build and launch enterprise-grade,
                    business, and customer-facing apps using low-code
                    development. Witness immediate business value with 10x
                    faster development. <br /> We follow the culture of constant
                    learning and improvement to provide the best solutions to
                    clients.
                  </h5>
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

                  <Button className="btnColor">Learn More</Button>
                </div>
              </Fade>
            </div>
            {/* 2ndCard */}
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
                  <Button className="btnColor">Learn More</Button>
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
                  <Button className="btnColor" variant="outline-light">
                    Contact Us
                  </Button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Fade bottom>
        <div className="fullWidthHomeCard">
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

      {/* -------Why Rivit ?   */}
      <Fade bottom>
        <div
          className="fullWidthHomeCard fourCardStyle"
          style={{ margin: "150px 0px" }}
        >
          <h1
            style={{
              color: "#000",
              display: "block",
              alignSelf: "center",
              padding: "0px 190px",
            }}
          >
            Rivit creates engaging and intuitive applications for the modern
            organization!
          </h1>
          <div
            className="CustomCardRow"
            style={{ color: "#000", textAlign: "left", padding: "0px 50px" }}
          >
            <h5>
              Rivit Technology Partners specializes in all phases of the
              Application Lifecycle. For over 20 years organizations have turned
              to Rivit to build, modernize, and manage business-critical
              applications. Our successful practice ensures a structured
              methodology using industry-leading frameworks including
              SharePoint, Volt, and our own Revive solution for creating modern
              and open standard web and mobile applications.
            </h5>
          </div>
        </div>
      </Fade>

      {/* ------------------ Riviting Insights --------------------------------*/}
      <Fade bottom>
        <div className="f">
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
            <Fade bottom>
              <div className="CustomCard">
                <div className="fourCardStyleNoBorder">
                  <img
                    className="CardImageBlog"
                    height="158px"
                    width="320px"
                    alt="CustomApp"
                    src={blogImg1}
                  />
                  <h5 className="subsCardHeading">Understanding the problem</h5>
                  <p>Is Low-Code/No-Code The Best Platform for You?</p>
                  <Button variant="outline-primary" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="CustomCard">
                <div className="fourCardStyleNoBorder">
                  <img
                    className="CardImageBlog"
                    height="158px"
                    width="320px"
                    alt="CustomApp"
                    src={blogImg2}
                  />
                  <h5 className="subsCardHeading">A decade of Excellence</h5>
                  <p>Rivit's Dcom application is Celebrating 10 Years !</p>
                  <Button variant="outline-warning" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="CustomCard">
                <div className="fourCardStyleNoBorder">
                  <img
                    className="CardImageBlog"
                    height="158px"
                    width="320px"
                    alt="CustomApp"
                    src={blogImg3}
                  />
                  <h5 className="subsCardHeading">A decade of Excellence</h5>
                  <p>Rivit's Dcom application is Celebrating 10 Years !</p>
                  <Button variant="outline-success" size="sm">
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
