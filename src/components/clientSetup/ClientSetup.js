import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AddClient from "./addClient/AddClient";
import ServiceAggrement from "./serviceAggrement/ServiceAggrement";
import ServicePlan from "./servicePlan/ServicePlan";
import NursingAssessment from "./nursingAssessment/NursingAssessment";
import InitialDateOfService from "./initialDateOfService/InitialDateOfService";
import ClientStatus from "../client/client-setup/ClientStatus/ClientStatus";
import Summary from "./summary/Summary";
import Done from "./Done/Done";

function ClientSetup() {
  const [currentTab, setCurrentTab] = useState("addClient");
  return (
    <div>
      <div className="container" id="twoThree">
        <Tabs
          id="controlled-tab-example"
          activeKey={currentTab}
          onSelect={(k) => setCurrentTab(k)}
          className="mb-3"
        >
          <Tab
            eventKey="addClient"
            title="Add Client"
            onClick={() => {
              setCurrentTab("addClient");
            }}
          ></Tab>
          <Tab
            eventKey="serviceAggrement"
            title="Service Aggrement"
            onClick={() => {
              setCurrentTab("serviceAggrement");
            }}
          ></Tab>
          <Tab
            eventKey="servicePlan"
            title="Service Plan"
            onClick={() => {
              setCurrentTab("servicePlan");
            }}
          ></Tab>
          <Tab
            eventKey="nursingAssessment"
            title="Nursing Assessment"
            onClick={() => {
              setCurrentTab("nursingAssessment");
            }}
          ></Tab>
          <Tab
            eventKey="initialDateOfService"
            title="Initial Date Of Service (PCA) "
            onClick={() => {
              setCurrentTab("initialDateOfService");
            }}
          ></Tab>
          <Tab
            eventKey="clientStatus"
            title="Client Status"
            onClick={() => {
              setCurrentTab("clientStatus");
            }}
          ></Tab>
          <Tab
            eventKey="summary"
            title="Summary"
            onClick={() => {
              setCurrentTab("summary");
            }}
          ></Tab>
          <Tab
            eventKey="done"
            title="Done"
            onClick={() => {
              setCurrentTab("done");
            }}
          ></Tab>
        </Tabs>
        {currentTab == "addClient" && <AddClient />}
        {currentTab == "serviceAggrement" && <ServiceAggrement />}
        {currentTab == "servicePlan" && <ServicePlan />}
        {currentTab == "nursingAssessment" && <NursingAssessment />}
        {currentTab == "initialDateOfService" && <InitialDateOfService />}
        {currentTab == "clientStatus" && <ClientStatus />}
        {currentTab == "summary" && <Summary />}
        {currentTab == "done" && <Done />}
      </div>
    </div>
  );
}

export default ClientSetup;
