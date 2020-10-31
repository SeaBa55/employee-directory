import React from "react";
import "./style.css";

function DataLabels(props) {

    let labels = [];

    if(props.data[0] !== undefined) {
        labels = Object.keys(props.data[0]);
    }

    let arrow = "";
    
    // when toggle is null arrow indicates empty1
    if(props.toggleState.toggle===null){
        arrow = "";
    // when toggle is false arrow indicates down
    }else if(!props.toggleState.toggle) {
        arrow = "👇";
    // when toggle is true arrow indicates up
    }else{
        arrow = "☝️";
    };

    return( 
        <tr>
            <th scope="col" id={labels[1]!==undefined ? labels[1] : ""}>
                Image
            </th>
            <th scope="col">
                <button onClick={props.dataToggle} id={labels[2]!==undefined ? labels[2] : ""} className="btn btn-dark">
                    <span className="row">
                        <div>First Name</div>
                        <div className={props.toggleState.toggleBtn===labels[2] ? "active" : "hide"}>
                            {arrow}
                        </div>
                    </span>
                </button>
            </th>
            <th scope="col">
                <button onClick={props.dataToggle} id={labels[3]!==undefined ? labels[3] : ""} className="btn btn-dark">
                    <span className="row">
                        <div>Last Name</div>
                        <div className={props.toggleState.toggleBtn===labels[3] ? "active" : "hide"}>
                            {arrow}
                        </div>
                    </span>
                </button>
            </th>
        </tr>
    );
}

export default DataLabels;