import React, {useState, useEffect} from "react";
import "./style.css";
import DataRow from "../DataRow/index";
import DataLabels from "../DataLabels";

function DataTable(props) {
    const [employees, setEmployeesState] = useState([]);
    const [toggleState, setToggleState] = useState({  
        toggle: null,
        toggleBtn: null 
    });

    useEffect(() => {
        setEmployeesState(props.apiData);
    }, [props.apiData]);

    const checkSearch = (searchState) => {
        const searchVal = searchState.searchTerm;
        const lableVal =  searchState.filter;
        let results;
      
        results = employees.filter(person =>
            person[Object.keys(person).filter(key => key===lableVal)].toLowerCase().includes(searchVal.toLowerCase())
        );

        return results;
    };

    const toggler = (event) => {
        const btn = event.currentTarget.id; // current lable button id.
        const colChange = (btn===toggleState.toggleBtn) ? false : true; // boolean indicating whether the user has selected a lable button for a different column. 
        const newToggleState = colChange ? true : !toggleState.toggle; // if the user has changed col, then newToggleState is forced true, otherwise toggle the current toggle state.
        const s = newToggleState ? 1 : -1;  // toggle direction logical switch.

        // set updated toggle state, allowing for toggle direction indicator to be rendered on the appropriate button lable and direction.
        setToggleState((prevState)=> {  
            return { ...prevState, 
                toggle: newToggleState,
                toggleBtn: btn
            }
        })

        // sort employees array aphabetically in assending and decending order depending on the value of the toggle direction logical switch "s".
        const arr = employees.sort((a, b) => {
            if(a[btn].toLowerCase() < b[btn].toLowerCase()) {
                return -1*s;
            }else if(a[btn].toLowerCase() > b[btn].toLowerCase()){
                return 1*s;
            }else{
                return 0
            }
        });

        // set employees state with the contents of the newly sorted array "arr".
        setEmployeesState(arr);
    };

    return( 
        <table className="table table-striped table-dark">
            <thead>
                <DataLabels
                    labels={props.colLabels}
                    dataToggle={toggler}
                    toggleState={toggleState}
                />
            </thead>
            <tbody>
                {checkSearch(props.searchState).map((data, index) => {
                    return(
                        <DataRow
                            key={index}
                            image={data.image}
                            firstName={data.firstName}
                            lastName={data.lastName}
                        />
                    )
                })}
            </tbody>
        </table>
    );
}

export default DataTable;