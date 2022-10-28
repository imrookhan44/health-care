import React, { useEffect } from "react";
import firebase, { realDB } from "../../Firebase";
function AddClient(props) {
  let { formData1, setFormData1, currentTab, setCurrentTab, submitForm } =
    props;

  // useEffect(() => {
  //   realDB.ref("employee").on("value", (snapshot) => {
  //     console.log(" form data on load :", snapshot.val());
  //   });
  // }, []);

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData1({ ...formData1, [name]: value });
    console.log("data in formData1:", setFormData1);
  };
  return (
    <div>
      <div className="container">
        <div>
          <hr />
          <div className="">
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
                  value={formData1?.FirstName}
                  onChange={updateForm}
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
                  value={formData1?.LastName}
                  onChange={updateForm}
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
                  value={formData1?.Email}
                  onChange={updateForm}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="DateOfBirth">
                  <b>Date Of Birth</b>
                </label>
                <input
                  value={formData1?.DateOfBirth}
                  required=""
                  name="DateOfBirth"
                  type="date"
                  id="DateOfBirth"
                  className="form-control"
                  ng-reflect-name="DateOfBirth"
                  onChange={updateForm}
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
                  value={formData1?.EmployeeRoles}
                  onChange={updateForm}
                >
                  <option value="">Choose Role</option>
                  <option value="Role1">Role1</option>
                  <option value="Role2">Role2</option>
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
                  value={formData1?.Gender}
                  onChange={updateForm}
                >
                  <option value="Male" selected="">
                    Male
                  </option>
                  <option value="female">Female</option>
                  <option value="not Specified">Not Specified</option>
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
                  value={formData1?.EmployeeCellNumber}
                  onChange={updateForm}
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
                  value={formData1?.employeeRepresentativeName}
                  onChange={updateForm}
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
                  value={formData1?.employeeRepresentativePhone}
                  onChange={updateForm}
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
                  value={formData1?.emergencyContactName}
                  onChange={updateForm}
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
                  value={formData1?.EmeregencyContactPhone}
                  onChange={updateForm}
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
                  value={formData1?.Address}
                  onChange={updateForm}
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
                  value={formData1?.dateOfApplicationField}
                  onChange={updateForm}
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
                  value={formData1?.states}
                  onChange={updateForm}
                >
                  <option value="">Choose State</option>
                  <option value="State1">State1</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label for="City">
                  <b>City</b>
                </label>
                <select
                  name="City"
                  id="City"
                  className="form-control "
                  value={formData1?.city}
                  onChange={updateForm}
                >
                  <option value="1">Choose City</option>
                  <option value="2">malta</option>
                  <option value="3">Canada</option>
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
                  value={formData1?.zipCode}
                  onChange={updateForm}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col text-center">
                <button
                  type="submit"
                  className="btn btn-primary text-center"
                  disabled=""
                  onClick={submitForm}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col text-center">
              {" "}
              &nbsp; &nbsp;
              <button
                className="
                 btn btn-primary text-center"
                type="submit"
                onClick={() => {
                  setCurrentTab("details");
                }}
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
