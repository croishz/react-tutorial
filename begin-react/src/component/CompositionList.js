import React, {useReducer, useCallback, useMemo} from 'react';


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

function CreateList({user, email, onChange}){
	return(
		<div>
			<input type="text" name="user" value={user} onChange={onChange} />
			<input type="text" name="email" value={email}onChange={onChange} />
			<button type="button">Account Regist</button>
		</div>
	);
}

// state
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

function reducer(state, action){
	switch(action.type){
		case "CHNAGE_ACCOUNT" :
			return({
				...state, 
				formValue : {
					...state.formValue,
					[action.name] : action.value
				}
			});
		case "CREATE_ACCOUNT" :
			return([
				
			]);
		default :
			return state;
			
	}
}

// container
function CompositionList(){
	const [state, dispatch] = useReducer(reducer, initialState);
	const {formValue, accounts} = state;
	const {user, email} = formValue;

	const onChange = useCallback((event) => {
		const {name, value} = event.target;
		dispatch({
			type : "CHNAGE_ACCOUNT",
			name, 
			value,
		}, [name, value])
	})
	const onCreate = useCallback(()=>{
		const [arr1, arr2, ...rest] = state.accounts
		dispatch({
			type : "CREATE_ACCOUNT",
			account : {
				id : 1,
				username,
				email,
			},
			arr1, arr2, rest
		})
	},[username, email, arr1, arr2, rest])
	const onRemove = useCallback( id=>{
		dispatch({
			type : 'REMOVE_ACCOUNT'
		});
	}, []);

	const ListElem = accounts.map(
		account =>
		<List key={account.id} param={account} removeAction={onRemove}/>
	);

	return(
		<>
			<CreateList user={user} email={email} onChange={onChange}/>
			{ListElem}
		</>
	);
}

export default CompositionList;