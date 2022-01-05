import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./register.css";
import { db } from "../Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();
  const notify = () => toast.success("Form Successfully Submitted");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfAssessment, setDateOfAssessment] = useState("");
  const [dateOfServiceArgument, setDateOfServiceArgument] = useState("");
  const [dateOfServicePlan, setDateOfServicePlan] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [noOfHoursPerWeek, setNoOfHoursPerWeek] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [clientCellNumber, setClientCellNumber] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    db.collection("data")
      .add({
        firstName: firstName,
        lastName: lastName,
        dateOfAssessment: dateOfAssessment,
        dateOfServiceArgument: dateOfServiceArgument,
        dateOfServicePlan: dateOfServicePlan,
        dateOfBirth: dateOfBirth,
        noOfHoursPerWeek: noOfHoursPerWeek,

        address: address,
        zipCode: zipCode,
        clientCellNumber: clientCellNumber,
        states: states,
        city: city,
        emergencyName: emergencyName,
        emergencyPhone: emergencyPhone
      })
      .then(() => {
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFirstName("");
    setLastName("");
    setDateOfAssessment("");
    setDateOfServiceArgument("");
    setDateOfServicePlan("");
    setDateOfBirth("");
    setNoOfHoursPerWeek("");

    setAddress("");
    setZipCode("");
    setClientCellNumber("");
    setStates("");
    setCity("");
    setEmergencyName("");
    setEmergencyPhone("");
  };
  return (
    <div>
      <div>
        <div className="container   mt-3">
          <Form className="Form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <h3 className="heading1">Client Registration Form</h3>
              </div>
              <div className="col-4 mt-2">
                <Button
                  variant="primary"
                  onClick={() => {
                    history.push("/Client");
                  }}
                >
                  Go To List!
                </Button>
              </div>
            </div>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>First Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Last Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>Date of RN Assessment</b>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter First Name"
                  value={dateOfAssessment}
                  onChange={(e) => setDateOfAssessment(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Date of Service Argument</b>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Last Name"
                  value={dateOfServiceArgument}
                  onChange={(e) => setDateOfServiceArgument(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>Date of Service Plan</b>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter First Name"
                  value={dateOfServicePlan}
                  onChange={(e) => setDateOfServicePlan(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Date of Birth</b>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Last Name"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>No of Hours per Week</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Horse"
                  value={noOfHoursPerWeek}
                  onChange={(e) => setNoOfHoursPerWeek(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Address</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>Zip Code</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Clint Cell Number</b>
                </Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Number"
                  value={clientCellNumber}
                  onChange={(e) => setClientCellNumber(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="Label">
                  <b>States</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="States"
                  value={states}
                  onChange={(e) => setStates(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>City</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Emergency Contact Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={emergencyName}
                  onChange={(e) => setEmergencyName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="Label">
                  <b>Emergency Contact Phone</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Button
              className="button  mt-3"
              disabled={!firstName || !lastName}
              onClick={notify}
              variant="primary"
              type="submit"
              id="button1"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
