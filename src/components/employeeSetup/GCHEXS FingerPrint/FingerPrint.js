import React from 'react'
import "./fingerPrint.css"
function FingerPrint() {
    return (
        <div>
                   <div className='fingerPrint'>
          <hr />
          <div className="container-fluid ">
            <h3 className="text-center">GCHEXS Fingerprint </h3>
            <hr />
            <form className="">
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
                  >
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
                  >
                    <option value="1" selected="">
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
                  <label for="GCHEXSFingerprintPerformedResult">
                    <b>GCHEXS Fingerprint (Performed FingerPrint Result)</b>
                  </label>
                  <select
                    required=""
                    name="GCHEXSFingerprintPerformedResult"
                    id="GCHEXSFingerprintPerformedResult"
                    className="form-control"
                  >
                    <option value="1" selected="">
                      Yes
                    </option>
                    <option value="2">No</option>
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
                  >
                    <option value="1" selected="">
                      Yes
                    </option>
                    <option value="2">No</option>
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
            </form>
            <br />
            <div className="row">
              <div className="col text-center">
                <button className=" btn btn-primary text-center" type="button">
                  Back
                </button>{" "}
                &nbsp;{" "}
                <button
                  className="
                   btn btn-primary text-center"
                  type="submit"
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
