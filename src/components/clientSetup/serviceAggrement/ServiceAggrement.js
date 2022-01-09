import React from 'react'

function ServiceAggrement(props) {
  let { formData, setFormData, setCurrentTab, submitForm } = props;

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <div className="">
        <hr className="" />
        <div className="container-fluid ">
          <h3 className="text-center"> Service Aggrement</h3>
          <table
            id="excel-table"
            className="table table-striped table-bordered"
          >
            <thead>
              <tr>
                <th>Date of Service Aggrement </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  <input
                    required=""
                    type="date"
                    className="form-control "
                    ng-reflect-required=""
                    onChange={updateForm}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary text-center"
                    onClick={submitForm}
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col text-center">
              &nbsp;
              <button className=" btn btn-primary text-center" type="button">
                Back
              </button>
              &nbsp;
              <button
                className=" btn btn-primary text-center"
                disabled=""
                type="submit"
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
  )
}

export default ServiceAggrement
