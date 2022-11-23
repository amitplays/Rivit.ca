import React from "react";
import {
  Button,
  ListGroup,
  Row,
  Col,
  InputGroup,
  Tabs,
  Tab,
} from "react-bootstrap";
import { MigrationForm, EmployerForm } from "./MigrationForm";
import faq2 from "../assets/contact.png";
import cusApp from "../assets/cusApp.png";
import migration from "../assets/migration.png";
import Fade from "react-reveal/Slide";
import fbIcon2 from "../assets/fbLogo.png";
import messIcon from "../assets/mesIcon2.png";
import instaIcon from "../assets/instaIcon.png";
import support from "../assets/support.png";
import cell from "../assets/cell.png";
import address from "../assets/address.png";
import mail from "../assets/email.png";

export default function ContactUs() {
  const mailtoinfo = "mailto:info@rivit.ca?subject=SendMail&body=Description";
  const mailtosupport =
    "mailto:support@rivit.ca?subject=SendMail&body=Description";

  return (
    <>
      <div className="contactUsBody">
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
                  <h1>Contact Us</h1>
                  <h5>
                    Learn about software development and it's basics. Connect
                    with us and get our latest updates!
                  </h5>
                  <div>
                    <div style={{ marginTop: "45px" }}>
                      <ul style={{ textAlign: "center", marginTop: "15px" }}>
                        <li>
                          <a href="#">
                            <img
                              alt="MessIcon"
                              style={{
                                maxWidth: "45px",
                              }}
                              src={messIcon}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt="instaIcon"
                              style={{
                                maxWidth: "45px",
                              }}
                              src={instaIcon}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt="fbIcon"
                              style={{
                                maxWidth: "45px",
                              }}
                              src={fbIcon2}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
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
                    paddingTop: "10px",
                  }}
                >
                  <img src={faq2} alt="speed" className="CardImages" />
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
        <Fade bottom>
          <div className="cardStyles fullWidthContactCard">
            <div
              style={{
                textAlign: "center",
                padding: "30px 60px",
              }}
            >
              <h1>Call or Email Rivit Directly</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <div className="fourCardStyleNoBorder">
                <div
                  style={{
                    display: "block",
                    margin: "auto",
                    maxWidth: "500px",
                    paddingTop: "10px",
                  }}
                >
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      {" "}
                      <h5>
                        <a className="contactUsItems" href={mailtoinfo}>
                          <img alt="icon" src={mail} className="mmTik" />
                          info@rivit.ca
                        </a>
                      </h5>{" "}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>
                        <a className="contactUsItems" href={mailtosupport}>
                          <img alt="icon" src={support} className="mmTik" />
                          support@rivit.ca
                        </a>
                      </h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>
                        <a className="contactUsItems" href="tel:+9971863733">
                          <img alt="icon" src={cell} className="mmTik" />
                          +1-647.930.1711
                        </a>
                      </h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>
                        <img alt="icon" src={address} className="mmTik" />
                        81 – 8 Zenway Blvd. Suite 200 Woodbridge, Ontario,
                        Canada L4H 0S5
                      </h5>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
              <div className="formParent">
                <MigrationForm />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
