import React from "react";
import {Route, Link} from "react-router-dom";
import Home from "./Home";
import {Profiles} from "./Profile";

function Navigation(){
	return(
		<ul className="Gnb">
			<li><Link to="/">홈</Link></li>
			<li><Link to="/profile">프로필</Link></li>
		</ul>
	);
}
function App(){
	return(
	<>
		<Navigation />
		<hr />
		<Route path="/" component={Home} exact /> {/*exact : path exactly matched */}
		{/* <Route path="/Profile/:username" component={{Profiles, Profile}} exact />	 */}
		{/* url/[:key], Possible attach parameter by key */}
		<Route path="/profile" component={Profiles} exact />
	</>
	);
} 

export default App;
