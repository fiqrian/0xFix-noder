import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import logo from "../../Assets/0xfix.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15 }}
                className="heading font1 purple">
                0xfix{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  <img src={logo} className="img-fluid logo-size" alt="brand" />
                </span>
              </h1>

              <h1 className="heading-name">
                Node
                <strong className="main-name"> Runner</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
