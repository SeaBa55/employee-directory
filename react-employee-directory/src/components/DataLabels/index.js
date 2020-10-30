import React from "react";
import "./style.css";

function DataLabels(props) {

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
            <th scope="col">
                Image
            </th>
            <th scope="col">
                <button onClick={props.dataToggle} id="1" className="btn btn-dark">
                    <span className="row">
                        <div>First Name</div>
                        <div className={props.toggleState.toggleBtn==="1" ? "active" : "hide"}>
                            {arrow}
                        </div>
                    </span>
                </button>
            </th>
            <th scope="col">
                <button onClick={props.dataToggle} id="2" className="btn btn-dark">
                    <span className="row">
                        <div>Last Name</div>
                        <div className={props.toggleState.toggleBtn==="2" ? "active" : "hide"}>
                            {arrow}
                        </div>
                    </span>
                </button>
            </th>
        </tr>
    );
}

export default DataLabels;