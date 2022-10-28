import React, { useEffect, useState } from "react";
import { FaPlus, FaDownload } from "react-icons/fa";
import { realDB } from "../../Firebase";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function Client() {
  var [currentId, setCurrentId] = useState("");
  let history = useHistory();
  
  useEffect(() => {
    realDB.ref("form-data4").on("value", (snapshot) => {
      if (snapshot && snapshot.val()) {
        console.log(" snapshot val ()", snapshot.val());
        let values = Object.values(snapshot.val());
        let keys = Object.keys(snapshot.val());
        values.map((item, index) => (item["key"] = keys[index]));
        setClients(values);
      }
    });
    
  }, []);

  const onDelete = (key) => {
    
    if (window.confirm("Are you sure to delete this record?")) {
      console.log("key : ",key);
      realDB.ref("form-data4").child(key).remove().then(res =>{ 
        console.log("removed")
      }).catch(e =>{ console.log("err : ",e)}
      
      )
      window.location.reload(true);
    }
  };

  const [clients, setClients] = useState([]);

  return (
    <div>
      <div class="row">
        <div class="form-group col-md-3">
          <label for="ProgramStatus">
            <b>Program Status</b>
          </label>
          <select
            required=""
            name="ProgramStatus"
            id="ProgramStatus"
            className="form-control"
          >
            <option value="0" selected="">
              Choose Program Status
            </option>
            <option value="1" >
              In Progress
            </option>
            <option value="2" >
              Approved
            </option>
            <option value="3" >
              Dis Approved
            </option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="ClientStatus">
            <b>Client Status</b>
          </label>
          <select
            name="ClientStatus"
            id="ClientStatus"
            class="form-control"
            reflect-name="ClientStatus"
            reflect-model="2"
          >
            <option value="0" selected="" >
              Choose Client Status
            </option>
            <option value="1">
              Open
            </option>
            <option value="2">
              Pause
            </option>
            <option value="3">
              Discharge
            </option>
            <option value="4">
              Client Onboarding
            </option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="ClientStatus">
            <b>Search By Client Name</b>
          </label>
          <input type="text" name="title" id="title" class="form-control" />
        </div>
        <div class="form-group col-md-3">
          <label for="ClientStatus">
            <b> Action</b>
          </label>
          <button type="button" class="form-control btn btn-outline-secondary">
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
            <div class="col-md-4 right">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  history.push("ClientSetup");
                }}
              >
                <FaPlus />
                ClientSetup{" "}
              </button>{" "}
              &nbsp;
              <button type="button" class="btn btn-primary">
                <FaDownload /> Download
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered table-sm table-striped">
              <thead>
                <tr>
                  <th scope="col">Client #</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Cell Phone.</th>
                  <th scope="col">Emergency Contact Name</th>
                  <th scope="col">Emergy Contact No.</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {clients?.map((item, index, id) => {
                  return (
                    <tr key={id}>
                      <td>{index}</td>
                      <td>{item?.firstName}</td>
                      <td>{item?.DateOfBirth}</td>
                      <td>{item?.clientcellNumber}</td>
                      <td>{item?.EmeregencyContact}</td>
                      <td>{item?.EmeregencyContactPhone}</td>
                      <td>{item?.Address}</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={() => {
                            onDelete(item?.key);
                          }}
                        >
                          Remove
                        </Button>{" "}
                       
                        {/* <div style={{ backgroundColor: "white", border: "solid 1px black", padding: '3px' }}>Remove</div> */}
                        <Button
                          variant="outline-success"
                          onClick={() => {
                            history.push("viewClient")
                          }}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="card-footer pb-0 pt-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
