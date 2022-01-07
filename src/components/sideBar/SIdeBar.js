import React from "react";
import {
  Navbar,
  Container,
  
  Offcanvas,
  Nav
  
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
function SIdeBar() {
    let history = useHistory()
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
            HealthCare
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link    onClick={() => {
                  history.push("/employeeSetup");
                }}>EmployeeSetup</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/performance");
                }}>Performance</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/newAddress");
                }}>NewAddress</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/employee");
                }}>Employee</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/appSetting");
                }}>AppSetting</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/clientSetup");
                }}>ClientSetup</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/viewClient");
                }}>ViewClient</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/supervisory");
                }}>Supervisory</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/client");
                }}>Client</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/register");
                }}>Register</Nav.Link>
                <Nav.Link    onClick={() => {
                  history.push("/calculate");
                }}>Calculate</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default SIdeBar;
