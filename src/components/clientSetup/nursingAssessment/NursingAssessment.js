import React from 'react'

function NursingAssessment(props) {

  let { formData, setFormData, setCurrentTab } = props;

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <div>
        <hr />
        <div className="container-fluid ">
          <h3 className="text-center"> Nursing Assessemnt </h3>
          <table
            id="excel-table"
            className="table table-striped table-bordered"
          >
            <thead>
              <tr>
                <th>Nursing Assessemnt </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  <input type="date" className="form-control " name="nursing-assesment" onChange={updateForm} />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary text-center"
                  >
                    Save
                  </button>
                  &nbsp;{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col text-center">
              <button className=" btn btn-primary text-center" type="button">
                Back
              </button>{" "}
              &nbsp;
              <button
                className=" btn btn-primary text-center"
                disabled=""
                type="submit"
              >
                Next
              </button>
              &nbsp;
              <button
                title="Client list"
                className="btn btn-primary text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NursingAssessment
