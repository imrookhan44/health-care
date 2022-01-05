import React from 'react'

function ClientStatus() {
    return (
        <div>
               <div>
          <hr />
          <div className="container-fluid ">
            <h3 className="text-center"> Client Status </h3>
            <table
              id="excel-table"
              className="table table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>Client Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>
                    <select required="" className="form-control ">
                      <option value="1" ng-reflect-value="1">
                        Open
                      </option>
                      <option value="2" ng-reflect-value="2">
                        Pause
                      </option>
                      <option value="3" ng-reflect-value="3">
                        Discharge
                      </option>
                      <option value="4" ng-reflect-value="4">
                        Client Onboarding
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-primary text-center">
                  Save
                </button>{" "}
                &nbsp;
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
        </div>
    )
}

export default ClientStatus
