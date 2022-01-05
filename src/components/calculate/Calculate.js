import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Select from "react-select";

import { toast } from "react-toastify";

function Calculate() {
  const [row, setRows] = useState([
    {
      id: 1,
      fromAddress: "",
      toAddress: "",
      tripDateTime: "",
      mileage: "Result Awaiting",
      timeTraveled: "0 mins",
    },
  ]);
  const handleAdd = () => {
    setRows([
      ...row,
      {
        id: row.length + 1,
        fromAddress: "",
        toAddress: "",
        tripDateTime: "",
        mileage: "",
        timeTraveled: "",
      },
      toast.success("New row added successfully", "New Row"),
    ]);
    console.log("rows :",row)
  };
  const handleRemove = (i) => {
    const list = [...row];
    setRows(list);
    if (row.length == 1) {
      toast.error("Can't delete the row when there is only one row", "Warning");
      return 
    } else {
      list.splice(i, 1);
      // row.splice(row, 1);
      toast.warning("Row deleted successfully", "Delete row");
      return true;
    }
  };
  const handleSave = () => {
    setRows(row);
    console.log("saved : ", row);
    toast.success("saved successfully");
  };

  const list = [
    { label: "city", value: 1 },
    { label: "city", value: 2 },
    { label: "city", value: 3 },
    { label: "city", value: 4 },
    { label: "city", value: 5 },
    { label: "city", value: 6 },
  ];

  return (
    <div>
      <div class="container-fluid">
        <div>
          <div>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>From Address</th>
                  <th>To Address </th>
                  <th>Trip DateTime </th>
                  <th>Mileage </th>
                  <th>Time Traveled</th>
                </tr>
              </thead>
              <tbody>
                {row?.map((item) => (
                  <tr>
                    <td>
                      <FaTrashAlt onClick={handleRemove} size={35} />
                    </td>
                    <td>
                      <div className="container" style={{ height: "5px" }}>
                        <div className="row">
                          <div className="col-md-4"></div>
                          <div className="">
                            <Select options={list} />
                          </div>
                          <div className="col-md-4"></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="container" style={{ height: "5px" }}>
                        <div className="row">
                          <div className="col-md-4"></div>
                          <div className="">
                            <Select options={list} />
                          </div>
                          <div className="col-md-4"></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control  "
                        style={{ height: "2.7rem" }}
                      />
                    </td>
                    <td className="mt-4"> Result Awaiting </td>

                    <td> 0 mins </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <FaPlus onClick={handleAdd} size={35} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <div className="row">
                <div className="col text-center">
                  <button
                    onClick={handleSave}
                    type="button"
                    class="btn btn-primary text-center"
                  >
                    Save
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" class="btn btn-primary text-center">
                    Calculate Distance
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" class="btn btn-primary text-center">
                    <i aria-hidden="true" className="fa fa-download"></i>{" "}
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
