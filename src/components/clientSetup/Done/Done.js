import React from "react";

function Done(props) {
  let { formData, setFormData, setCurrentTab } = props;

  return (
    <div>
      <div>
        <p className="">You are now done.</p> &nbsp;
        <button
          title="Client list"
          className="btn btn-primary text-center"
          onClick={() => {
            setCurrentTab("addClient");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Done;
