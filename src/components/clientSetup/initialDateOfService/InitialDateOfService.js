import React from 'react'

function InitialDateOfService() {
    return (
        <div>
              <div>
          <hr />
          <div className="container-fluid">
            <h3 className="text-center"> Inital Date Of Service </h3>
            <table
              id="excel-table"
              className="table table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>Inital Date Of Service</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="date" className="form-control " />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary text-center"
                    >
                      Save
                    </button>
                    &nbsp;{" "}
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

export default InitialDateOfService
