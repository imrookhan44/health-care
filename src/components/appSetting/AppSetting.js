import React from "react";

function AppSetting() {
  return (
    <div>
      <div className="row">
        <div className="form-group col-md-3">
          <b>App Key</b>
        </div>
        <div className="form-group col-md-6 text-center">
          <b>App Value</b>
        </div>
      </div>
      <div className="row">
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
      <div  className="col text-center">
      <button type="submit" className="btn btn-primary text-center">Submit</button>
      </div>
    </div>
  );
}

export default AppSetting;
