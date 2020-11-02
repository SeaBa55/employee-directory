import React,{ useState, useEffect } from "react";
import "./style.css";
import DataTable from "../DataTable";
import SearchBar from "../SearchBar";
import API from "../../utils/API";
// use state in main for search feild
function Main () {

  const [searchState, setSearchState] = useState({
    searchTerm: "",
    filter: "firstName"
  });
  const [initEmployees, setInitEmployees] = useState([]);

  useEffect(() => {
    API.getUsers().then(data =>  {
      const tmp = data.data.results.map((temp, index) => {
          return {
              key: index,
              image: temp.picture.medium,
              firstName: temp.name.first,
              lastName: temp.name.last
          }
      });
      setInitEmployees(tmp);
    });

    // setSearchState({
    //   searchTerm: "",
    //   filter: "firstName"
    // });
  },[]);

  const handleChange = event => {
    const col = event.currentTarget.id;
    const type = event.currentTarget.classList.value;
    // "form-control"
    // "dropdown-item"

    // if(type==="form-control") {
    //   update = {searchTerm: event.target.value.trim()};
    // }else{
    //   update = {filter: col};
    // };

    const newStateVal = type === "form-control" ? event.target.value.trim() : col;
    const newStateKey = type === "form-control" ? "searchTerm" : "filter";
    // setSearchState(event.target.value.trim());
    // setSearchState({
    //   searchTerm: event.target.value.trim(), 
    //   filter: col
    // });
    setSearchState((prevState) => {
      return { ...prevState, [newStateKey] : newStateVal}
    });
    
  };

    return (
      <div className="container col-12">
        <SearchBar setSearch={handleChange} searchVal={searchState} />
        <DataTable searchState={searchState} apiData={initEmployees} />
      </div>
    )
  };
export default Main;