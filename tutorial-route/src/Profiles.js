import React from "react";
import {Route, NavLink} from "react-router-dom";
import Profile from "./Profile";
import RouterHooks from "./RouterHooks";

function Profiles(){
    return(
        <>
        <Route path="/profiles" render={()=><span>선택해주세요.</span>} exact/>
        <h3>Your Challengers</h3>            
        <ul>
            <li>
                <NavLink 
                    to="/profiles/daigo" exact
                    activeStyle={{backgroundColor:"tan"}}
                    activeClassName={"active"}
                    // isActive={({match})=>{
                    //     return (match.params.check = "check");
                    // }}
                >
                Daigo
                </NavLink>
            </li>
            <li>
                <NavLink to="/profiles/ethnim">Ethnim</NavLink>
            </li>
            <li>
                <NavLink to="/profiles/all">All</NavLink>
            </li>
        </ul>
        <Route path="/profiles/:username" component={Profile}/>
        <RouterHooks />
        {/* <RouteAPI /> */}
        </>
    );
}

export default Profiles;