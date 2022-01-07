import React, {useState} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AddClient from './AddClient/AddClient';
import Deatails from './Deatails/Deatails';
import EmployeeWithClient from './EmployeeWithClient/EmployeeWithClient';
import FingerPrint from './GCHEXS FingerPrint/FingerPrint';
import SkinTest from './skin Test/SkinTest';
import CnaLicense from './Cna License/CnaLicense';
import Done from '../clientSetup/Done/Done';
function EmployeeSetup() {
    const [currentTab, setCurrentTab] = useState('addClient');
    return (
        <div>
             <Tabs
      id="controlled-tab-example"
      activeKey={currentTab}
      onSelect={(k) => setCurrentTab(k)}
      className="mb-3"
    >
      <Tab eventKey="addClient" title="AddClient">
        
      </Tab>
    
      <Tab eventKey="details" title="Details" onClick={()=> {setCurrentTab("details")}} >
        
      </Tab>
      <Tab eventKey="employeeWithClient" title="Employee With Clients" onClick={()=> {setCurrentTab("employeeWithClient")}}>
        
        </Tab>
        <Tab eventKey="fingerPrint" title="GCHEXS FingerPrint" onClick={()=> {setCurrentTab("fingerPrint")}} >
        
        </Tab>
        <Tab eventKey="skinTest" title="Skin Test, CPR/AED/AID" onClick={()=> {setCurrentTab("skinTest")}} >
        
        </Tab>
        <Tab eventKey="cnaLicense" title="CNA License, Personal Care Assistant Company" onClick={()=> {setCurrentTab("cnaLicense")}}>
        
        </Tab>
        <Tab eventKey="done" title="Done" onClick={()=> {setCurrentTab("done")}}>
        
        </Tab>

    </Tabs>
    {currentTab == "addClient" && <AddClient />}
    {currentTab == "details" && <Deatails />}
    {currentTab == "employeeWithClient" && <EmployeeWithClient />}
    {currentTab == "fingerPrint" && <FingerPrint />}
    {currentTab == "skinTest" && <SkinTest />}
    {currentTab == "cnaLicense" && <CnaLicense />}
    {currentTab == "done" && <Done />}

   
        </div>
    )
}

export default EmployeeSetup
