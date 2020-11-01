import React, {useState, useEffect} from "react";
import "./style.css";
import DataRow from "../DataRow/index";
import DataLabels from "../DataLabels";
import API from "../../utils/API";

function DataTable(props) {
    // const [initEmployees, setInitEmployees] = useState([]);
    const [employees, setEmployeesState] = useState([]);
    const [toggleState, setToggleState] = useState({  
        toggle: null,
        toggleBtn: null 
    });

    const checkSearch = searchVal => {
        let  results = [];

        // if(searchVal===""){
        //     results = employees;
        // }else{
            results = employees.filter(person =>
                person.firstName.toLowerCase().includes(searchVal)
            );
        // };
        
        return results;

    };

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
            // setInitEmployees(tmp);
            setEmployeesState(tmp);
        });
    }, []);

    const toggler = (e) => {
        const btn = e.currentTarget.id;
        const colChange = (btn===toggleState.toggleBtn) ? false : true;
        const newToggleState = colChange ? true : !toggleState.toggle;

        setToggleState((prevState)=> {  
            return { ...prevState, 
                toggle: newToggleState,
                toggleBtn: btn
            }
        })

        // setToggleState((prevState)=> {  
        //     return { ...prevState, 
        //         toggle: setToggle(prevState,colChange),
        //         toggleBtn: btn
        //     }
        // })

        // const setToggle = (data,reset) => {
        //     // init toggle state handling
        //     if(data.toggle===null || reset) {
        //         return true;
        //     }else{
        //         // toggle the toggle state (results in up or down arrow rendering and sort method change)
        //         return !data.toggle
        //     };
        // };

        const s = newToggleState ? 1 : -1;
        const arr = employees.sort((a, b) => {
            if(a[btn].toLowerCase() < b[btn].toLowerCase()) {
                return -1*s;
            }else if(a[btn].toLowerCase() > b[btn].toLowerCase()){
                return 1*s;
            }else{
                return 0
            }
        });
        setEmployeesState(arr);
    };

    return( 
        <table className="table table-striped table-dark">
            <thead>
                <DataLabels
                    data={employees}
                    dataToggle={toggler}
                    toggleState={toggleState}
                />
            </thead>
            <tbody>
                {checkSearch(props.searchVal).map((data, index) => {
                    return(
                        <DataRow
                            key= {index}
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