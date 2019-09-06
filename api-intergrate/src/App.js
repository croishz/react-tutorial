import React, {useState, useEffect} from "react";
import axios from "axios";

// 관리해야 할 상태값 : api 서버에 요청한 데이터, 요청 중인지 전인지 여부, 에러 여부.
function Users(){
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const fetchUsers = async ()=>{
		// setLoading(true);
		console.log(Date.now())
		try {
			// console.log(users);
			// setError(null);
			const response = await axios.get("/users.json");
			setUsers(response.data);
			// console.log(response);
		} catch(event) {
			setError(event);
		}
		
		// setLoading(false);
	}
	useEffect(()=>{
		// setLoading(true);
		fetchUsers();
		// setLoading(false);
	}, []);
	// if (loading) {return console.log(users),<div>로딩 중입니다.</div>}
	if (error) {return console.log(users),console.log(error), <div>"Error code : " + {error.response.status}</div> }
	else if (!users) {return console.log(users),<div>로딩에 실패하였습니다.</div>}
	else {return (
		console.log(users),
		console.log(Date.now()),
		<>
		<ul>
			{users.map(user => <li key={user.id.toString()}>{user.name}, {user.address.suite}</li>)}
		</ul>
		<button type="button" onClick={fetchUsers}>Reload</button>
		</>
	)}
}
function App() {
	return(
		<Users />
	);
}

export default App;

