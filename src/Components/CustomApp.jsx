import { Button, Row, Col, ListGroup } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import blogImg1 from "../assets/blogImg1.jpg";
import tik from "../assets/tik.png";
import blogImg2 from "../assets/blogImg2.png";
import blogImg3 from "../assets/blogImg3.png";
import blogIcon from "../assets/blogIcon.jpg";
import discussion from "../assets/customApp.png";

export default function CustomApp() {
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
                  <h1>Rivit Application Development</h1>
                  <h5>
                    Unique Requirements Sometimes Call For A Unique Approach. We
                    Love To Think Outside The Box!
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
                  <img src={discussion} alt="speed" className="CardImages" />
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
        <Fade bottom>
          <div
            className="cardStyles"
            style={{
              marginTop: 15,
              padding: "20px",
            }}
          >
            <h1 style={{ padding: "30px 60px 30px 60px", textAlign: "center" }}>
              Custom Application Development
            </h1>
            <p style={{ paddingBottom: "10px", textAlign: "center" }}>
              Rivit Prides Itself On Delivering Creative And Cost Effective
              Solutions To Complex Challenges.
            </p>
            <div className="CustomTwoCardRow">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>Custom App Development</h4>
                  <p>
                    Rivit’s application services group focuses on the custom
                    development and configuration of applications built with
                    leading and innovative technologies. We pride ourselves on
                    an honest, hardworking, skilled team and a successful
                    20-year history working with devoted clients to build,
                    modernize, and manage business critical applications.
                    <br />
                    <br />
                    Our goal is to provide the greatest value to an organization
                    in the least amount of time and cost. We collaborate with
                    you to create a detailed vision for the application and how
                    it will ultimately serve the organization. We then leverage
                    the technologies that will deliver the strongest value to
                    the application and organization.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <h4>Development Methodology</h4>
                  <p>
                    Rivit uses a hybrid approach to software development
                    adapting best practices to the needs of the project and the
                    clients we are working with. We approach each project with a
                    lean team of Rivit and client subject matter experts for an
                    efficient collaborative process. Our development methodology
                    ensures a balance exists between evolving requirements,
                    deliverables, and budget.
                  </p>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <h4>Requirements & Discovery</h4>
                  <p>
                    Incremental collaborative discovery is very important to
                    Rivit’s iterative approach to software development. The
                    thorough understanding and documentation of requirements
                    will allow us to confirm and/or adjust our vision to ensure
                    continued delivery of functionality that has both purpose,
                    and measurable results.
                  </p>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Project Management</h4>
                  <p>
                    Rivit believes that the key to a successful project is a
                    strong Project Management process. The key to a strong
                    Project Management process is to have not only knowledgeable
                    and extremely capable people, but to also have the systems
                    in place to assist them.
                  </p>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Quality Assurance</h4>
                  <p>
                    Rivit prides itself on delivering the highest quality code
                    possible. All members of the team accepting responsibility
                    for their deliverables accomplish this. When possible,
                    automated testing is created by our developers to scrutinize
                    the code as best as possible before final integration. At a
                    minimum, every developer is responsible for unit testing
                    their deliverables.
                  </p>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Maintenance</h4>
                  <p>
                    Rivit provides maintenance activities for most of our
                    long-term clients. This activity can be part of a larger
                    support program for the application or can be updates
                    offered periodically to the application as required.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
