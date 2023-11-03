import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/0xfix.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> 0xFix
            </h1>
            <p className="home-about-body">
              <h1>Responsibilities of a Good Validator on a Blockchain</h1>
              <p>
                A good validator on a blockchain is responsible for validating
                transactions, ensuring reliability, security, and consistency in
                the blockchain network. Here are some key points that mark good
                validator performance:
              </p>
              <ol>
                <li>
                  <strong className="purple">
                    Compliance with Protocol Rules:
                  </strong>
                  <p>
                    A validator must adhere to the rules set by the blockchain
                    protocol. This includes validating transactions according to
                    established rules and ensuring consistency in running
                    software and network regulations.
                  </p>
                </li>

                <li>
                  <strong className="purple">
                    Availability and Reliability:
                  </strong>
                  <p>
                    A validator must maintain network availability by remaining
                    online and ready to validate transactions. Consistency in
                    the provision of validator services is essential to ensure
                    smooth blockchain operations.
                  </p>
                </li>

                <li>
                  <strong className="purple">Network Security:</strong>
                  <p>
                    Ensuring network security is crucial. A good validator
                    should ensure that there are no attacks on the network and
                    transactions are validated. This includes a strong
                    understanding of cryptographic methods, private key
                    protection, and necessary network security measures.
                  </p>
                </li>

                <li>
                  <strong className="purple">
                    Accurate Verification Process:
                  </strong>
                  <p>
                    A good validator must verify transactions carefully and
                    accurately. This involves deep knowledge of the consensus
                    protocol used in a particular blockchain and validating
                    transactions according to predefined rules.
                  </p>
                </li>

                <li>
                  <strong className="purple">
                    Participation in the Consensus Process:
                  </strong>
                  <p>
                    Taking an active part in the network consensus process is an
                    important aspect of a validator's role. The consensus
                    process may vary depending on the type of blockchain used
                    (Proof of Stake, Proof of Work, etc.), and a validator must
                    actively participate in this process.
                  </p>
                </li>

                <li>
                  <strong className="purple">Openness and Reliability:</strong>
                  <p>
                    A good validator should be a source of trust and reliability
                    for network users. They must provide transparency regarding
                    their activities, performance, and reliability in carrying
                    out their duties as validators.
                  </p>
                </li>

                <li>
                  <strong className="purple">
                    Technical Capacity and Adaptability:
                  </strong>
                  <p>
                    A validator must have sufficient technical knowledge to
                    operate the necessary software and infrastructure. In
                    addition, the capacity to adapt to technological changes or
                    network upgrades is important in carrying out its duties as
                    a validator.
                  </p>
                </li>
              </ol>
              <p>
                As a responsible validator, performing this role conscientiously
                will help maintain the security and consistency of the
                blockchain network and build user trust in the networks
                involved.
              </p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Our Contact</h1>
            <p>
              Feel free to <span className="purple">connect </span>with 0xFix
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
