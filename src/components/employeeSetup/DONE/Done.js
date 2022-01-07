import React from "react";
import "./done.css"
function Done() {
  return (
    <div >
      <div className="container1">
        <p>You are now done.</p> &nbsp;{" "}
        <button title="Client list" className="btn btn-primary text-center">
          Close
        </button>
      </div>
    </div>
  );
}

export default Done;
