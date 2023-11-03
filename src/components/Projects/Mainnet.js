import React from "react";
import { Col, Row } from "react-bootstrap";
//logo project
import Q from "../../Assets/logo-projects/Q.png";
import Stader from "../../Assets/logo-projects/Stader.png";
function Mainnet() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Q} className="logo" alt="brand" />
        <h3>Q Blockchain</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Stader} className=" logo" alt="brand" />
        <h3>Stader</h3>
      </Col>
    </Row>
  );
}

export default Mainnet;
