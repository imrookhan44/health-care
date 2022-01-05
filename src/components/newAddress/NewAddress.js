import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
function NewAddress() {
  return (
    <div>
      <div className="container-fluid">
        <div>
          <div className="mt-2">
            <table
              id="excel-table"
              className="table table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>Action</th>
                  <th> Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaTrashAlt size={35} />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control "
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <FaPlus size={35} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <div className="row">
                <div className="col text-center">
                  <button type="button" className="btn btn-primary text-center">
                    Save
                  </button>
                  &nbsp;&nbsp;{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAddress;
