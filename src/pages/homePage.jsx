import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LatestTopics from "../components/LatestTopics/LatestTopics";
import Image from "./../assets/aaron-burden-cmIqkMPfpMQ-unsplash.webp";




import "./HomePage.css";

export default function HomePage() {

  
  
  return (
    <>
      <Container>
        <Row className="Welcome-message">
          <Col>
            <img
              className="Welcome-message-image"
              src={Image}
              alt="Promise"
            ></img>
          </Col>
          <Col>
            {" "}
            <div className="Welcome-message-text">
              <h1>Today's Promise</h1>
              <h3>
                Through him all things were made; without him nothing was made
                that has been made.
              </h3>
              <p>John 1:3</p>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="Bible-study-cards">
        <h2 className="Bible-study-cards__title">
          Interesting Bible Study Topics
        </h2>
        <LatestTopics />
      </section>
      
    </>
  );
}
