import React, {useState, useEffect} from "react";
import "./style.css";
import DataRow from "../DataRow/index";
import DataLabels from "../DataLabels";
import API from "../../utils/API";

function DataTable() {

    const [employees, setEmployeesState] = useState([]);
    const [toggleState, setToggleState] = useState({  
        toggle: null,
        toggleBtn: null 
    });

    useEffect(() => {
        API.getUsers().then(data =>  {
            setEmployeesState(data.data.results);
        });
    }, []);

    const toggler = (e) => {
        const btn = e.currentTarget.id;

        setToggleState((prevState)=> {  
            const colChange = (btn===prevState.toggleBtn) ? false : true;
            return { ...prevState, 
                toggle: setToggle(prevState,colChange),
                toggleBtn: btn
            }
        });
        
        const setToggle = (data,reset) => {
            // init toggle state handling
            if(data.toggle===null || reset) {
                return true;
            }else{
                // toggle the toggle state (results in up or down arrow rendering and sort method change)
                return !data.toggle
            };
        };
    };

    return( 
        <table className="table table-striped table-dark">
            <thead>
                <tr className={toggleState ? "active" : "hide"}>
                    <th scope="col">
                        Hello World
                    </th>
                </tr>
                <DataLabels
                    dataToggle={toggler}
                    toggleState={toggleState}
                />
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