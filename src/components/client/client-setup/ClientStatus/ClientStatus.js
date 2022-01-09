import React from "react";

function ClientStatus(props) {
  let { formData, setFormData, setCurrentTab } = props;

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <div class="mat-tab-body-content " style={{ transform: "none;" }}>
        <div class="row mt-4 ">
          <div class="col-md-2">
            <strong>Initial Date Of Service </strong>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-2">
            <strong>Client Status </strong>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default ClientStatus;
