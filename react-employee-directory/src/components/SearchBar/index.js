import React from "react";
import "./style.css";

function SearchBar() {
    return( 
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
            </div>
            <input type="text" className="form-control" placeholder="search name" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>
    );
}

export default SearchBar;