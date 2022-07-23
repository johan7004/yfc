import { React } from "react";
import { Outlet,Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import Footer from './../footer/Footer'
import "./nav-bar.css";

function NavBar() {
  return (
    <div className="nav-bar__container">
      <Navbar className="nav-bar__items"  expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Towards Christ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"Songs"}>
                Songs
              </Nav.Link>
              <Nav.Link as={Link} to={"bible"}>
                Bible
              </Nav.Link>
              <Nav.Link as={Link} to={"bible-q-a"}>
                Ask-Experts
              </Nav.Link>
              <Nav.Link as={Link} to={"bible-study"}>
                Bible Study Topics
              </Nav.Link>
              <Nav.Link as={Link} to={"health-tips"}>
                Better Lifestyle
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
      <Footer />
    </div>
  );
}

export default NavBar;
