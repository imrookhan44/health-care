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
import { toast } from "react-toastify";
import firebase, { realDB } from '../Firebase'
import ViewClient from "../client/client-setup/ViewClient";

function ClientSetup() {
  const [currentTab, setCurrentTab] = useState("addClient");
  const [formData, setFormData] = useState({});


  const submitForm = () => {
    console.log("submiting form ", formData);
    if (!formData?.medicaidId) {
      toast.warning("Please enter all the fields", "Incomplete form");
      return;
    }

    let medicalIdExists = false;
    realDB.ref("form-data4").orderByChild("medicaidId").equalTo(formData?.medicaidId).once("value", res => {
      if (res && res?.val()) {
        let existingClient = Object.values(res?.val());
        let keys = Object.keys(res?.val());
        existingClient.map((item, index) => item["key"] = keys[index]);
        console.log("Client already exists  : ", existingClient);
        if (existingClient[0]?.medicaidId == formData?.medicaidId) {
          // toast.warning("Medical Id Already Exist", "Client Exitsts");
          medicalIdExists = false;
          console.log("Res : ", res,);
          realDB.ref("form-data4").child(existingClient[0]?.key).update(formData).then(res => {
            console.log("updated successfuly");
            toast.success("Client Data Updated Successfully", "Data updated");
          }).catch(e => {
            console.error("err 1", e);
            console.error("?.message :", e?.message);
            toast.error(e?.message)
          })
        }

      } else {
        medicalIdExists = true;
        realDB.ref("form-data4").push(formData).then(res => {
          console.log("form updated : ", res)
        }).catch(e => {
          console.log("err: ", e);
        })
      }
    }).then(res => {
      console.log("res level 1:", res);
    }).catch(e => { console.error("err : ", e) })

    if (!medicalIdExists) {
      // realDB.ref("form-data4").push(formData).then(res => {
      //   console.log("form updated : ", res)
      // }).catch(e => {
      //   console.log("err: ", e);
      // })
    }
  }

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
        {currentTab == "addClient" && <AddClient formData={formData} setFormData={setFormData} setCurrentTab={setCurrentTab} submitForm={submitForm} />}
        {currentTab == "serviceAggrement" && <ServiceAggrement formData={formData} setFormData={setFormData} submitForm={submitForm} setCurrentTab={setCurrentTab} />}
        {currentTab == "servicePlan" && <ServicePlan formData={formData} setFormData={setFormData} submitForm={submitForm} setCurrentTab={setCurrentTab} />}
        {currentTab == "nursingAssessment" && <NursingAssessment formData={formData} setFormData={setFormData} submitForm={submitForm} setCurrentTab={setCurrentTab} />}
        {currentTab == "initialDateOfService" && <InitialDateOfService formData={formData} setFormData={setFormData} submitForm={submitForm} setCurrentTab={setCurrentTab} />}
        {currentTab == "clientStatus" && <ClientStatus formData={formData} setFormData={setFormData} submitForm={submitForm} setCurrentTab={setCurrentTab} />}
        {currentTab == "summary" && <Summary formData={formData} setFormData={setFormData} currentTab={currentTab} setCurrentTab={setCurrentTab} />}
        {currentTab == "done" && <Done formData={formData} setFormData={setFormData} currentTab={currentTab} setCurrentTab={setCurrentTab} />}
        {currentTab == "done" && <ViewClient formData={formData} setFormData={setFormData} currentTab={currentTab} setCurrentTab={setCurrentTab} />}
      </div>
    </div>
  );
}

export default ClientSetup;
