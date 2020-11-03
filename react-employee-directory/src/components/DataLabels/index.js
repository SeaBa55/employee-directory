import React from "react";
import "./style.css";

function DataLabels(props) {
    let arrow = "";
    if(props.toggleState.toggle===null){    // when toggle is null arrow indicates empty1
        arrow = "";
    }else if(!props.toggleState.toggle) {   // when toggle is false arrow indicates down
        arrow = "👇";
    }else{                                  // when toggle is true arrow indicates up
        arrow = "☝️";
    };

    return( 
        <tr>
            <th scope="col" id={"employee-image"}>
                <div className="btn btn-dark disabled"><span className="row"><div>Image</div></span></div>
            </th>
            {props.labels.map((labelName, index) => {
                return(
                    <th scope="col" key={index}>
                        <button onClick={props.dataToggle} id={labelName} className="btn btn-dark">
                            <span className="row">
                                <div>{labelName}</div>
                                <div className={props.toggleState.toggleBtn===labelName ? "active" : "hide"}>
                                    {arrow}
                                </div>
                            </span>
                        </button>
                    </th>
                )
            })}
        </tr>
    );
}

export default DataLabels;