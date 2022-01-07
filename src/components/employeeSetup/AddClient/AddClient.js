import React from "react";

function AddClient() {
  return (
    <div>
      <div className="container">
        <div>
          <hr />
          <form className="">
            <div className="row">
              <div className="form-group col-md-6">
                <label for="firstName">
                  <b>First Name</b>
                </label>
                <input
                  required=""
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="form-control"
                  ng-reflect-name="firstName"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="lastName">
                  <b>Last Name</b>
                </label>
                <input
                  required=""
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="form-control"
                  ng-reflect-name="lastName"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="employeeEmail">
                  <b>Email</b>
                </label>
                <input
                  required=""
                  name="employeeEmail"
                  type="email"
                  id="employeeEmail"
                  className="form-control"
                  ng-reflect-name="employeeEmail"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="DateOfBirth">
                  <b>Date Of Birth</b>
                </label>
                <input
                  required=""
                  name="DateOfBirth"
                  type="date"
                  id="DateOfBirth"
                  className="form-control"
                  ng-reflect-name="DateOfBirth"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="ProgramStatus">
                  <b>Employee Roles</b>
                </label>
                <select
                  required=""
                  name="EmployeeRole"
                  id="EmployeeRole"
                  className="form-control"
                >
                  <option value="">Choose Role</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="zipCode">
                  <b>Gender</b>
                </label>
                <select
                  name="gender"
                  id="gender"
                  required=""
                  className="form-control"
                >
                  <option value="1" selected="">
                    Male
                  </option>
                  <option value="2">Female</option>
                  <option value="3">Not Specified</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label for="employeecellNumber">
                  <b>Employee Cell Number</b>
                </label>

                <input
                  required=""
                  name="employeecellNumber"
                  type="text"
                  maxlength="10"
                  minlength="10"
                  id="employeecellNumber"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="employeeRepresentative">
                  <b>Employee Representative Name</b>
                </label>
                <input
                  required=""
                  name="employeeRepresentative"
                  type="text"
                  id="employeeRepresentative"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="employeeRepresentativePhone">
                  <b>Employee Representative Phone</b>
                </label>
                <input
                  name="employeeRepresentativePhone"
                  type="text"
                  id="employeeRepresentativePhone"
                  className="form-control "
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="EmeregencyContact">
                  <b>Emeregency Contact Name</b>
                </label>
                <input
                  required=""
                  name="EmeregencyContact"
                  type="text"
                  id="EmeregencyContact"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="EmeregencyContactPhone">
                  <b>Emergency Contact Phone</b>
                </label>
                <input
                  name="EmeregencyContactPhone"
                  type="text"
                  id="EmeregencyContactPhone"
                  className="form-control "
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="Address">
                  <b>Address</b>
                </label>
                <textarea
                  required=""
                  name="Address"
                  type="textarea"
                  id="Address"
                  className="form-control"
                >
                  {" "}
                </textarea>
              </div>
              <div className="form-group col-md-6">
                <label for="Date Application Filed ">
                  <b>Date Application Filed </b>
                </label>
                <input
                  required=""
                  name="DateApplicationFiled"
                  type="date"
                  id="DateApplicationFiled"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-4">
                <label for="States">
                  <b>States</b>
                </label>
                <select
                  name="States"
                  required=""
                  id="States"
                  className="form-control"
                >
                  <option value="">Choose State</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label for="City">
                  <b>City</b>
                </label>
                <select name="City" id="City" className="form-control ">
                  <option value="">Choose City</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label for="zipCode">
                  <b>Zip Code</b>
                </label>
                <input
                  required=""
                  name="zipCode"
                  type="text"
                  id="zipCode"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col text-center">
                <button
                  type="submit"
                  className="btn btn-primary text-center"
                  disabled=""
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="row mt-2">
            <div className="col text-center">
              {" "}
              &nbsp; &nbsp;
              <button
                className="
                 btn btn-primary text-center"
                type="submit"
              >
                Next
              </button>{" "}
              &nbsp;
              <button
                title="Client list"
                className="btn btn-primary text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClient;
