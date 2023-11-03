import React from "react";
import { Col, Row } from "react-bootstrap";
//logo project
import Erbie from "../../Assets/logo-projects/erbie.png";
import Fleek from "../../Assets/logo-projects/Fleek.png";
import Q from "../../Assets/logo-projects/Q.png";
import Stader from "../../Assets/logo-projects/Stader.png";
import Transformers from "../../Assets/logo-projects/Transformers.png";

function Testnet() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Erbie} className="logo" alt="brand" />
        <h3>Erbie</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Fleek} className="logo" alt="brand" />
        <h3>Fleek</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Q} className="logo" alt="brand" />
        <h3>Q Blockchain</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Stader} className=" logo" alt="brand" />
        <h3>Stader</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Transformers} className="logo" alt="brand" />
        <h3>Transformers</h3>
      </Col>
    </Row>
  );
}

export default Testnet;
