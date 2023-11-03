import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";

function StakingCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.stLink} target="_blank">
          <BsCashCoin /> &nbsp;
          {props.isBlog ? "Blog" : "Delegate"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.ULLink && (
          <Button
            variant="primary"
            href={props.ULLink}
            target="_blank"
            style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp;
            {"Undelegate"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default StakingCards;
