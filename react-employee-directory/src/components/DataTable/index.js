import React, {useState, useEffect} from "react";
import "./style.css";
import DataRow from "../DataRow/index";
import DataLabels from "../DataLabels";
import API from "../../utils/API";

function DataTable() {
    // const columns = [
    //     "image",
    //     "firstName",
    //     "lastName"
    // ];

    const [employees, setEmployeesState] = useState([]);
    const [toggleState, setToggleState] = useState({  
        toggle: null,
        toggleBtn: null 
    });

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
            setEmployeesState(tmp);
        });
    }, []);

    // const toggler = (e) => {
    //     togglers(e)
    //     .then(() => {
    //         toggleSort(e);
    //     })
    // };

    const toggler = (e) => {
        const btn = e.currentTarget.id;

        setToggleState((prevState)=> {  
            const colChange = (btn===prevState.toggleBtn) ? false : true;
            return { ...prevState, 
                toggle: setToggle(prevState,colChange),
                toggleBtn: btn
            }
        })

        const setToggle = (data,reset) => {
            // init toggle state handling
            if(data.toggle===null || reset) {
                return true;
            }else{
                // toggle the toggle state (results in up or down arrow rendering and sort method change)
                return !data.toggle
            };
        };
        toggleSort(btn)
    };

    const toggleSort = (btn) => {
        // const btn = e.currentTarget.id;
        const arr = employees;

        let s = 1;
        if(!toggleState.toggle) { 
            s = -1; 
        };

        // const col = columns.find((feild, index) => {
        //     return index===toggleState.toggleBtn; 
             
        // });

        arr.sort((a, b) => {
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
                {employees.map((data, index) => {
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