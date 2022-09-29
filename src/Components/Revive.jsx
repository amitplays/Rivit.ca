import { Button, ListGroup, Alert, Col, Row } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import HCLDomino from "../assets/reviveLogo.png";
import tik from "../assets/tik.png";
import dcomBanner from "../assets/dcomBanner.png";
import revive from "../assets/revive.png";
import HCL_Nomad from "../assets/HCL_Nomad_Logo-1030x186-1.png";
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
                <p>
                  Revive Leverages proprietary migration utilities to transform
                  complex Notes Domino applications into a modern web
                  application.
                </p>
                <br />
                <p>
                  Complex Domino applications are the most significant challenge
                  to completing a migration from the HCL Notes Domino platform.
                  It’s where migrations to SharePoint and Low Code platforms
                  fail.
                </p>
              </div>
            </Fade>
          </Col>
          <Col sm={4}>
            <Fade right>
              <div className="longWidthImage">
                <img
                  className="longWidthImage"
                  src={HCLDomino}
                  alt="sideBanner_Mm"
                ></img>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
      <Fade bottom>
        <div className="cardStyles">
          <h1 className="nopaddingHeading">Revive Migrate & Mordernize</h1>
          <div>
            <Row
              style={{
                marginTop: 20,
              }}
            >
              <div>
                <Fade right>
                  <div
                    style={{
                      width: "100%",
                      padding: "0px 20px 20px 20px",
                    }}
                  >
                    <h1>Migration Utilities</h1>
                    <div className="mmListWrapper">
                      <ListGroup variant="flush">
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Application Generator
                          </ListGroup.Item>
                          <p>
                            Revive extracts the Domino views and forms and
                            generates a new modern application.
                          </p>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Logic Migration
                          </ListGroup.Item>
                          <p>
                            Application logic is migrated to the new application
                            for analysis and streamlined conversion.
                          </p>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            User Profile Management
                          </ListGroup.Item>
                          <p>
                            Application user information is migrated and
                            integrated with the corporate directory system.
                          </p>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Data Migrator
                          </ListGroup.Item>
                          <p>
                            Domino data is migrated to an enterprise SQL
                            Database without the need for analysis, mapping or
                            cleansing.
                          </p>
                        </Fade>
                      </ListGroup>
                    </div>
                    <br />
                    <p
                      style={{
                        maxWidth: "650px",
                      }}
                    >
                      Unleash the Power of Your Desktop Domino Application!
                    </p>
                    <div className="mmListWrapper">
                      <ListGroup variant="flush">
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Mobile Friendly
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Local Encryption
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Enhanced Functionality
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
            </Row>
            {/* __________________________  HCL Domino Volt __________________________ */}
            <Row
              style={{
                marginTop: 20,
              }}
            >
              <div>
                <Fade right>
                  <div
                    style={{
                      width: "100%",
                      padding: "0px 20px 20px 20px",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={HCL_Volt}
                        alt="speed"
                        style={{
                          maxWidth: "60%",
                          maxHeight: "100%",
                          display: "block",
                        }}
                      />
                    </div>
                    <h1>HCL Domino Volt</h1>
                    <p>
                      Build Enterprise Apps Lightning Fast
                      <br />
                      <br />
                      HCL Domino Volt is your solution for citizen developers to
                      build powerful, secure, and enterprise-grade applications
                      on the proven Domino platform. With no specialized IT
                      skills required, you can empower your business users to
                      build applications for document management, secure audit
                      compliance and more. Extend your Domino investment today
                      with Domino Volt.
                    </p>
                    <div className="mmListWrapper">
                      <ListGroup variant="flush">
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Extend and enhance the value of your Domino apps by
                            building new apps that interact with their data and
                            agents.
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            New HCL Link capabilities let IT define and manage
                            connections for Domino Volt designers to build into
                            their apps. Examples include SAP, Salesforce,
                            ServiceNow, REST, ODATA, JDBC and many more!
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Define document workflows down to the user level to
                            determine who gets assigned, notified, what they see
                            and can do, what connections are called and who get
                            alerts when the process is complete.
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            IT admin controls include defining who can create
                            and use apps, what types and sizes of files can be
                            added, which services and integrations are allowed,
                            as well as the ability to sandbox the use of
                            JavaScript.
                          </ListGroup.Item>
                        </Fade>

                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            The style editor lets business developers customize
                            the look of their apps without having to know CSS.
                          </ListGroup.Item>
                        </Fade>
                      </ListGroup>
                    </div>
                    <br />
                    <p
                      style={{
                        maxWidth: "650px",
                      }}
                    >
                      Unleash the Power of Your Desktop Domino Application!
                    </p>
                    <div className="mmListWrapper">
                      <ListGroup variant="flush">
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Conversion Optimization
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Document Security
                          </ListGroup.Item>
                        </Fade>
                        <Fade right>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Embedded Attachments & Enhanced Security
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
            </Row>

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
