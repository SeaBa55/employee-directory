import React from "react";

function DataRow(props) {
  return (
    <tr>
        <td>
            <img src={props.data.image} className="img-fluid img-thumbnail" alt="profile"/>
        </td>
        {props.labels.map((data, index) => {
          return(
            <td key={index}>
                {props.data[Object.keys(props.data).filter(key => key===data)]}
            </td>
          )
        })}
    </tr>
  );
}

export default DataRow;