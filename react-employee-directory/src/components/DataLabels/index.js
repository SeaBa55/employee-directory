import React from "react";
import "./style.css";

function DataLabels(props) {

    // let labels = [];

    // if(props.data[0] !== undefined) {
    //     labels = Object.keys(props.data[0]);
    // }

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
                Image
            </th>
            {/* <th scope="col">
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
            </th> */}

            {/* <th scope="col">
                <button onClick={props.dataToggle} id={labels[3]!==undefined ? labels[3] : ""} className="btn btn-dark">
                    <span className="row">
                        <div>Last Name</div>
                        <div className={props.toggleState.toggleBtn===labels[3] ? "active" : "hide"}>
                            {arrow}
                        </div>
                    </span>
                </button>
            </th> */}
            {props.labels.map((labelName, index) => {
                        return(
                            <th scope="col">
                                <button onClick={props.dataToggle} id={labelName} className="btn btn-dark">
                                    <span className="row">
                                        <div>{labelName}</div>
                                        <div className={props.toggleState.toggleBtn===labelName ? "active" : "hide"}>
                                            {arrow}
                                        </div>
                                    </span>
                                </button>
                            </th>
                            // <Dropdown.Item 
                            //     key={index} 
                            //     onClick={props.setSearch} 
                            //     id={labelName}
                            // >
                            //     {labelName}
                            //     {/* labelName.split("N"); */}
                            // </Dropdown.Item>
                        )
                    })}
        </tr>
    );
}

export default DataLabels;