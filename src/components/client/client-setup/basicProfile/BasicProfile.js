import React from 'react'

function BasicProfile() {
    return (
        <div>
              <div className="mat-tab-body-wrapper">
          <div
            role="tabpanel"
            className="mat-tab-body "
            id="mat-tab-content-0-0"
          >
            <div className="mat-tab-body-content">
              <div className="row mt-4">
                <div className="col-md-2">
                  <strong> Full Name</strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
                <div className="col-md-2">
                  <strong> Medicaid Id</strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
                <div className="col-md-2">
                  <strong> Date Of Birth </strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                  <strong> Gender</strong>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <strong> Client Cell Number</strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
                <div className="col-md-2">
                  <strong> Representative Name </strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                  <strong> Representative Phone</strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
                <div className="col-md-2">
                  <strong> Emeregency Contact Name</strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
                <div className="col-md-2">
                  <strong>Emergency Contact Phone</strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                  <strong> Program Status</strong>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <strong>Wavier Program</strong>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <strong>Totally Monthly Income</strong>
                </div>
                <div className="col-md-2">
                  <u> $ </u>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                  <strong>Medical Problem</strong>
                </div>
                <div className="col-md-4">
                  <u> </u>
                </div>
                <div class="col-md-2">
                  <strong>Address </strong>
                </div>
                <div className="col-md-4">
                  <u _></u>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                  <strong>States</strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
                <div className="col-md-2">
                  <strong>City </strong>
                </div>
                <div className="col-md-2">
                  <u> </u>
                </div>
                <div className="col-md-2">
                  <strong>Zip Code</strong>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ color: "gray", height: "5px" }}></hr>
        </div>
        </div>
    )
}

export default BasicProfile
