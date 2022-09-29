import { Button, Row, Col, ListGroup } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import discussion from "../assets/discussion.png";

export default function RivitBlog(props) {
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
                  <h5>Is LowCode/NoCode the best platform for you?</h5>
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
            <h1 style={{ padding: "30px 60px 10px 60px", textAlign: "center" }}>
              Understanding the problem
            </h1>
            <h6
              style={{
                padding: "3px 0px 3px 0px",
                textAlign: "center",
                color: "#ac5e00",
              }}
            >
              Rob Salerno / 1:25 PM EDT - September 28, 2022
            </h6>
            <div className="rivitBlog">
              <p className="rivitBlogPara">
                One of the great things about Domino is that it was an excellent
                Rapid Application Development tool. From its inception,
                non-developers were empowered with the ability to create
                applications. They could take advantage of numerous built-in
                functions such as the database, views, mail, security and
                search, and create fully functional applications. As time
                progressed, Domino matured and the programming model became more
                extensive. Developers could build more complex applications
                using LotusScript, javascript, java, etc… but still, complete
                them within a fraction of the time and effort required by other
                platforms.
              </p>
              <br />
              <h3 className="rivitBlogHeading">LCAPS are a Closed Platform</h3>
              <p className="rivitBlogPara">
                LCAPS are closed platforms. Developers work through the GUI IDE.
                For most development needs, that might suffice. However, there
                will be complex applications that you won’t be able to deliver
                due to the closed nature of the platform. You won’t have access
                to the underlying framework to make changes. Nor will you have
                APIs to make use of. That will require that you change the
                requirements to fit the product.
                <br />
                In a similar vein, most developers that have worked through a
                Domino to SharePoint migration have come across this. In
                SharePoint’s case, the sheer limitation of the platform itself
                makes the migration of complex applications very difficult.
              </p>
              <br />
              <h3 className="rivitBlogHeading">
                Complete Redevelopment - No Migration Solutions
              </h3>
              <p className="rivitBlogPara">
                Because LCAPs are closed platforms, 3rd party vendors have not
                had access to the underlying APIs to create migration utilities
                for them. It’s up to the LCAPs companies to either give partners
                access to the underlying APIs or create the migration solutions
                for you. To date, they haven’t been focused on the Notes Domino
                market, so any project to migrate to LCAPs is a complete
                rewrite. No jump start. No base framework. No data migration.
                It’s just you, the LCAP IDE and an old Domino application. And
                in most cases, no true business owner or documentation for the
                original application.
                <br />
              </p>
              <br />
              <h3 className="rivitBlogHeading">
                What Product Should I Choose?
              </h3>
              <p className="rivitBlogPara">
                Gartner currently lists 137 vendors in the Enterprise Low-Code
                Application Platforms market space. It is still far too early to
                select a dominant product. And know that any of the larger
                players in this market come with a high cost of entry. For
                example Application Express by Oracle, Salesforce, Service Now
                or Pega Platform all come with a high cost of implementation and
                licensing. Choosing the right LCAP comes with risk.
                <br />
              </p>
              <br />
              <h3 className="rivitBlogHeading">
                How Vibrant Is The Development Community?
              </h3>
              <p className="rivitBlogPara">
                Identifying candidate platforms should include researching how
                big and vibrant the development community is. Though selecting a
                product based on its ease of development when you need to
                consider the active development or vendor community is an
                oxymoron. But like any technology, you need experts with the
                product to help you implement it, learn it, maintain it and
                possibly upgrade it. It’s the nature of the Enterprise market.
                Your staff will not be able to ramp up quickly enough to develop
                it or support it. You may be at the mercy of the software vendor
                itself to provide the resourcing, and the development costs can
                add up quickly.
                <br />
              </p>
              <br />
              <p className="rivitBlogPara">
                The long and short of it is, LCAPs are not an ideal platform for
                Domino applications. At least at this point, they aren’t. But
                our Revive solution is. Revive falls in the Pro Code market.
                It’s based on a completely open framework. Sure we include
                libraries and components for you to base your application on but
                it’s still based on common enterprise standards. Spring,
                Hibernate, Rest, ReactJS and Java. Resources that most companies
                already have. We migrate the data and the core of the existing
                Domino application to Revive with a click of a button. That
                means that we carry over most of the application and code for
                you to continue your development, regardless of whether you have
                a full list of the existing requirements. Your developer can go
                through the new application and make decisions on how to deliver
                the business function based on the existing domino business
                functions that we carried over for you. You can use your
                resources or ours to enhance the application. Revive is not an
                “application island” and provides you with the quickest,
                lowest-cost alternative that already fits most organizations.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
