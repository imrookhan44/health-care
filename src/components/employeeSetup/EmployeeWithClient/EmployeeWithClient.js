import React from "react";
import "./employeeWithClient.css";
function EmployeeWithClient(props) {
  let { formData1, setFormData1, setCurrentTab, submitForm } = props;

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData1({ ...formData1, [name]: value });
  };
  return (
    <div>
      <div className="fluid">
        <hr />
        <div className="container-fluid">
          <h3 className="text-center"> Employee With Clients</h3>
          <hr />
          <table
            id="excel-table"
            className="table table-striped table-bordered"
          >
            <thead>
              <tr>
                <th>Choose Clients</th>
                <th>Start Date</th>
                <th> End Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select
                    required=""
                    name="Clients"
                    className="form-control"
                    value={formData1?.Choose_Client}
                    onChange={updateForm}
                  >
                    <option> Ab user</option>
                    <option>cd user</option>
                    <option>client c</option>
                  </select>
                </td>
                <td>
                  <input
                    required=""
                    type="date"
                    className="form-control 
                     "
                    value={formData1?.Client_Date}
                    onChange={updateForm}
                  />
                </td>
                <td>
                  <input
                    required=""
                    type="date"
                    className="form-control"
                    value={formData1?.End_Date}
                    onChange={updateForm}
                  />
                </td>
                <td>
                  <button type="button" className="btn btn-primary text-center">
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col text-center">
              {" "}
              &nbsp;
              <button
                className=" btn btn-primary text-center"
                type="button"
                onClick={() => {
                  setCurrentTab("details");
                }}
              >
                Back
              </button>{" "}
              &nbsp;
              <button
                className="
                   btn btn-primary text-center"
                type="submit"
                onClick={() => {
                  setCurrentTab("fingerPrint");
                }}
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
      </div>
    </div>
  );
}

export default EmployeeWithClient;
