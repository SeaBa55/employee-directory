import React from "react";


function DataRow(props) {
  return (
    <div className="row justify-content-center">

      <div className="card col-1">
        <img src={props.image} className="img-fluid img-thumbnail" alt="profile"/>
      </div>
      
      <div className="card col-2">
        First Name: {props.firstName}
      </div>

      <div className="card col-2">
        Last Name: {props.lastName}
      </div>

    </div>
  );
}

export default DataRow;