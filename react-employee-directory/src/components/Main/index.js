import React,{ useState, useEffect } from "react";
import "./style.css";
import DataTable from "../DataTable";
import SearchBar from "../SearchBar";
import API from "../../utils/API";

function Main () {
  const [initEmployees, setInitEmployees] = useState([]);
  const [columnLabels, setColumnLables] = useState([]);
  const [searchState, setSearchState] = useState({
    searchTerm: "",
    filter: "name"
  });
  
  useEffect(() => {
    API.getUsers().then(data =>  {
      const tmp = data.data.results.map((temp, index) => {
        return {
          key: index,
          image: temp.picture.medium,
          name: `${temp.name.first + " " + temp.name.last}`,
          phone: temp.phone,
          email: temp.email,
          dob: temp.dob.date.split("-")[0]
        }
      });
      setInitEmployees(tmp);
      setColumnLables(Object.keys(tmp[0]).splice(2,Object.keys(tmp[0]).length));
    });
  },[]);

  const handleChange = event => {
    const col = event.currentTarget.id;
    const type = event.currentTarget.classList.value;
    const newStateVal = type === "form-control" ? event.target.value.trim() : col;
    const newStateKey = type === "form-control" ? "searchTerm" : "filter";
  
    setSearchState((prevState) => {
      return { ...prevState, [newStateKey] : newStateVal}
    });
  };

  return (
    <div className="container col-12">
      <SearchBar setSearch={handleChange} searchVal={searchState} colLabels={columnLabels}/>
      <DataTable searchState={searchState} apiData={initEmployees} colLabels={columnLabels}/>
    </div>
  )
};

export default Main;