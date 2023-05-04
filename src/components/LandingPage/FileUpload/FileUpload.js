import React from "react";
import FileUploadTitle from "./FileUploadTitle";
import "./FileUpload.css";

const FileUpload = function () {
  return (
    <React.Fragment>
      <FileUploadTitle />
      <form action="/upload-target" className="dropzone">
        <div className="fallback">
          <input name="file" type="file" single />
        </div>
      </form>
    </React.Fragment>
  );
};

export default FileUpload;
