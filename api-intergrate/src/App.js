import React, {useReducer, useEffect, useRef} from "react";
import axios from "axios";

// 관리해야 할 상태값 : api 서버에 요청한 데이터, 요청 중인지 전인지 여부, 에러 여부.
function reducer(state, action){
	switch(action.type){
		case "RELOADING" : 
			return {
				...state,
				loading : true,
				data : null
			}
		case "LOADING" :
			return {
				...state,
				loading : false
			};
		case "SUCCESS" :
			return {
				loading : false, 
				data : action.response.data,
				error : null
			};
		case "ERROR" :
			console.log("error action");
			return {
				...state,
				error : action.event
			};
		default : 
			throw new Error('unhandled action : ',  action);
	}
}
function Users(){
	// const [users, setUsers] = useState(null);
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(null);
	const [info, dispatch] = useReducer(reducer, {
		loading : true,
		data : null,
		error : null
	});
	const {data : users, loading, error} = info
	const fetchUsers = async ()=>{
		console.log(Date.now());
		// if (loading === false){dispatch({
		// 	type : "RELOADING"
		// })};
		try {
			const response = await axios.get("https://jsonplaceholder.typicode.com/users");
			dispatch({
				type : "SUCCESS",
				response
			})
		} catch(event) {
			console.dir(event);
			dispatch({
				type : "ERROR",
				event
			})
		}
		// dispatch({
		// 	type : "LOADING"
		// });
	}
	const firstLoad = useRef(true);
	useEffect((opt = firstLoad)=>{
		if(opt){return null};
		fetchUsers();
	}, []);

	// Load or Reload
	// if (loading) {return console.log(users, loading),<div>로딩 중입니다.</div>}

	// Final massege
	// if (error !== null) {return console.log(users, error), <div>"Error code : " + {error.response.status}</div> }

	// success 
	return (
		console.log(Date.now()),
		console.log(users),
		<>
		{!users ? 
			<div>데이터가 존재하지 않습니다.</div> :
			<ul>{users.map(user => <li key={user.id.toString()}>{user.name}, {user.address.suite}</li>)}</ul>
		}
		<button type="button" onClick={fetchUsers}>Reload</button>
		</>
	)
}
function App() {
	return(
		<Users />
	);
}

export default App;

