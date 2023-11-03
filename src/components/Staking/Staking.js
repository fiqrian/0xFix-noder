import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./StakingCards";
import Particle from "../Particle";
import Staking1 from "../../Assets/Projects/Staking.png";

function Staking() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          COMING <strong className="purple">SOON </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a example of Staking .</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Staking1}
              isBlog={false}
              title="Staking"
              description="Staking coins,in the context of cryptocurrencies and blockchain,refers to the process of holding a particular cryptocurrency in a digital wallet to support the operations of a blockchain network.This process involves participating in the network's proof-of-stake (PoS) consensus mechanism."
              stLink="/"
              ULLink="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Staking;
