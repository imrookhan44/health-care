import React from 'react'
import "./details.css"
function Deatails() {
    return (
        <div>
                <div>
          <hr />
          <div className="container-fluid " id='container'>
            <h3 className="text-center">Employee Details </h3>
            <hr />
            <form className="">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="firstName">
                    <b>Is Resume submitted</b>
                  </label>
                  <select
                    required=""
                    name="IsResumesubmitted"
                    id="IsResumesubmitted"
                    className="form-control"
                  >
                    <option value="1" selected="">
                      Yes
                    </option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="NumberYearsofHomeCareExperience">
                    <b>Number Years of Home care experience</b>
                  </label>
                  <input
                    required=""
                    name="NumberYearsofHomeCareExperience"
                    type="text"
                    id="NumberYearsofHomeCareExperience"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="NumberofListofReferences">
                    <b>Number of List of References</b>
                  </label>
                  <input
                    required=""
                    name="NumberofListofReferences"
                    type="text"
                    id="NumberofListofReferences"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="TotalYearsofJobExperience">
                    <b>Total Years of Job experience</b>
                  </label>
                  <input
                    required=""
                    name="TotalYearsofJobExperience"
                    type="text"
                    id="TotalYearsofJobExperience"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="SSIDSSN">
                    <b>Copy of the Social Security ID, SSN number</b>
                  </label>
                  <select
                    required=""
                    name="SSIDSSN"
                    id="SSIDSSN"
                    className="form-control"
                    ng-reflect-name="SSIDSSN"
                  >
                    <option value="1" selected="">
                      Yes
                    </option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="CopyofdriverLicense">
                    <b>Enter Copy of driver License Number?</b>
                  </label>
                  <input
                    required=""
                    name="CopyofdriverLicense"
                    type="text"
                    id="CopyofdriverLicense"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="HIPPASignedAndFile">
                    <b>Is HIPPA signed and in file?</b>
                  </label>
                  <select
                    required=""
                    name="HIPPASignedAndFile"
                    id="HIPPASignedAndFile"
                    className="form-control"
                  >
                    <option value="1" selected="">
                      Yes
                    </option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="AffidavitofNOABUSE">
                    <b>Affidavit of NO ABUSE</b>
                  </label>
                  <select
                    required=""
                    name="AffidavitofNOABUSE"
                    id="AffidavitofNOABUSE"
                    className="form-control"
                  >
                    <option value="1" selected="">
                      Yes
                    </option>
                    <option value="2">No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="AbuseAndNeglectFormSigned">
                    <b>Abuse and Neglect form signed?</b>
                  </label>
                  <select
                    required=""
                    name="AbuseAndNeglectFormSigned"
                    id="AbuseAndNeglectFormSigned"
                    className="form-control"
                  >
                    <option value="1" selected="">
                      Yes
                    </option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="SignedJobDescription">
                    <b>Signed Job Description</b>
                  </label>
                  <input
                    required=""
                    name="SignedJobDescription"
                    type="date"
                    id="SignedJobDescription"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="StaffRecordOfOrientationTraining">
                    <b>Staff Record Of Orientation Training</b>
                  </label>
                  <input
                    required=""
                    name="StaffRecordOfOrientationTraining"
                    type="date"
                    id="StaffRecordOfOrientationTraining"
                    className="form-control"
                  />
                </div>
              </div>
              <div>
                <div className="row mt-3">
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
            <br />
            <div className="row">
              <div className="col text-center">
                <button className=" btn btn-primary text-center" type="button">
                  Back
                </button>
                &nbsp;{" "}
                <button
                  className="
                   btn btn-primary text-center"
                  type="submit"
                >
                  Next
                </button>
                &nbsp;{" "}
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
    )
}

export default Deatails
