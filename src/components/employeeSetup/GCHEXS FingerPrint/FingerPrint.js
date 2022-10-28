import React from 'react'
import "./fingerPrint.css"
function FingerPrint(props) {
  let { formData1, setFormData1, setCurrentTab, submitForm } = props;

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData1({ ...formData1, [name]: value });
  }
    return (
        <div>
                   <div className='fingerPrint'>
          <hr />
          <div className="container-fluid ">
            <h3 className="text-center">GCHEXS Fingerprint </h3>
            <hr />
            <div className="">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="IsGCHEXSFingerPrint">
                    <b>GCHEXS Fingerprint (Application filed)?</b>
                  </label>
                  <select
                    required=""
                    name="IsGCHEXSFingerPrint"
                    id="IsGCHEXSFingerPrint"
                    className="form-control"
                    value={formData1?.GCHEXS_Fingerprint_Application_field}
                    onChange={updateForm}>
                  
                    <option value="1" selected="">
                      Yes
                    </option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="IsGCHEXSFingerPrint">
                    <b>GCHEXS Fingerprint (Paid Fee)?</b>
                  </label>
                  <select
                    required=""
                    name="IsGCHEXSFingerPaid"
                    id="IsGCHEXSFingerPaid"
                    className="form-control"
                    value={formData1?.GCHEXS_Fingerprint_paid_Fee}
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
                  <label for="userWhoGCHEXSFeePaid">
                    <b>GCHEXS Who paid Fingerprint Fee ?</b>
                  </label>
                  <select
                    required=""
                    name="WhoGCHEXSFeePaid"
                    id="WhoGCHEXSFeePaid"
                    className="form-control"
                    value={formData1?.GCHEXS_Who_paid_Fingerprint_Fee}
                    onChange={updateForm}
                  >
                    <option value="Employee" selected="">
                      Employee
                    </option>
                    <option value="2">24 hours home care</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="IsGCHEXSFingerprintPerformed">
                    <b>GCHEXS Fingerprint (Performed FingerPrint)?</b>
                  </label>
                  <select
                    required=""
                    name="IsGCHEXSFingerprintPerformed"
                    id="IsGCHEXSFingerprintPerformed"
                    className="form-control"
                    value={formData1?.GCHEXS_Finger_Performed_FingerPrint}
                    onChange={updateForm}
                  >
                    <option value="Yes" selected="">
                      Yes
                    </option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="GCHEXSFingerprintPerformedResult">
                    <b>GCHEXS Fingerprint (Performed FingerPrint Result)</b>
                  </label>
                  <select
                    required=""
                    name="GCHEXSFingerprintPerformedResult"
                    id="GCHEXSFingerprintPerformedResult"
                    className="form-control"
                    value={formData1?.GCHEXS_Fingerprint_Performed_FingerPrint_Result}
                    onChange={updateForm}
                  >
                    <option value="Yes" selected="">
                      Yes
                    </option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="SexOffenderRegistryPrinted">
                    <b>Sex Offender registry printed</b>
                  </label>
                  <select
                    required=""
                    name="SexOffenderRegistryPrinted"
                    id="SexOffenderRegistryPrinted"
                    className="form-control"
                    value={formData1?.Sex_Offender_register_printed}
                    onChange={updateForm}
                  >
                    <option value="Yes" selected="">
                      Yes
                    </option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div>
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
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col text-center">
                <button className=" btn btn-primary text-center" type="button"
                
                onClick={() => { setCurrentTab("employeeWithClient") }}
                >
                  Back
                </button>{" "}
                &nbsp;{" "}
                <button
                  className="
                   btn btn-primary text-center"
                  type="submit"
                  onClick={() => { setCurrentTab("skinTest") }}
                >
                  Next
                </button>{" "}
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

export default FingerPrint
