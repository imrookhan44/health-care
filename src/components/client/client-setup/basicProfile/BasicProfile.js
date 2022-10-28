import React, { useState, useEffect } from "react";
import { realDB } from "../../../Firebase";
function BasicProfile(props) {
  let { clients, setFormData, setCurrentTab } = props;
  console.log("client data view:", clients);
  // console.log("data from setform updated:", setFormData);
  return (
    <div>
      <div className="mat-tab-body-wrapper">
        <div role="tabpanel" className="mat-tab-body " id="mat-tab-content-0-0">
          <div className="mat-tab-body-content">
            <div className="row mt-4">
              <div className="col-md-2">
                <strong> Full Name</strong>
                <u>{clients?.firstName}</u>
              </div>
              <div className="col-md-2">
                <u> </u>
              </div>
              <div className="col-md-2">
                <strong> Medicaid Id</strong>
                <u>{clients?.MedicaidId} </u>
              </div>
              <div className="col-md-2">
                <u> </u>
              </div>
              <div className="col-md-2">
                <strong> Date Of Birth </strong>
                <u>{clients?.DateOfBirth} </u>
              </div>
              <div className="col-md-2">
                <u> </u>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-2">
                <strong> Gender</strong>
                <u>{clients?.gender} </u>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-2">
                <strong> Client Cell Number</strong>
                <u>{clients?.clientcellNumber} </u>
              </div>
              <div className="col-md-2">
                <u> </u>
              </div>
              <div className="col-md-2">
                <strong> Representative Name </strong>
                <u>{clients?.ClientRepresentative} </u>
              </div>
              <div className="col-md-2">
                <u> </u>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-2">
                <strong> Representative Phone</strong>
                <u>{clients?.ClientRepresentativePhone}</u>
              </div>
              <div className="col-md-2">
                <u> </u>
              </div>
              <div className="col-md-2">
                <strong> Emeregency Contact Name</strong>
                <u>{clients?.EmeregencyContact} </u>
              </div>
              <div className="col-md-2">
                <u> </u>
              </div>
              <div className="col-md-2">
                <strong>Emergency Contact Phone</strong>
                <u>{clients?.EmeregencyContactPhone}</u>
              </div>
              <div className="col-md-2"></div>
            </div>
            <div className="row mt-4">
              <div className="col-md-2">
                <strong> Program Status</strong>
                <u> {clients?.ProgramStatus} </u>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-2">
                <strong>Wavier Program</strong>
                <u>{clients?.WavierProgram}</u>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-2">
                <strong>Totally Monthly Income</strong>
              </div>
              <div className="col-md-2">
                <u> ${clients?.TotallyMonthlyIncome} </u>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-2">
                <strong>Medical Problem</strong>
                <u> {clients?.MedicalProblem} </u>
              </div>
              <div className="col-md-4">
                <u> </u>
              </div>
              <div class="col-md-2">
                <strong>Address </strong>
                <u>{clients?.Address}</u>
              </div>
              <div className="col-md-4">
                <u _></u>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-2">
                <strong>States</strong>
                <u>{clients?.States}</u>
              </div>
              <div className="col-md-2">
                <u> </u>
              </div>
              <div className="col-md-2">
                <strong>City </strong>
                <u>{clients?.City} </u>
              </div>
              <div className="col-md-2">
                <u> </u>
              </div>
              <div className="col-md-2">
                <strong>Zip Code</strong>
                <u>{clients?.zipCode} </u>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: "gray", height: "5px" }}></hr>
        {clients?.map((item, index, id) => {
          return (
            <div key={id}>
              <div>{index}</div>
              <div>{item?.firstName}</div>
              <div>{item?.MedicaidId}</div>
              <div>{item?.DateOfBirth}</div>
              <div>{item?.gender}</div>
              <div>{item?.clientRepresentative}</div>
              <div>{item?.clientcellNumber}</div>
              <div>{item?.EmeregencyContact}</div>
              <div>{item?.EmeregencyContactPhone}</div>
              <div>{item?.Address}</div>
              <div>{item?.States}</div>
              <div>{item?.City}</div>
              <div>{item?.zipCode}</div>
              <div>{item?.MedicalProblem}</div>
              <div>
                {/* <div style={{ backgroundColor: "white", border: "solid 1px black", padding: '3px' }}>Remove</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BasicProfile;
