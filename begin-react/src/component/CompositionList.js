import React, {useReducer} from 'react';


// presentation 
function List({param ,  removeAction}){
	const {username : user, email} = param;
	return(
		<div className="item">
			<span>{user}</span>
			<span>{email}</span>
			<button type="button" onClick={removeAction}>Remove</button>
		</div>
	);
}

function CreateList({user, email}){
	return(
		<div>
			<input type="text" name="user" value={user}/>
			<input type="text" name="email" value={email}/>
			<button type="button">Account Regist</button>
		</div>
	);
}

function reducer(state, action){
	console.log(state);
	switch(action.type){
		case 'REMOVE' :
			console.log(
				action.id
			);
			return({
				...state,
				accounts : state.accounts.filter( account => account.id !== action.id)
			});

		default :
			// return false;
			return new Error('unhandled errors');
	}
}

const initialState = {
	formValue : {
		user : '',
		email : '',
	},
	accounts : [
		{
			id : "1",
			username : "timeenix",
			email : "timeenix@hotmail.com"
		},
		{
			id : "2",
			username : "lesh",
			email : "lesh@gmail.com"
		},
		{
			id : "3",
			username : "the J",
			email : "thejey@naver.com"
		},
		{
			id : "4",
			username : "test user",
			email : "temporary@test.com"
		},
	]
}

// container
function CompositionList(){
	const [state, dispatch] = useReducer(reducer, initialState);
	const {formValue, accounts} = state;
	const {user, email} = formValue;
	console.log(accounts);
	const onRemove = ()=>{
		dispatch({
			type : 'REMOVE'
		});
	};
	const ListElem = accounts.map(
		account =>
		<List key={account.id} param={account} removeAction={onRemove}/>
	);
	return(
		<>
			<CreateList user={user} email={email}/>
			{ListElem}
		</>
	);
}

export default CompositionList;