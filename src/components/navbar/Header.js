import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./header.css";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase";
import SIdeBar from "../sideBar/SIdeBar";
function Header() {
  let history = useHistory();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container fluid id="Head">
          <Navbar.Brand href="" className="heading">
         <h5>   Health Care </h5>
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
                style={{color: "white"}}
              >
              <h6> Home </h6> 
              </Nav.Link>
              {/* <Nav.Link
                className="offset-2"
                onClick={() => {
                  history.push("/Register");
                }}
                href=""
              >
                Registration
              </Nav.Link> */}
              {/* <Nav.Link
                className="offset-2"
                onClick={() => {
                  history.push("/Calculate");
                }}
                href=""
              >
                Calculate
              </Nav.Link> */}
             
            </Nav>

            {/* <Nav>
              <Nav.Link
                className="offset-7"
                onClick={() => {
                  history.push("/Login");
                }}
                href=""
              >
                Login
              </Nav.Link>
              
            </Nav> */}
          </Navbar.Collapse>
          <div className="fluid34" >

         
              {auth?.currentUser?.uid && (
                
                <NavDropdown style={{backgroundColor:"white"}} title={auth?.currentUser?.email}
                
                >
              
                  <NavDropdown.Item
                    onClick={() => {
                      auth?.signOut();
                    }}
                  >
                 
                    signOut
                    
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              </div>
        </Container>
      </Navbar>

      <SIdeBar  />
    </div>
  );
}

export default Header;
