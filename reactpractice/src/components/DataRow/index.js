import React from "react";


function DataRow(props) {
  return (
    <div className="row">

      <div className="card">
        <img src={props.image} alt="profile"/>
      </div>
      
      <div className="card">
        First Name: {props.firstName}
      </div>

      <div className="card">
        Last Name: {props.lastName}
      </div>

    </div>
  );
}

export default DataRow;