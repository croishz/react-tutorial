import React, {useReducer, useCallback, useMemo, useRef} from 'react';


// presentation 
function List({param ,  removeAction, toggleAction}){
	const {username : user, email, active, id} = param;
	const style = {
		color: active && "tan",
	}
	return(
		<div className="item">
			<div style={style} onClick={()=>toggleAction(id)}>{user}</div>
			<span>{email}</span>
			<button type="button" onClick={()=>removeAction(id)}>Remove</button>
		</div>
	);
}

function CreateList({user, email, changeAction, createAction}){
	return(
		<div>
			<input type="text" name="user" value={user} onChange={changeAction} />
			<input type="text" name="email" value={email} onChange={changeAction} />
			<button type="button" onClick={createAction}>Account Regist</button>
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
			email : "timeenix@hotmail.com",
			active : true,
		},
		{
			id : "2",
			username : "lesh",
			email : "lesh@gmail.com",
			active : false,
		},
		{
			id : "3",
			username : "the J",
			email : "thejey@naver.com",
			active : false,
		},
		{
			id : "4",
			username : "test user",
			email : "temporary@test.com",
			active : true,
		},
	]
}

function reducer(state, action){
	console.log(action);	// useReducer의 첫번째 인자는 dispatch()가 보낸 parameter를 두번째 인자로 받음.
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
			return({
				formValue : initialState.formValue,
				accounts : state.accounts.concat(action.account)
			});

		case "REMOVE_ACCOUNT" :
			return({
				...state,
				accounts : state.accounts.filter( account => account.id !== action.id )
			});

		case "TOGGLE_ACCOUNT" :
			return({
				...state,
				accounts : state.accounts.map(account =>
					account.id === action.id 
					? {...account, active : !account.active} 
					: account
				)
			});

		default :
			return state;
	}
}

// container
function CompositionList(){
	const [state, dispatch] = useReducer(reducer, initialState);
	const {formValue, accounts} = state;
	const {user, email} = formValue;
	const nextId = useRef(accounts.length + 1);

	const onChange = useCallback((event) => {
		const {name, value} = event.target;
		dispatch({
			type : "CHNAGE_ACCOUNT",
			name, 
			value,
		})
	}, []);

	const onCreate = useCallback(()=>{
		dispatch({
			type : "CREATE_ACCOUNT",
			account : {
				id : nextId.current,
				username : user,
				email,
				active : true
			}
		});
		nextId.current += 1; 
	},[user, email]);

	const onRemove = useCallback( id => {
		dispatch({
			type : 'REMOVE_ACCOUNT',
			id
		});
	});

	const onToggle = useCallback( id => {
		dispatch({
			type : 'TOGGLE_ACCOUNT',
			id
		});
	});

	const count = useMemo(()=>{
		return(
			accounts.filter( account=> account.active).length
		);
	})
	const ListElem = accounts.map(
		account =>
		<List key={account.id} param={account} removeAction={onRemove} toggleAction={onToggle}/>
	);

	return(
		<>
			<CreateList user={user} email={email} onChange={onChange} createAction={onCreate} />
			{ListElem}
			{count}
		</>
	);
}

export default CompositionList;