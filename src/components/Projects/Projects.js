import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Projects1 from "./Projects1";
import laptopImg from "../../Assets/about.png";
import Testnet from "./Testnet";
import Mainnet from "./Mainnet";

function Projects() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Our Supported <strong className="purple">Projects </strong>
        </h1>

        <Projects1 />

        <h1 className="project-heading">
          <strong className="purple">Testnet</strong> Network
        </h1>
        <Testnet />
        <h1 className="project-heading">
          <strong className="purple">Mainnet</strong> Network
        </h1>
        <Mainnet />
      </Container>
    </Container>
  );
}

export default Projects;
