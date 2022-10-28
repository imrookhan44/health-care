import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AddClient1 from "./AddClient/AddClient1";
import Deatails from "./Deatails/Deatails";
import EmployeeWithClient from "./EmployeeWithClient/EmployeeWithClient";
import FingerPrint from "./GCHEXS FingerPrint/FingerPrint";
import SkinTest from "./skin Test/SkinTest";
import CnaLicense from "./Cna License/CnaLicense";
import Done from "../clientSetup/Done/Done";
import { toast } from "react-toastify";
import firebase, { realDB } from "../Firebase";

function EmployeeSetup() {
  const [currentTab, setCurrentTab] = useState("addClient");
  const [formData1, setFormData1] = useState({});

  const submitForm = () => {
    console.log("submiting form ", formData1);
    if (!formData1?.employeeEmail) {
      toast.warning("Please enter all the fields", "Incomplete form");
      return;
    }

    let employeeEmailExists = false;
    realDB
      .ref("employee")
      .orderByChild("email")
      .equalTo(formData1?.employeeEmail)
      .once("value", (res) => {
        if (res && res?.val()) {
          let existingClient = Object.values(res?.val());
          let keys = Object.keys(res?.val());
          existingClient.map((item, index) => (item["key"] = keys[index]));
          console.log("Client already exists  : ", existingClient);
          if (existingClient[0]?.employeeEmail == formData1?.employeeEmail) {
            // toast.warning("Medical Id Already Exist", "Client Exitsts");
            employeeEmailExists = false;
            console.log("Res : ", res);
            realDB
              .ref("employee")
              .child(existingClient[0]?.key)
              .update(formData1)
              .then((res) => {
                console.log("updated successfuly");
                toast.success(
                  "Client Data Updated Successfully",
                  "Data updated"
                );
              })
              .catch((e) => {
                console.error("err 1", e);
                console.error("?.message :", e?.message);
                toast.error(e?.message);
              });
          }
        } else {
          employeeEmailExists = true;
          realDB
            .ref("employee")
            .push(formData1)
            .then((res) => {
              console.log("form updated : ", res);
            })
            .catch((e) => {
              console.log("err: ", e);
            });
        }
      })
      .then((res) => {
        console.log("res level 1:", res);
      })
      .catch((e) => {
        console.error("err : ", e);
      });

    if (!employeeEmailExists) {
      // realDB.ref("form-data4").push(formData).then(res => {
      //   console.log("form updated : ", res)
      // }).catch(e => {
      //   console.log("err: ", e);
      // })
    }
  };
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={currentTab}
        onSelect={(k) => setCurrentTab(k)}
        className="mb-3"
      >
        <Tab eventKey="addClient" title="AddClient"></Tab>

        <Tab
          eventKey="details"
          title="Details"
          onClick={() => {
            setCurrentTab("details");
          }}
        ></Tab>
        <Tab
          eventKey="employeeWithClient"
          title="Employee With Clients"
          onClick={() => {
            setCurrentTab("employeeWithClient");
          }}
        ></Tab>
        <Tab
          eventKey="fingerPrint"
          title="GCHEXS FingerPrint"
          onClick={() => {
            setCurrentTab("fingerPrint");
          }}
        ></Tab>
        <Tab
          eventKey="skinTest"
          title="Skin Test, CPR/AED/AID"
          onClick={() => {
            setCurrentTab("skinTest");
          }}
        ></Tab>
        <Tab
          eventKey="cnaLicense"
          title="CNA License, Personal Care Assistant Company"
          onClick={() => {
            setCurrentTab("cnaLicense");
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
      {currentTab == "addClient" && (
        <AddClient1
          formData1={formData1}
          setFormData1={setFormData1}
          setCurrentTab={setCurrentTab}
          submitForm={submitForm}
        />
      )}
      {currentTab == "details" && (
        <Deatails
          formData1={formData1}
          setFormData1={setFormData1}
          submitForm={submitForm}
          setCurrentTab={setCurrentTab}
        />
      )}
      {currentTab == "employeeWithClient" && (
        <EmployeeWithClient
          formData1={formData1}
          setFormData1={setFormData1}
          setCurrentTab={setCurrentTab}
          submitForm={submitForm}
        />
      )}
      {currentTab == "fingerPrint" && (
        <FingerPrint
          formData1={formData1}
          setFormData1={setFormData1}
          setCurrentTab={setCurrentTab}
          submitForm={submitForm}
        />
      )}
      {currentTab == "skinTest" && (
        <SkinTest
          formData1={formData1}
          setFormData1={setFormData1}
          submitForm={submitForm}
          setCurrentTab={setCurrentTab}
        />
      )}
      {currentTab == "cnaLicense" && (
        <CnaLicense
          formData1={formData1}
          setFormData1={setFormData1}
          submitForm={submitForm}
          setCurrentTab={setCurrentTab}
        />
      )}
      {currentTab == "done" && (
        <Done
          formData1={formData1}
          setFormData1={setFormData1}
          setCurrentTab={setCurrentTab}
          submitForm={submitForm}
        />
      )}
    </div>
  );
}

export default EmployeeSetup;
