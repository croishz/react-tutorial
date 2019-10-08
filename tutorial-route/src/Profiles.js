import React from "react";
import Profile from "./Profile";
import {Link, Route} from "react-router-dom";
import useReactRouter from "use-react-router";
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
        {/* <RouteAPI /> */}
        </>
    );
}
function RouteAPI(){
    console.dir(useReactRouter);
    const {match} = useReactRouter;
    console.log(match);
    return null;
}
export default Profiles;