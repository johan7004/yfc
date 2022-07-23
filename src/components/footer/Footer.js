import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <Container className="footer-container">
      <Row className="footer-container__row">
        <Col className="footer-container__item">
          <p>Navs</p>
        </Col>
        <Col className="footer-container__item">
          <p>Socials</p>
        </Col>
        <Col className="footer-container__item">
          <p>Contacts</p>
        </Col>
        <Col className="footer-container__item">
          <p>Copyright</p>
        </Col>
        <Col className="footer-container__item">
          <p>Suggestions</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
