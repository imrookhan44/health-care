import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";
import { useHistory } from "react-router-dom";
function Header() {
  let history = useHistory();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="" className="heading  ">
            Health Care
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="offset-2"
                onClick={() => {
                  history.push("/");
                }}
                href=""
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="offset-2"
                onClick={() => {
                  history.push("/Register");
                }}
                href=""
              >
                Registration
              </Nav.Link>
              <Nav.Link
                className="offset-2"
                onClick={() => {
                  history.push("/Calculate");
                }}
                href=""
              >
                Calculate
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="offset-7"
                onClick={() => {
                  history.push("/Login");
                }}
                href=""
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
