import React from "react";

function DataRow(props) {
  return (
    <tr>
        <td>
            <img src={props.image} className="img-fluid img-thumbnail" alt="profile"/>
        </td>
        
        <td>
            {props.firstName}
        </td>

        <td>
            {props.lastName}
        </td>
    </tr>
  );
}

export default DataRow;