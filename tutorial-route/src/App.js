import React from "react";
import {Link, Route} from "react-router-dom";
import Home from "./Home";
import Profiles from "./Profiles";
import HistoryAPI from "./HistoryAPI";
import WithRouterAPI from "./WithRouterAPI";

function App(){
	return(
		<>
		<div>Route sample</div>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/profiles">Profiles</Link>
			</li>
			<li>
				<Link to="/history">History</Link>
			</li>
		</ul>
		<hr/>
		<Route path="/history" component={HistoryAPI}/>
		<Route path="/" component={Home} exact/>
		<Route path="/profiles" component={Profiles}/>
		</>
	);
} 


export default App;