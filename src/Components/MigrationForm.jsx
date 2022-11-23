import React, { useRef } from "react";
import {
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

export function MigrationForm() {
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [query, setQuery] = useState("");

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    sendEmail(form);
    setValidated(true);
  };

  const sendEmail = (e) => {
    console.log(e);

    emailjs
      .sendForm(
        "service_an1mdvi",
        "template_yaam005",
        form.current,
        "VfGo_DVFX4lHwiopy"
      )
      .then(
        (result) => {
          console.log(result);
          alert("Email sent successfully ! ");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div style={{ padding: "30px" }}>
      <Form ref={form} onSubmit={handleSubmit}>
        <Row className="mb-1">
          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="validationCustom01"
          >
            <Form.Label>Full name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Jesse Gallagar"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="validationCustomUsername"
          >
            <Form.Label>Email Address</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid E-mail.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group className="mb-2" as={Col} controlId="validationCustom04">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              name="number"
              placeholder="Contact Number"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} controlId="validationCustom04">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              placeholder="Your company"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid company.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group
            className="mb-3"
            as={Col}
            md="12"
            controlId="validationCustom03"
          >
            <FloatingLabel
              controlId="floatingTextarea2"
              label="How can we help you"
              placeholder="How can we help you"
            >
              <Form.Control
                as="textarea"
                name="message"
                style={{ height: "140px" }}
              />
            </FloatingLabel>
            <Form.Control.Feedback type="invalid">
              You forgot to write how we can help you !
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="outline-success" type="submit">
          Send Query
        </Button>
      </Form>
    </div>
  );
}
