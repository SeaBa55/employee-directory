import React from "react";
import "./style.css";
import DataTable from "../DataTable";
import SearchBar from "../SearchBar";

function Main () {
    return (
      <div className="container col-12">
        <SearchBar/>
        <DataTable/>
      </div>
    )
  };
export default Main;