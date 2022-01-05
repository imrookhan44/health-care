import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
function DateReviewd() {
    return (
        <div>
             <div>
                <hr />
                <b className="text-center ">Yearly Annual Performance Date</b>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="mt-2">
                      <table
                        id="excel-table"
                        className="table table-striped table-bordered"
                      >
                        <thead>
                          <tr>
                            <th>Action</th>
                            <th> Date Reviewed the employee folder </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <FaTrashAlt size={35} />
                            </td>
                            <td>
                              <input type="date" className="form-control " />
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
                            <button
                              type="button"
                              className="btn btn-primary text-center"
                            >
                              Save
                            </button>{" "}
                            &nbsp;&nbsp;
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
                            <th>Enter the name of the person Reviewed by</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <FaTrashAlt size={35} />
                            </td>
                            <td>
                              <select
                                required=""
                                name="ProgramStatus"
                                id="ProgramStatus"
                                className="form-control "
                              >
                                <option value="1" selected="">
                                  User a
                                </option>
                                <option value="2">User b</option>
                                <option value="3">User C</option>
                              </select>
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
                            <button
                              type="button"
                              className="btn btn-primary text-center"
                            >
                              Save
                            </button>{" "}
                            &nbsp;&nbsp;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br className="" />
                <div className="row">
                  <div className="col text-center">
                    <button
                      className=" btn btn-primary text-center"
                      type="button"
                    >
                      Back
                    </button>{" "}
                    &nbsp;
                    <button class=" btn btn-primary text-center" type="submit">
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
    )
}

export default DateReviewd
