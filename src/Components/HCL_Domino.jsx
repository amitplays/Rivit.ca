import { Button, ListGroup, Alert, Col, Row } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import HCLDomino from "../assets/HCL_Domino.png";
import tik from "../assets/tik.png";
import dcomBanner from "../assets/dcomBanner.png";
import revive from "../assets/revive.png";
import HCL_Nomad from "../assets/HCL_Nomad_Logo-1030x186-1.png";
import HCL_Volt from "../assets/HCL_Domino_Volt_Logo.png";
import HCL_business from "../assets/hcl_software_business_partner_q.png";
export default function HCL_Domino() {
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
                <h1 style={{ textAlign: "left" }}>HCL Domino</h1>
                <h5 className="headingSubtext">
                  HCL Domino v12 is a major milestone! This newest version is
                  web and mobile-ready, includes low-code capability, and is
                  cloud-native.
                </h5>
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
          <p style={{ paddingTop: 15, textAlign: "center" }}>
            An upgrade from any release to v12 is direct, fast, and easy
          </p>
          <h1 className="nopaddingHeading">
            Bring Your Legacy HCL Domino Applications Up-to-Date With Your
            Evolving Business.
          </h1>
          <div>
            <Row
              style={{
                marginTop: 20,
              }}
            >
              <div>
                <Fade bottom>
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
                        src={HCL_Nomad}
                        alt="speed"
                        style={{
                          maxWidth: "60%",
                          maxHeight: "100%",
                          display: "block",
                        }}
                      />
                    </div>
                    <h1>HCL Nomad</h1>
                    <p>
                      Your Domino Apps Everywhere
                      <br />
                      HCL Nomad brings the power of HCL Domino applications
                      beyond the desktop, directly to where your users need to
                      be. Deliver the same applications, unparalleled security,
                      and offline capabilities to any device.
                    </p>
                    <div className="mmListWrapper">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Domino applications can be directly accessed online or
                          can be replicated to your mobile device for offline
                          access without modification.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          No longer do you have to worry about maintaining the
                          desktop Notes clients.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Information is locally encrypted for securing your
                          data.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          All original business logic of your applications
                          functions on the mobile device, including LotusScript,
                          complex forms, and buttons.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Utilize mobile device functionality to augment your
                          workflow. Access cameras, photos, and files on your
                          device, add location information, and more{" "}
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                    <div className="mmListWrapper">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Mobile Friendly
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Local Encryption
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Enhanced Functionality
                        </ListGroup.Item>
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
                <Fade bottom>
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
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Extend and enhance the value of your Domino apps by
                          building new apps that interact with their data and
                          agents.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          New HCL Link capabilities let IT define and manage
                          connections for Domino Volt designers to build into
                          their apps. Examples include SAP, Salesforce,
                          ServiceNow, REST, ODATA, JDBC and many more!
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          Define document workflows down to the user level to
                          determine who gets assigned, notified, what they see
                          and can do, what connections are called and who get
                          alerts when the process is complete.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          IT admin controls include defining who can create and
                          use apps, what types and sizes of files can be added,
                          which services and integrations are allowed, as well
                          as the ability to sandbox the use of JavaScript.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img alt="icon" src={tik} className="mmTik" />
                          </span>
                          The style editor lets business developers customize
                          the look of their apps without having to know CSS.
                        </ListGroup.Item>
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
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Conversion Optimization
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Document Security
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>
                              <img alt="icon" src={tik} className="mmTik" />
                            </span>
                            Embedded Attachments & Enhanced Security
                          </ListGroup.Item> 
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
