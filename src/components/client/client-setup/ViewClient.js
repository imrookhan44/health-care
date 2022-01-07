import React, { useState } from "react";
import { Navbar } from "react-bootstrap";

import BasicProfile from "./basicProfile/BasicProfile";
import ClientStatus from "./ClientStatus/ClientStatus";
import Services from "./services/Services";
function ViewClient() {
  const [currentTab, setCurrentTab] = useState("basic");
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
      {currentTab == "basic" && <BasicProfile />}
      {currentTab == "services" && <Services />}
      {currentTab == "clientStatus" && <ClientStatus />}
    </div>
  );
}

export default ViewClient;
