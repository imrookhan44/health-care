import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import './cnaLicense.css'
function CnaLicense(props) {
  let { formData, setFormData, setCurrentTab, submitForm } = props;

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [name]: value });
  }
    return (
        <div>
               <div className='fluid2'>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="mt-1">
                <table
                  id="excel-table"
                  className="table table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>
                        {" "}
                        Does he/she has a CNA license expiration Date: Date.{" "}
                      </th>
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
              <div className="mt-1">
                <table
                  id="excel-table"
                  className="table table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>
                        Date of Personal Care Assistant Competency Evalutation
                        Part 1.
                      </th>
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
              <button
                className="
                 btn btn-primary text-center"
                type="button"
                onClick={() => { setCurrentTab("skinTest") }}
              >
                Back
              </button>{" "}
              &nbsp;{" "}
              <button
                className="
                 btn btn-primary text-center"
                type="submit"
                onClick={() => { setCurrentTab("done") }}
              >
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

export default CnaLicense
