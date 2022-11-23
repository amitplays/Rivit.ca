import { Button, Row, Col, ListGroup } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import kb from "../assets/KiloBit.png";
import mb from "../assets/MegaBit.png";
import gb from "../assets/GigaBit.png";
import tb from "../assets/TeraBit.png";
import faq from "../assets/suitcase.png";
import tik from "../assets/tik.png";
import frontEnd from "../assets/frontEnd.png";
export default function Careers() {


  


  return (
    <div>
      <div className="workshopsBody">
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
                  <h1>Interested in Joining The Rivit Team?</h1>
                  <h5>
                    Rivit is always looking for talented software professionals
                    to share in our growth.
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
                  <img src={faq} alt="speed" className="CardImages" />
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
        <div className="fourCardRow">
          <Fade bottom>
            <div className="fourCardStyle">
              <img
                style={{ alignSelf: "center", maxWidth: "100%" }}
                src={kb}
                alt="speed"
              />
              <h4 className="subsCardHeading">Great Salary</h4>
              <p className="headingSubtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="fourCardStyle cardFixedHeight">
              <img
                height={90}
                width={95}
                style={{ alignSelf: "center" }}
                src={mb}
                alt="speed"
              />
              <h4 className="subsCardHeading"> Flexible Working hours</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="fourCardStyle cardFixedHeight">
              <img
                height={90}
                width={90}
                style={{ alignSelf: "center" }}
                src={gb}
                alt="speed"
              />
              <h4 className="subsCardHeading">Health benefits</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="fourCardStyle cardFixedHeight">
              <img
                height={90}
                width={90}
                style={{ alignSelf: "center" }}
                src={tb}
                alt="speed"
              />
              <h4 className="subsCardHeading">
                3 weeks vacations and days off !
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <Row
            style={{
              marginTop: 100,
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
                      src={frontEnd}
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
                    className="fourCardStyleNoBorder cardStyles"
                    style={{
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    <h1 className="subsCardHeading">Full Stack Developer</h1>
                    <p
                      style={{
                        maxWidth: "650px",
                      }}
                    >
                      Rivit is currently looking for great Full Stack Developers
                      to work on our exciting projects. Continue your career
                      with a great salary/bonus plan, flexible working hours,
                      health benefits, and a generous amount of time off too!
                      <br />
                      <br />
                      If you have experience and knowledge in any of the
                      following technologies, we’d love to hear from you!
                    </p>
                    <div className="mmListWrapper">
                      <ListGroup variant="flush">
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Apache Tomcat or other JEE Application Server
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            MYSQL, Postgres, MSSQL, NoSQL
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            AngularJS, ReactJS, Ionic (HTML/CSS with Bootstrap)
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Maven, NPM
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Eclipse and/or IntelliJ
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Object Oriented Programing and Delivery
                          </ListGroup.Item>
                        </Fade>
                      </ListGroup>
                    </div>
                    <Button variant="light" className=" ctaButton">
                      Apply Now
                    </Button>
                  </div>
                </Fade>
              </div>
            </Col>
          </Row>
        </Fade>
      </div>
    </div>
  );
}
