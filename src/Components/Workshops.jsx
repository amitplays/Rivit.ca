import { Button, Badge, Alert, Col, Row } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import workBanner from "../assets/workBanner.png";
import customAppIcon from "../assets/rivitRing.png";
import hcl from "../assets/HCL_Domino.png";
import reviveLogo from "../assets/reviveLogo.png";
export default function Workshops() {
  return (
    <div>
      <div className="workshopsBody">
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
                    <h1 style={{ textAlign: "left" }}>
                      Notes Domino Migration Solutions
                    </h1>
                    <h4 className="headingSubtext">
                      Rivit’s Industry Leading Solutions and Hardened Migration
                      Practice will Help You Eliminate Notes Domino Once and For
                      All.
                    </h4>
                    <Button variant="light" className="ctaButton">
                      Connect with Us
                    </Button>
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
                      paddingTop: "20px",
                    }}
                  >
                    <img src={workBanner} className="CardImages"></img>
                  </div>
                </Fade>
              </Col>
            </Row>
            {/* Second Row ------------------------------- */}
            <div className="CustomCardRow">
              <div className="CustomCard">
                <Fade bottom>
                  <div className="fourCardStyle cardFixedHeight">
                    <h2 className="subsCardHeading">
                      Notes Domino App Migrations
                    </h2>
                    <img
                      height="38px"
                      width="113px"
                      alt="CustomApp"
                      src={reviveLogo}
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
                      Unique requirements sometimes call for a unique approach.
                      We love to think outside the box!
                    </p>
                    <Button variant="success">Enroll Now</Button>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row
        style={{
          marginTop: 100,
        }}
      >
        <Col
          style={{
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Fade left>
            <div
              style={{
                backgroundColor: "#ac5e00",
                color: "#fff",
              }}
              className="fourCardStyle cardFixedHeight"
            >
              <h4 className="subsCardHeading">Attend a Workshop </h4>
              <ul style={{ textAlign: "left" }}>
                <li>3 Level Workshops</li>
                <li>Real Life Projects</li>
                <li>Regular Feedback</li>
              </ul>
              <Button className="fullWidthButton" variant="success">
                Enroll Now
              </Button>
            </div>
          </Fade>
        </Col>
        <Col md={7}>
          <Fade right>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h1>Who should Enroll ?</h1>
              <h4 className="headingSubtext">
                If you to learn programming and wondering what are some of the
                most basic things every software developer or programmer should
                learn or know, then, here is a list of some of the fundamental
                things you can learn to do well as a programmer.
              </h4>
            </div>
          </Fade>
        </Col>
      </Row>
    </div>
  );
}
