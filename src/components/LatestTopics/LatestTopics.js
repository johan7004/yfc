import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Latesttopics.css";

function LatestTopics() {
  return (
    <Container className="Latest-topics">
      <Row className="Latest-topics__cards">
        <Col>
          <ul>
            <h3>Is Gambling Right?</h3>
            <p>Gambling is a easy way to make money, but can we do it?</p>
            <button>Know More</button>
          </ul>
        </Col>
        <Col>
          <ul>
            <h3>Is Gambling Right?</h3>
            <p>Gambling is a easy way to make money, but can we do it?</p>
            <button>Know More</button>
          </ul>
        </Col>
        <Col>
          <ul>
            <h3>Is Gambling Right?</h3>
            <p>Gambling is a easy way to make money, but can we do it?</p>
            <button>Know More</button>
          </ul>
        </Col>
        <Col>
          <ul>
            <h3>Is Gambling Right?</h3>
            <p>Gambling is a easy way to make money, but can we do it?</p>
            <button>Know More</button>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default LatestTopics;
