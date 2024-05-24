import React from "react";
import { Col, Row } from "react-bootstrap";

//logo project
import Erbie from "../../Assets/logo-projects/initia.jpg";
import Fleek from "../../Assets/logo-projects/artela.png";
import Q from "../../Assets/logo-projects/redbelly.jpg";
import Stader from "../../Assets/logo-projects/penumbra.jpg";
import Transformers from "../../Assets/logo-projects/Transformers.png";

function ProjectsBox() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Erbie} className="logo" alt="brand" />
        <h3>Initia</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Fleek} className="logo" alt="brand" />
        <h3>Artela</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Q} className="logo" alt="brand" />
        <h3>Redbelly</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Stader} className=" logo" alt="brand" />
        <h3>Penumbra</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Transformers} className="logo" alt="brand" />
        <h3>Transformers</h3>
      </Col>
    </Row>
  );
}

export default ProjectsBox;
