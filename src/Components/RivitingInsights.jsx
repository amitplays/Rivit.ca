import { Button, Row, Col, ListGroup } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import blogImg1 from "../assets/blogImg1.jpg";
import blogI from "../assets/blogl.png";
import blogImg2 from "../assets/blogImg2.png";
import blogImg3 from "../assets/blogImg3.png";
import blogIcon from "../assets/blogIcon.jpg";
import discussion from "../assets/discussion.png";
import { useHistory } from "react-router-dom";

export default function RivitingInsights() {
  const history = useHistory();

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
                  <h1>Riviting Insights</h1>
                  <h5>
                    Experts in enterprise migration and application solutions
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
            }}
          >
            <h1 style={{ padding: "30px 60px 30px 60px", textAlign: "center" }}>
              Riviting Insights
            </h1>
            <div className="CustomTwoCardRow">
              <Fade bottom>
                <div className="CustomCard">
                  <div className="rivitBlogCard">
                    <img
                      className="CardImageBlog"
                      height="158px"
                      width="320px"
                      alt="CustomApp"
                      src={blogImg3}
                    />
                    <h5 className="subsCardHeading">
                      Understanding the problem
                    </h5>
                    <p>Is Low-Code/No-Code The Best Platform for You?</p>
                    <Button
                      onClick={() => history.push("/rivitblog")}
                      variant="outline-primary"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="CustomCard">
                  <div className="rivitBlogCard">
                    <img
                      className="CardImageBlog"
                      height="158px"
                      width="320px"
                      alt="CustomApp"
                      src={blogImg2}
                    />
                    <h5 className="subsCardHeading">A decade of Excellence</h5>
                    <p>Rivit's Dcom application is Celebrating 10 Years !</p>
                    <Button
                      onClick={() => history.push("/rivitblog")}
                      variant="outline-warning"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Fade>

              <Fade bottom>
                <div className="CustomCard">
                  <div className="rivitBlogCard">
                    <img
                      className="CardImageBlog"
                      height="158px"
                      width="320px"
                      alt="CustomApp"
                      src={blogImg1}
                    />
                    <h5 className="subsCardHeading">A decade of Excellence</h5>
                    <p>Rivit's Dcom application is Celebrating 10 Years !</p>
                    <Button
                      onClick={() => history.push("/rivitblog")}
                      variant="outline-success"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
            {/*------------------------- Second Row------------------ */}
            <div className="CustomTwoCardRow">
              <Fade bottom>
                <div className="CustomCard">
                  <div className="rivitBlogCard">
                    <img
                      className="CardImageBlog"
                      height="158px"
                      width="320px"
                      alt="CustomApp"
                      src={blogIcon}
                    />
                    <h5 className="subsCardHeading">
                      Understanding the problem
                    </h5>
                    <p>Is Low-Code/No-Code The Best Platform for You?</p>
                    <Button
                      onClick={() => history.push("/rivitblog")}
                      variant="outline-primary"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="CustomCard">
                  <div className="rivitBlogCard">
                    <img
                      className="CardImageBlog"
                      height="158px"
                      width="320px"
                      alt="CustomApp"
                      src={blogImg1}
                    />
                    <h5 className="subsCardHeading">A decade of Excellence</h5>
                    <p>Rivit's Dcom application is Celebrating 10 Years !</p>
                    <Button
                      onClick={() => history.push("/rivitblog")}
                      variant="outline-warning"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Fade>

              <Fade bottom>
                <div className="CustomCard">
                  <div className="rivitBlogCard">
                    <img
                      className="CardImageBlog"
                      height="158px"
                      width="320px"
                      alt="CustomApp"
                      src={blogI}
                    />
                    <h5 className="subsCardHeading">A decade of Excellence</h5>
                    <p>Rivit's Dcom application is Celebrating 10 Years !</p>
                    <Button
                      onClick={() => history.push("/rivitblog")}
                      variant="outline-success"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
