import React from "react";
import {Link, Route} from "react-router-dom";
import Home from "./Home";
import Profiles from "./Profiles";

function App(){
	return(
		<>
		<span>Route sample</span>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/profiles">Profiles</Link>
			</li>
		</ul>
		<hr/>
		<Route path="/" component={Home} exact/>
		<Route path="/profiles" component={Profiles}/>
		</>
	);
} 


export default App;