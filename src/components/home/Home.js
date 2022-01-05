import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
export default function Home() {
  return (
    <div>
      <div class="container-fluid mt-2">
        <app>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Client by Program Status</h5>
                    <div className="card bg-primary text-white">
                      <div class="card-body">
                        InProgress ( )
                        <button
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          className="btn btn-info btn-sm"
                          style={{ float: "right", color: "black" }}
                        >
                          <AiOutlinePlusSquare size={20} />
                        </button>
                      </div>
                      <div id="collapseExample" className="collapse">
                        <div className="card card-body">
                          <ul className="nav"></ul>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="card bg-success text-white">
                      <div className="card-body">
                        Approved ( )
                        <button
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample2"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          class="btn btn-info btn-sm"
                          style={{ float: "right", color: "black" }}
                        >
                          <AiOutlinePlusSquare size={20} />
                        </button>
                      </div>
                      <div id="collapseExample2" class="collapse">
                        <div className="card card-body">
                          <ul className="nav"></ul>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="card bg-info text-white">
                      <div className="card-body">
                        Dis Approved ( )
                        <button
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample3"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          class="btn btn-info btn-sm"
                          style={{ float: "right", color: "black" }}
                        >
                          <AiOutlinePlusSquare size={20} />
                        </button>
                      </div>
                      <div
                        _ngcontent-cql-c49=""
                        id="collapseExample3"
                        class="collapse"
                      >
                        <div Name="card card-body">
                          <ul className="nav"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Client by Status</h5>
                    <div className="card bg-primary text-white">
                      <div className="card-body">
                        Open ( )
                        <button
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample4"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          class="btn btn-info btn-sm"
                          style={{ float: "right", color: "black" }}
                        >
                          <AiOutlinePlusSquare size={20} />
                        </button>
                      </div>
                      <div id="collapseExample4" className="collapse">
                        <div className="card card-body">
                          <ul className="nav"></ul>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="card bg-success text-white">
                      <div className="card-body">
                        Pause ( ){" "}
                        <button
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample5"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          class="btn btn-info btn-sm"
                          style={{ float: "right", color: "black" }}
                        >
                          <AiOutlinePlusSquare size={20} />
                        </button>
                      </div>
                      <div id="collapseExample5" className="collapse">
                        <div className="card card-body">
                          <ul className="nav"></ul>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="card bg-info text-white">
                      <div className="card-body">
                        Discharge ( )
                        <button
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample7"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          class="btn btn-info btn-sm"
                          style={{ float: "right", color: "black" }}
                        >
                          <AiOutlinePlusSquare size={20} />
                        </button>
                      </div>
                      <div id="collapseExample7" class="collapse">
                        <div className="card card-body">
                          <ul className="nav"></ul>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="card bg-info text-white">
                      <div className="card-body">
                        OnBoard ( )
                        <button
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample8"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          class="btn btn-info btn-sm"
                          style={{ float: "right", color: "black" }}
                        >
                          <AiOutlinePlusSquare size={20} />
                        </button>
                      </div>
                      <div id="collapseExample8" class="collapse">
                        <div className="card card-body">
                          <ul className="nav"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">UpComming Supervisory Visit</h5>
                    <table className="table">
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </app>
      </div>
    </div>
  );
}
