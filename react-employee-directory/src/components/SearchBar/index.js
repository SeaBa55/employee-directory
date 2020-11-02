import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "./style.css";

function SearchBar(props) {
    return( 
        <div className="input-group mb-3 mt-3">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.searchVal.filter}
                </Dropdown.Toggle>

                {/* <Dropdown.Menu>
                    <Dropdown.Item onClick={props.setSearch} id={"firstName"}>First Name</Dropdown.Item>
                    <Dropdown.Item onClick={props.setSearch} id={"lastName"}>Last Name</Dropdown.Item>
                </Dropdown.Menu> */}

                <Dropdown.Menu>
                    {props.colLabels.map((labelName, index) => {
                        return(
                            <Dropdown.Item 
                                key={index} 
                                onClick={props.setSearch} 
                                id={labelName}
                            >
                                {labelName}
                                {/* labelName.split("N"); */}
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <input 
                type="text" 
                className="form-control" 
                placeholder="search name"
                value={props.searchVal.searchTerm}
                onChange={props.setSearch} 
                aria-label="Example text with button addon" 
                aria-describedby="button-addon1"
            />
        </div>
    );
}

export default SearchBar;