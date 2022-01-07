import React from "react";
import './employee.css'
import { FaPlus } from "react-icons/fa";
function Employee() {
  return (
    <div>
      <div className="row" style={{ border: "ridge" }}>
        <div className="form-group col-md-3">
          <label for="Employee Role">
            <b>Employee Role</b>
          </label>
          <select
            name="EmployeeRole"
            id="EmployeeRole"
            className="form-control"
          >
            <option value="0" selected="">
              Choose Employee Roles
            </option>
            <option value="1">Owner</option>
            <option value="2">Personal Care Assisstant</option>
            <option value="3">Certified Nurse Assisstant</option>
            <option value="4">Register Nurse</option>
            <option value="6">Office Adminitrator</option>
            <option value="7">Office Administrator Assistant</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="ClientStatus">
            <b>Search By Employee Name</b>
          </label>
          <input
            type="text"
            name="searchKey"
            id="searchKey"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-3">
          <label for="ClientStatus">
            <b> Action</b>
          </label>
          <button
            type="button"
            className="form-control btn btn-outline-secondary"
          >
            {" "}
            Search{" "}
          </button>
        </div>
      </div>
      <div class="row p-3">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4">
              <strong> Clients</strong>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4 right mb-1">
              <button type="button" class="btn btn-primary" tabindex="0">
              <FaPlus  size={25} /> Employee Setup{" "}
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered table-sm table-striped">
              <thead>
                <tr>
                  <th scope="col">UserId #</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Cell Phone.</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <div className="card-footer pb-0 pt-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
