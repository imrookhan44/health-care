import React from "react";
import './appSetting.css'
function AppSetting() {
  return (
    <div>
      <div className="row"  style={{   padding: "0 24px 24px 24px;"}}>
        <div className="form-group col-md-3">
          <b>App Key</b>
        </div>
        <div className="form-group col-md-6 text-center">
          <b>App Value</b>
        </div>
      </div>
      <div className="row   mt-4">
        <div className="form-group col-md-3">
          <b>Supervisory visit upComming alerts(In Days)</b>
        </div>
        <div className="form-group col-md-6">
          <input
            name="upcommingdays"
            type="text"
            id="upcommingdays"
            className="form-control "
            required="required"
          />
        </div>
      </div>
      <div  className="col text-center mt-2">
      <button type="submit" className="btn btn-primary text-center">Submit</button>
      </div>
    </div>
  );
}

export default AppSetting;
