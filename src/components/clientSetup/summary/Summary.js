import React from 'react'

function Summary(props) {

  let { formData, setFormData, setCurrentTab } = props;

  return (
    <div>
      <div>
        <hr />
        <div className="row mt-4 ">
          <div className="col-md-2">
            <strong> Full Name</strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.firstName}</u>
          </div>
          <div className="col-md-2">
            <strong> Medicaid Id</strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.medicaidId} </u>
          </div>
          <div className="col-md-2">
            <strong> Date Of Birth </strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.DateOfBirth} </u>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-2">
            <strong> Gender</strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.gender} </u>
          </div>
          <div className="col-md-2">
            <strong> Client Cell Number</strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.clientcellNumber} </u>
          </div>
          <div className="col-md-2">
            <strong> Representative Name </strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.ClientRepresentative} </u>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-2">
            <strong> Representative Phone</strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.ClientRepresentativePhone}</u>
          </div>
          <div className="col-md-2">
            <strong> Emeregency Contact Name</strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.EmeregencyContact} </u>
          </div>
          <div className="col-md-2">
            <strong>Emergency Contact Phone</strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.EmeregencyContactPhone}</u>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-2">
            <strong>Address </strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.firstName}</u>
          </div>
          <div className="col-md-2">
            <strong>States</strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.firstName}</u>
          </div>
          <div className="col-md-2">
            <strong>City </strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.firstName} </u>
          </div>
          <div className="col-md-2">
            <strong>Zip Code</strong>
          </div>
          <div className="col-md-2">
            <u>{formData?.firstName} </u>
          </div>
        </div>
        <hr className="" />
        <div className="row mt-4 ">
          <div className="col-md-2">
            <strong> Program Status</strong>
          </div>
          <div className="col-md-2">{formData?.ProgramStatus}</div>
          <div className="col-md-2">
            <strong>Wavier Program</strong>
          </div>
          <div className="col-md-2">
            <div className="col-md-2"></div>
          </div>
          <div className="col-md-2">
            <strong>Totally Monthly Income</strong>
          </div>
          <div className="col-md-2">
            <u> $</u>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-2">
            <strong>Medical Problem</strong>
          </div>
          <div className="col-md-4">
            <u> </u>
          </div>
        </div>
        <hr className="" />
        <div classNameName="row mt-4 ">
          <div classNameName="col-md-2">
            <strong>Service Agreement</strong>
          </div>
          <div className="col-md-2">
            <u></u>
          </div>
          <div className="col-md-2">
            <strong>Service Plan </strong>
          </div>
          <div className="col-md-2">
            <u></u>
          </div>
          <div className="col-md-2">
            <strong>Nursing Assessment</strong>
          </div>
          <div className="col-md-2">
            <u> </u>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-2">
            <strong>Initial Date Of Service </strong>
          </div>
          <div className="col-md-2">
            <u></u>
          </div>
          <div className="col-md-2">
            <strong>Client Status </strong>
          </div>
          <div className="col-md-2">
            <u></u>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col text-center">
            <button className=" btn btn-primary text-center" type="button">
              Back
            </button>{" "}
            &nbsp;
            <button className=" btn btn-primary text-center" type="submit">
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
  )
}

export default Summary
