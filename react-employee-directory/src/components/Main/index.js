import React,{ useState } from "react";
import "./style.css";
import DataTable from "../DataTable";
import SearchBar from "../SearchBar";
// use state in main for search feild
function Main () {

  const [searchState, setSearchState] = useState("");

  const handleChange = event => {
    setSearchState(event.target.value.trim());
  };

    return (
      <div className="container col-12">
        <SearchBar setSearch={handleChange} searchVal={searchState} />
        <DataTable searchVal={searchState} />
      </div>
    )
  };
export default Main;