import React from 'react';
import Logo from "./logo.jpg";

function Nav(){
return(
    <div className="nav">
        <img src={Logo} alt="website logo" />
        <div>
              <ul id="nav">
                <li><a href="#">Homework</a></li>
                <li><a href="#">CMPE</a></li>
                <li><a href="#">281</a></li>
                <li><a href="#">Assign</a></li>
              </ul>
            </div>
    </div>
)
}
export default Nav; 