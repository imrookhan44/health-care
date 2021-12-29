import React from "react";
import { Table, Button } from "react-bootstrap";
import "./calculate.css";
import { BsPlusLg } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { GrDownload } from "react-icons/gr";

function Calculate() {
  return (
    <div className=" container table mt-3">
      <Table striped bordered hover id="Table">
        <thead className="Head">
          <tr>
            <th>Action</th>
            <th>From Address</th>
            <th>To Address</th>
            <th>Trip Date Time</th>
            <th>Mileage</th>
            <th>Time Traveled</th>
          </tr>
        </thead>
        <tbody className="Body">
          <tr>
            <td>
              <BsPlusLg size="30px" />
            </td>
            <td>
              <select className="form-control">
                <option selected>Choose From Address</option>
                <option value="1">city 1</option>
                <option value="2">city 2</option>
                <option value="3">city 3</option>
              </select>
            </td>
            <td>
              {" "}
              <select className="form-control">
                <option selected>Choose To Address</option>
                <option value="1">city 1</option>
                <option value="2">city 2</option>
                <option value="3">city 3</option>
              </select>{" "}
            </td>
            <td>
              {" "}
              <input
                required="required"
                type="date"
                id="birthday"
                name="birthday"
                className="form-control"
                id="form-control"
              />
            </td>
            <td>Result Awaiting</td>
            <td>0 mins</td>
          </tr>
          <tr>
            <td>
              <MdDelete size="30px" />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <div className="row ">
        <div className="col-lg-6 col-md-6  mt-3" id="buttons">
          <Button variant="primary" active>
            Calculate Distance
          </Button>{" "}
          <Button variant="primary" active>
            <GrDownload /> Download Report
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
