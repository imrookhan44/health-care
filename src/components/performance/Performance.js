import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./performance.css";
import AnnualPerformance from "./yearly annual performance/AnnualPerformance";
import DateReviewd from "./date reviwed employee/DateReviewd";
import Done from "./done/Done";

function Performance() {
  const [currentTab, setCurrentTab] = useState("annualPerformance");
  return (
    <div>
      <div className="container-fluid">
        <div className="">
          <div>
            <Tabs
              id="controlled-tab-example"
              activeKey={currentTab}
              onSelect={(k) => setCurrentTab(k)}
              className="mb-3"
            >
              <Tab eventKey="annualPerformance" title="Yearly Annual Performance Date"
               onClick={() => {
                setCurrentTab("annualPerformance")
               }}
              ></Tab>
              <Tab
                onClick={() => {
                setCurrentTab("dateReviewd")
               }}
                eventKey="dateReviewd"
                title=" Date Reviewed the employee folder, Enter the name of the
                    person Reviewed by"
              ></Tab>
              <Tab eventKey="done" title="Done"
               onClick={() => {
                setCurrentTab("done")
               }}></Tab>
            </Tabs>

            {currentTab == "annualPerformance" && <AnnualPerformance />}
            {currentTab == "dateReviewd" && <DateReviewd />}
            {currentTab == "done" && <Done />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
