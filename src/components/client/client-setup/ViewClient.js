import React, { useState, useEffect} from "react";
import { Navbar } from "react-bootstrap";
import { realDB } from "../../Firebase";

import BasicProfile from "./basicProfile/BasicProfile";
import ClientStatus from "./ClientStatus/ClientStatus";
import Services from "./services/Services";
function ViewClient(props) {

  let {formData }= props
  const [currentTab, setCurrentTab] = useState("basic");

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
  const [clients, setClients] = useState([]);
  return (
    <div>
      <div class="container-fluid">
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand
            className=""
            onClick={() => {
              setCurrentTab("basic");
            }}
          >
            Basic Profile
          </Navbar.Brand>
          <Navbar.Brand
            className="offset-1"
            onClick={() => {
              setCurrentTab("services");
            }}
          >
            Services
          </Navbar.Brand>
          <Navbar.Brand
            className="offset-1"
            onClick={() => {
              setCurrentTab("clientStatus");
            }}
          >
            initial DateOfServices/Client Status
          </Navbar.Brand>
        </Navbar>
      </div>
      {currentTab == "basic" && <BasicProfile clients={clients} />}
      {currentTab == "services" && <Services />}
      {currentTab == "clientStatus" && <ClientStatus />}
    </div>
  );
}

export default ViewClient;
