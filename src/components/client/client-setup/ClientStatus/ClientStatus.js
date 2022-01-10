import React from "react";

function ClientStatus(props) {
  let { formData, setFormData, setCurrentTab } = props;

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <div className="mat-tab-body-content " style={{ transform: "none" }}>
        <div className="row mt-4 ">
          <div className="col-md-2">
            <strong>Initial Date Of Service </strong>
          </div>
          <div className="col-md-2">
          <u>{formData?.initial_date}</u>
          </div>
          <div className="col-md-2">
            <strong>Client Status </strong>
          </div>
          <div className="col-md-2">  <u>{formData?.initial_date}</u></div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <button className=" btn btn-primary text-center" type="button" onClick={() => { setCurrentTab("initialDateOfService") }}>
            Back
          </button>
          &nbsp;
          <button
            className=" btn btn-primary text-center"
            disabled=""
            type="submit"
            onClick={() => { setCurrentTab("summary") }}
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
  );
}

export default ClientStatus;
