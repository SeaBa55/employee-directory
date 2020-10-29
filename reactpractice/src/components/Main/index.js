import React from "react";
import "./style.css";
import DataTable from "../DataTable";
import DataLabels from "../DataLabels";

function Main () {
    return (
      <div className="container col-12">
        <DataLabels/>
        <DataTable/>
      </div>
    )
  };
export default Main;