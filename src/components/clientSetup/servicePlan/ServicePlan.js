import React from 'react'

function ServicePlan() {
    return (
        <div>
              <div>
          <hr />
          <div className="container-fluid ">
            <h3 className="text-center"> Service Plan Information</h3>
            <table
              id="excel-table"
              className="table table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>Date of Service Plan </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>
                    <input type="date" className="form-control" />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary text-center"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col text-center">
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

export default ServicePlan
