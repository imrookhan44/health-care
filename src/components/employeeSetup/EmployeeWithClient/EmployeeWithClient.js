import React from 'react'
import "./employeeWithClient.css"
function EmployeeWithClient() {
    return (
        <div>
             <div  className='fluid' >
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
                    <select required="" name="Clients" className="form-control">
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
                    />
                  </td>
                  <td>
                    <input required="" type="date" className="form-control" />
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
                {" "}
                &nbsp;
                <button className=" btn btn-primary text-center" type="button">
                  Back
                </button>{" "}
                &nbsp;
                <button
                  className="
                   btn btn-primary text-center"
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

export default EmployeeWithClient
