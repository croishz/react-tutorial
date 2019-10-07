import React from "react";
import Profile from "./Profile";
import {Link, Route} from "react-router-dom";

function Profiles(){
    return(
        <>
        <Route path="/profiles" render={()=><span>선택해주세요.</span>} exact/>
        <h3>Your Challengers</h3>            
        <ul>
            <li>
                <Link to="/profiles/daigo">Daigo</Link>
            </li>
            <li>
                <Link to="/profiles/ethnim">Ethnim</Link>
            </li>
            <li>
                <Link to="/profiles/all">All</Link>
            </li>
        </ul>
        <Route path="/profiles/:username" component={Profile}/>
        </>
    );
} 

export default Profiles;