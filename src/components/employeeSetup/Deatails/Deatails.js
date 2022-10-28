import React from "react";
import "./details.css";
function Deatails(props) {
  let { formData1, setFormData1, setCurrentTab, submitForm } = props;

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData1({ ...formData1, [name]: value });
  };
  return (
    <div>
      <div>
        <hr />
        <div className="container-fluid " id="container">
          <h3 className="text-center">Employee Details </h3>
          <hr />
          <div className="">
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
                  value={formData1?.Is_Resume_Submitted}
                  onChange={updateForm}
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
                  value={formData1?.Number_Years_of_Home_care_experience}
                  onChange={updateForm}
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
                  value={formData1?.Number_of_List_of_Reference}
                  onChange={updateForm}
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
                  value={formData1?.Total_Years_of_Job_experience}
                  onChange={updateForm}
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
                  value={formData1?.Copy_of_the_Social_Security_ID_SSN_number}
                  onChange={updateForm}
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
                  value={formData1?.Enter_Copy_of_driver_License_Number}
                  onChange={updateForm}
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
                  value={formData1?.Is_HIPPA_signed_and_in_file}
                  onChange={updateForm}
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
                  value={formData1?.Affidavit_of_NO_ABUSE}
                  onChange={updateForm}
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
                  value={formData1?.Abuse_and_Neglect_form_signed}
                  onChange={updateForm}
                >
                  <option value="Yes" selected="">
                    Yes
                  </option>
                  <option value="No">No</option>
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
                  value={formData1?.Signed_Job_Description}
                  onChange={updateForm}
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
                  value={formData1?.Staff_Record_Of_Orientation_Training}
                  onChange={updateForm}
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
                    onClick={submitForm}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col text-center">
              <button
                className=" btn btn-primary text-center"
                type="button"
                onClick={() => {
                  setCurrentTab("addClient");
                }}
              >
                Back
              </button>
              &nbsp;{" "}
              <button
                className="
                   btn btn-primary text-center"
                type="submit"
                onClick={() => {
                  setCurrentTab("employeeWithClient");
                }}
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
  );
}

export default Deatails;
