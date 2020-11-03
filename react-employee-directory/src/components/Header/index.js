import React from "react";
import "./style.css";

function Header() {
    return( 
        <div className="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Employee Search Directory</h1>
                <p class="lead">Click table column labels to sort. Use dropdown integrated search feature to search by column</p>
            </div>
        </div> 
           
    );
}

export default Header;