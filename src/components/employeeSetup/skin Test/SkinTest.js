import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import './skinTest.css'
function SkinTest() {
    return (
        <div>
                <div className='fluid1'>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="mt-2">
                <table
                  id="excel-table"
                  className="table table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th> Skin Test</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      <FaTrashAlt  size={35} />
                      </td>
                      <td>
                        <input type="date" className="form-control " />
                      </td>
                    </tr>

                    <tr>
                      <td>
                      <FaPlus  size={35} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <div className="row">
                    <div className="col text-center">
                      <button
                        type="button"
                        className="btn btn-primary text-center"
                      >
                        Save
                      </button>{" "}
                      &nbsp;&nbsp;{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-2">
                <table
                  id="excel-table"
                  className="table table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th> CPR/AED/AID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      <FaTrashAlt  size={35} />
                      </td>
                      <td>
                        <input type="date" className="form-control " />
                      </td>
                    </tr>

                    <tr>
                      <td>
                      <FaPlus  size={35} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <div className="row">
                    <div className="col text-center">
                      <button
                        type="button"
                        className="btn btn-primary text-center"
                      >
                        Save
                      </button>{" "}
                      &nbsp;&nbsp;{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col text-center">
              <button className=" btn btn-primary text-center" type="button">
                Back
              </button>{" "}
              &nbsp;{" "}
              <button className=" btn btn-primary text-center" type="submit">
                Next
              </button>{" "}
              &nbsp;{" "}
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

export default SkinTest
