import React, {useState, useEffect} from "react";
import "./style.css";
import DataRow from "../DataRow/index";
import DataLabels from "../DataLabels";
import API from "../../utils/API";

function DataTable() {

    const [employees, setEmployeesState] = useState([]);

   
    useEffect(() => {
        API.getUsers().then(data =>  {
            setEmployeesState(data.data.results);
        });
    }, []);

    return( 
        <table className="table table-striped table-dark">
            <thead>
                <DataLabels/>
            </thead>
            <tbody>
                {employees.map((data, index) => {
                    return(
                        <DataRow
                            key={index}
                            image={data.picture.medium}
                            firstName={data.name.first}
                            lastName={data.name.last}
                        />
                    )
                })}
            </tbody>
        </table>
    );
}

export default DataTable;