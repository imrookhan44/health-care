import React from "react";

function AddClient() {
  return (
    <div>
      <div>
        <div>
          <hr />
          <form>
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
                  className="form-control "
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
                  className="form-control "
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="medicaidId">
                  <b>Medicaid Id</b>
                </label>
                <input
                  required=""
                  name="medicaidId"
                  type="text"
                  id="medicaidId"
                  minlength="12"
                  maxlength="12"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label _for="DateOfBirth">
                  <b>Date Of Birth</b>
                </label>
                <input
                  required=""
                  name="DateOfBirth"
                  type="date"
                  id="DateOfBirth"
                  className="form-control "
                />
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
                  className="form-control "
                >
                  <option value="1" selected="">
                    Male
                  </option>
                  <option value="2">Female</option>
                  <option value="3">Not Specified</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label for="clientcellNumber">
                  <b>Client Cell Number</b>
                </label>
                <input
                  required=""
                  name="clientcellNumber"
                  type="text"
                  maxlength="10"
                  minlength="10"
                  id="clientcellNumber"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="ClientRepresentative">
                  <b>Client Representative Name</b>
                </label>
                <input
                  required="required"
                  name="ClientRepresentative"
                  type="text"
                  id="ClientRepresentative"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="ClientRepresentativePhone">
                  <b>Client Representative Phone</b>
                </label>
                <input
                  name="ClientRepresentativePhone"
                  type="text"
                  id="ClientRepresentativePhone"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="EmeregencyContact">
                  <b>Emeregency Contact Name</b>
                </label>
                <input
                  required="required"
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
                <label for="ProgramStatus">
                  <b>Program Status</b>
                </label>
                <select
                  required=""
                  name="ProgramStatus"
                  id="ProgramStatus"
                  className="form-control"
                >
                  <option value="1" selected="">
                    In Progress
                  </option>
                  <option value="2">Approved</option>
                  <option value="3">Dis Approved</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="WavierProgram">
                  <b>Wavier Program</b>
                </label>
                <select
                  required=""
                  name="WavierProgram"
                  id="WavierProgram"
                  className="form-control"
                >
                  <option value="1" selected="">
                    Source
                  </option>
                  <option value="2">CCSP</option>
                  <option value="3">GAPP</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label for="TotallyMonthlyIncome">
                  <b>Totally Monthly Income</b>
                </label>
                <input
                  required=""
                  name="TotallyMonthlyIncome"
                  type="text"
                  id="TotallyMonthlyIncome"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="MedicalProblme">
                  <b>Medical Problem</b>
                </label>
                <textarea
                  required=""
                  name="MedicalProblme"
                  type="textarea"
                  id="MedicalProblme"
                  className="form-control "
                ></textarea>
              </div>
              <div className="form-group col-md-6">
                <label for="Address">
                  <b>Address</b>
                </label>
                <textarea
                  required=""
                  name="Address"
                  type="textarea"
                  id="Address"
                  className="form-control "
                  ng-reflect-required=""
                  ng-reflect-name="Address"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div lass="form-group col-md-4">
                <label for="States">
                  <b>States</b>
                </label>
                <select
                  name="States"
                  required=""
                  id="States"
                  className="form-control "
                >
                  <option value="" ng-reflect-value="">
                    Choose State
                  </option>
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
                  ng-reflect-name="City"
                >
                  <option _ value="">
                    Choose City
                  </option>
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
                  maxlength="5"
                  minlength="5"
                  id="zipCode"
                  className="form-control"
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
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="row mt-2">
            <div className="col text-center">
              &nbsp;
              <button
                className=" btn btn-primary text-center"
                disabled=""
                type="submit"
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
