import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import './supervisory.css'
function Supervisory() {
  return (
    <div>
      <div className="element">
        <div class="row">
          <div class="col-md-3">
            <b> Supervisory Information of </b>
          </div>
          <div class="col-md-3"> </div>
          <div class="col-md-3">
            <b> Date Of Birth</b>
          </div>
          <div class="col-md-3"></div>
        </div>{" "}
        &nbsp;&nbsp;
        <div class="row">
          <div class="col-md-3">
            <b> Nursing Assessment Date </b>
          </div>
          <div class="col-md-3"> </div>
        </div>
        <hr />
        <table id="excel-table" class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Action</th>
              <th>Total lapsed days</th>
              <th>Expected DateTime</th>
              <th>Actual DateTime </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <FaTrashAlt size={35} />
              </td>
              <td></td>

              <td>
                <input
                  type="date"
                  class="form-control ng-untouched ng-pristine ng-valid"
                />
              </td>
              <td>
                <input
                  type="date"
                  class="form-control ng-untouched ng-pristine ng-valid"
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
          <div class="row">
            <div class="col text-center">
              <button type="button" class="btn btn-primary text-center">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supervisory;
