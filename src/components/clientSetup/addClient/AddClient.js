import React, { useEffect } from "react";
import firebase, { realDB } from '../../Firebase'

function AddClient(props) {
  let { formData, setFormData, currentTab, setCurrentTab, submitForm } = props;

  useEffect(() => {
    realDB.ref("form-data4").on("value", snapshot => {
      console.log(" form data on load :", snapshot.val());
    })
  }, []);

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <div>
        <div>
          <hr />
          <div className="row">
            <div className="form-group col-md-6">
              <label>
                <b>First Name</b>
              </label>
              <input
                value={formData?.firstName}
                required="abc"
                name="firstName"
                type="text"
                id="firstName"
                className="form-control "
                onChange={updateForm}
              />
            </div>
            <div className="form-group col-md-6">
              <label>
                <b>Last Name</b>
              </label>
              <input
                value={formData?.lastName}
                required=""
                name="lastName"
                type="text"
                id="lastName"
                className="form-control "
                onChange={updateForm}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label>
                <b>Medicaid Id</b>
              </label>
              <input
                value={formData?.medicaidId}
                required=""
                name="medicaidId"
                type="text"
                id="medicaidId"
                minLength="12"
                maxLength="12"
                className="form-control"
                onChange={updateForm}
              />
            </div>
            <div className="form-group col-md-6">
              <label >
                <b>Date Of Birth</b>
              </label>
              <input
                value={formData?.DateOfBirth}
                required=""
                name="DateOfBirth"
                type="date"
                id="DateOfBirth"
                className="form-control "
                onChange={updateForm}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label >
                <b>Gender</b>
              </label>
              <select
                value={formData?.gender}
                name="gender"
                id="gender"
                required=""
                className="form-control "
                onChange={updateForm}
                placeholder="Select Gender"
              >
                <option value="1" >Male</option>
                <option value="2">Female</option>
                <option value="3">Not Specified</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label >
                <b>Client Cell Number</b>
              </label>
              <input
                value={formData?.clientcellNumber}
                required=""
                name="clientcellNumber"
                type="text"
                maxLength="10"
                minLength="10"
                id="clientcellNumber"
                className="form-control"
                onChange={updateForm}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label>
                <b>Client Representative Name</b>
              </label>
              <input
                value={formData?.ClientRepresentative}
                required="required"
                name="ClientRepresentative"
                type="text"
                id="ClientRepresentative"
                className="form-control"
                onChange={updateForm}
              />
            </div>
            <div className="form-group col-md-6">
              <label >
                <b>Client Representative Phone</b>
              </label>
              <input
                value={formData?.ClientRepresentativePhone}
                name="ClientRepresentativePhone"
                type="text"
                id="ClientRepresentativePhone"
                className="form-control"
                onChange={updateForm}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label>
                <b>Emeregency Contact Name</b>
              </label>
              <input
                value={formData?.EmeregencyContact}
                required="required"
                name="EmeregencyContact"
                type="text"
                id="EmeregencyContact"
                className="form-control"
                onChange={updateForm}
              />
            </div>
            <div className="form-group col-md-6">
              <label >
                <b>Emergency Contact Phone</b>
              </label>
              <input
                value={formData?.EmeregencyContactPhone}
                name="EmeregencyContactPhone"
                type="text"
                id="EmeregencyContactPhone"
                className="form-control "
                onChange={updateForm}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label >
                <b>Program Status</b>
              </label>
              <select
                value={formData?.ProgramStatus}
                required=""
                name="ProgramStatus"
                id="ProgramStatus"
                className="form-control"
                onChange={updateForm}
              >
                <option value="1" >
                  In Progress
                </option>
                <option value="2">Approved</option>
                <option value="3">Dis Approved</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label>
                <b>Wavier Program</b>
              </label>
              <select
                value={formData?.WavierProgram}
                required=""
                name="WavierProgram"
                id="WavierProgram"
                className="form-control"
                onChange={updateForm}
              >
                <option value="1" >
                  Source
                </option>
                <option value="2">CCSP</option>
                <option value="3">GAPP</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>
                <b>Totally Monthly Income</b>
              </label>
              <input
                value={formData?.TotallyMonthlyIncome}
                required=""
                name="TotallyMonthlyIncome"
                type="text"
                id="TotallyMonthlyIncome"
                className="form-control"
                onChange={updateForm}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label>
                <b>Medical Problem</b>
              </label>
              <textarea
                value={formData?.MedicalProblem}
                required=""
                name="MedicalProblem"
                type="textarea"
                id="MedicalProblme"
                className="form-control "
                onChange={updateForm}
              ></textarea>
            </div>
            <div className="form-group col-md-6">
              <label >
                <b>Address</b>
              </label>
              <textarea
                value={formData?.Address}
                required=""
                name="Address"
                type="textarea"
                id="Address"
                className="form-control "
                ng-reflect-required=""
                ng-reflect-name="Address"
                onChange={updateForm}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div lass="form-group col-md-4">
              <label >
                <b>States</b>
              </label>
              <select
                value={formData?.States}
                name="States"
                required=""
                id="States"
                className="form-control "
                onChange={updateForm}
              >
                <option value="" ng-reflect-value="">
                  Choose State
                </option>
                <option value="" ng-reflect-value="">
                  Newyork
                </option>
                <option value="" ng-reflect-value="">
                  Atlanta
                </option>
                <option value="" ng-reflect-value="">
                  Canada
                </option>
                <option value="" ng-reflect-value="">
                  Testing
                </option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label >
                <b>City</b>
              </label>
              <select
                value={formData?.City}
                name="City"
                id="City"
                className="form-control "
                ng-reflect-name="City"
                onChange={updateForm}
              >
                <option _ value="">
                  Choose City
                </option>
                <option _ value="Testing 1">
                  Testing 1
                </option>
                <option _ value="Testing 2">
                  Testing 2
                </option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label >
                <b>Zip Code</b>
              </label>
              <input
                value={formData?.zipCode}
                required=""
                name="zipCode"
                type="text"
                maxLength="5"
                minLength="5"
                id="zipCode"
                className="form-control"
                onChange={updateForm}
              />
            </div>
          </div>
          <div>
            <div className="row">
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
              &nbsp;
              <button
                className=" btn btn-primary text-center"
                onClick={() => {
                  setCurrentTab("serviceAggrement");
                }}
              >
                Next
              </button>
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
