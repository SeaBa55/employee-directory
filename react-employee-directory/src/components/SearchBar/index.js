import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "./style.css";

function SearchBar(props) {
    return( 
        <div className="input-group mb-3 mt-3">
            {/* <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
            </div> */}
            {/* <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle" role="button" id="button-addon1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Search
                </a>
                <div className="dropdown-menu" aria-labelledby="button-addon1">
                    {options.map((option) => {
                        <div className='option'>{option.name}</div>
                    })}
                </div>
            </div> */}

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.searchVal.filter}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={props.setSearch} id={"firstName"}>First Name</Dropdown.Item>
                    <Dropdown.Item onClick={props.setSearch} id={"lastName"}>Last Name</Dropdown.Item>
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