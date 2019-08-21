import React, {useReducer, useCallback, useMemo, useRef} from 'react';


// presentation 
function List({param ,  removeAction, toggleAction}){
	const {username : user, email, active, id} = param;
	const style = {
		color: active && "tan",
	}
	return(
		<div className="item">
			<strong style={style} onClick={()=>toggleAction(id, active)}>{user}</strong> : <span>{email}</span> <button type="button" onClick={()=>removeAction(id)}>Remove</button>
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
			id : 1,
			username : "timeenix",
			email : "timeenix@hotmail.com",
			active : true,
		},
		{
			id : 2,
			username : "lesh",
			email : "lesh@gmail.com",
			active : false,
		},
		{
			id : 3,
			username : "the J",
			email : "thejey@naver.com",
			active : false,
		},
		{
			id : 4,
			username : "test user",
			email : "temporary@test.com",
			active : true,
		},
	]
}

function reducer(state, action){
	// console.log(action);	// useReducer의 첫번째 인자는 dispatch()가 보낸 parameter를 두번째 인자로 받음.
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
			// let [arr1, arr2, ...rest] = action.newAccounts;	새 배열을 참조, 전달받아 사용하나 기존 값을 사용하나 동일. state parameter 자체가 변경값이라서 어느 쪽이든 결과값은 같다.
			// let [arr1, arr2, ...rest] = initialState.accounts; state로 관리되기 이전의 초기값으로 다루므로 length 변화없이 push되는 action.account만 계속 바뀐다. 	
			let [arr1, arr2, ...rest] = state.accounts;
			return({
				formValue : initialState.formValue,
				// accounts : state.accounts.concat(action.account)	// composite
				// accounts : [										// first, last insert
				// 	action.account,
				// 	...state.accounts,
				// ]
				accounts : [										// any position
					arr1, arr2, action.account, ...rest
				]
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
			accounts, 
			// newAccounts : [...accounts],
			account : {
				id : nextId.current,
				username : user,
				email,
				// active : true
			}
		});
		nextId.current += 1; 
	},[user, email, accounts]);

	const onRemove = useCallback( id => {
		dispatch({
			type : 'REMOVE_ACCOUNT',
			id
		});
	}, []);

	const onToggle = useCallback( (id, active) => {
		console.log(active);
		dispatch({
			type : 'TOGGLE_ACCOUNT',
			id
		});
	}, []);

	const count = useMemo(()=>{
		return(
			accounts.filter( account=> account.active).length
		);
	}, [accounts]);

	const ListElem = accounts.map(
		account =>
		<List key={account.id.toString()} param={account} removeAction={onRemove} toggleAction={onToggle}/>
	);

	return(
		<>
			<CreateList user={user} email={email} changeAction={onChange} createAction={onCreate} />
			{ListElem}
			{count}
		</>
	);
}

export default CompositionList;