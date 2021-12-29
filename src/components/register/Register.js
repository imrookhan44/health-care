import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./register.css";

function Register() {
  return (
    <div>
      <div>
        <div className="container2">
          <Form className="Form">
            <div className="row">
              <div className="col-8">
                <h1 className="heading1">Client Registration Form</h1>
              </div>
              <div className="col-4 mt-2">
                <Button variant="primary">Go To List!</Button>
              </div>
            </div>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>First Name</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Last Name</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>Date of RN Assessment</b>
                </Form.Label>
                <Form.Control type="date" placeholder="Enter First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Date of Service Argument</b>
                </Form.Label>
                <Form.Control type="date" placeholder="Last Name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>Date of Service Plan</b>
                </Form.Label>
                <Form.Control type="date" placeholder="Enter First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Date of Birth</b>
                </Form.Label>
                <Form.Control type="date" placeholder="Last Name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>No of Hours per Week</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Horse" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Address</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>Zip Code</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Zip Code" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Clint Cell Number</b>
                </Form.Label>
                <Form.Control type="Number" placeholder="Number" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>States</b>
                </Form.Label>
                <Form.Control type="text" placeholder="States" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>City</b>
                </Form.Label>
                <Form.Control type="text" placeholder="City" />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit" id="button1">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
