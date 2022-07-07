import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import rivitLogo from "../assets/rivitLogo.png";
import LoginSignup from "../StudentPortal/LoginSignup";

export default function Header() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [show, setshow] = useState(false);

  return (
    <div className="headerStyles">
      <LoginSignup onHide={() => setshow(false)} show={show}></LoginSignup>
      <Navbar
        className="navBarStyles ml-auto"
        sticky="top"
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
      >
        <Container className="navBarContainer">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={rivitLogo}
              width="150"
              height="60"
              className="logo d-inline-block"
            />
            {/* <span>BIT RECRUITER</span> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav.Link
          // as={Link} to={"./recruiter"} eventKey={2}
          >
            {/* <Button
              size="sm"
              className="recruiterButton"
              onClick={() => setshow(true)}
              // variant="primary-outline"
            >
              Download App
            </Button> */}
            <span
              href="/"
              style={{
                color: "white",
                fontSize: "25px",
              }}
            >
              Rivit Technology Partners
            </span>
          </Nav.Link>

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="ml-auto">
              <Nav.Link
                // onClick={contactUs} `
                as={Link}
                to={"./ContactUs"}
                eventKey={2}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to={"./faqs"} eventKey={2}>
                FAQs
              </Nav.Link>
              <Nav.Link as={Link} to={"./workshops"} eventKey={3}>
                Migration Solutions
              </Nav.Link>
              <Nav.Link as={Link} to={"./certifications"} eventKey={4}>
                Certifications
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
