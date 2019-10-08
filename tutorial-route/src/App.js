import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Profiles from "./Profiles";
import HistoryAPI from "./HistoryAPI";

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
		<Switch>
			<Route path="/history" component={HistoryAPI}/>
			<Route path="/" component={Home} exact/>
			<Route path="/profiles" component={Profiles}/>
			<Route render={({location})=>
				<>
					<span>이 페이지는 존재하지 않습니다.</span>
					<div>{location.pathname}</div>
				</>
			}/>
		</Switch>
		</>
	);
} 


export default App;