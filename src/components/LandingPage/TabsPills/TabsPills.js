import "./TabsPills.css";
import React, { useState } from "react";
import Title from "./Title";
import FileUpload from "../FileUpload/FileUpload";
import DataTable from "../DataTable/DataTable";

const TabsPills = function () {
  const [selectedItemId, setSelectedItemId] = useState("pills-home-tab");
  const changeStateHandler = function (e) {
    e.preventDefault();
    setSelectedItemId(e.target.id);
  };
  return (
    <div className="col-lg-6 mb-4">
      <div className="default-card">
        <Title />
        <div className="nimmu-card-body">
          <div className="nimmu-card-tabs">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    selectedItemId === "pills-home-tab" ? "active" : ""
                  }`}
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected={`${
                    selectedItemId === "pills-home-tab" ? "true" : "false"
                  }`}
                  onClick={changeStateHandler}
                >
                  Update New Email List
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    selectedItemId === "pills-profile-tab" ? "active" : ""
                  }`}
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected={`${
                    selectedItemId === "pills-profile-tab" ? "true" : "false"
                  }`}
                  onClick={changeStateHandler}
                >
                  Previous Email Lists
                </a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              {selectedItemId === "pills-home-tab" ? (
                <div
                  className={`tab-pane ${
                    selectedItemId === "pills-home-tab" ? "show active" : ""
                  }`}
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <FileUpload />
                </div>
              ) : null}
              {selectedItemId === "pills-profile-tab" ? (
                <div
                  className={`tab-pane ${
                    selectedItemId === "pills-profile-tab" ? "show active" : ""
                  }`}
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <DataTable />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsPills;
