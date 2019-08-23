import React, {useReducer, useCallback, useMemo, useRef, useContext, createContext} from 'react';
import {useInputsByReduce} from './useInputs';

const contextValue = createContext("default");

// presentation 
function ListItem({param}){
	const actionDispatch = useContext(contextValue);
	const {username : user, email, active, id} = param;
	const style = {
		color: active && "tan",
	}
	return(
		<div className="item">
			<strong style={style} onClick={()=>actionDispatch({
				type : "TOGGLE_ACCOUNT",
				id, active
			})}>{user}</strong> : <span>{email}</span>
			<button type="button" onClick={()=>actionDispatch({
				type : "REMOVE_ACCOUNT",
				id
			})}>Remove</button>
		</div>
	);
}

function List({accounts}){
	return(
		accounts.map(
			account =>
			<ListItem key={account.id.toString()} param={account}/>
		)
	)
}

function CreateList({accounts}){
	const actionDispatch = useContext(contextValue);
	const [{user, email}, onChange, onReset, onRefresh] = useInputsByReduce({
		user : '',
		email : '',
	});
	const nextId = useRef(accounts.length + 1);
	const onCreate = useCallback(()=>{
		actionDispatch({
			type : "CREATE_ACCOUNT",
			account : {
				id : nextId.current,
				username : user,
				email,
			}
		});
		nextId.current += 1;
		onRefresh();
	},[actionDispatch,  onRefresh, email, user])
	return(
		<div>
			<input type="text" name="user" value={user} onChange={onChange} />
			<input type="text" name="email" value={email} onChange={onChange} />
			<button type="button" onClick={onCreate}>Account Regist</button>
		</div>
	);
} 
/* 
	chapter 22의 예제 https://codesandbox.io/s/begin-react-b7c16?fontsize=14
	보편성을 위해 nextId를 state.accounts의 length로부터 받아오는 것이 문제.
	state도 같이 context value로 받아야 한다.
*/

// state
const initialState = {
	// formValue : {
	// 	user : '',
	// 	email : '',
	// },
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
		// case "CHNAGE_ACCOUNT" :
		// 	return({
		// 		...state, 
		// 		formValue : {
		// 			...state.formValue,
		// 			[action.name] : action.value
		// 		}
		// 	});

		case "CREATE_ACCOUNT" :
			// let [arr1, arr2, ...rest] = action.newAccounts;	새 배열을 참조, 전달받아 사용하나 기존 값을 사용하나 동일. state parameter 자체가 변경값이라서 어느 쪽이든 결과값은 같다.
			// let [arr1, arr2, ...rest] = initialState.accounts; state로 관리되기 이전의 초기값으로 다루므로 length 변화없이 push되는 action.account만 계속 바뀐다. 	
			// let [arr1, arr2, ...rest] = state.accounts;
			console.log(action.account);
			return({
				formValue : initialState.formValue,
				accounts : state.accounts.concat(action.account)	// composite
				// ...state,
				// accounts : [										// first, last insert
				// 	action.account,
				// 	...state.accounts,
				// ]
				// accounts : [										// any position
				// 	arr1, arr2, action.account, ...rest
				// ]
			});

		case "REMOVE_ACCOUNT" :
			if(state.accounts.length > 1 && state.accounts.length !== 0 ){
				return({
					...state,
					accounts : state.accounts.filter( account => account.id !== action.id )
				});
			}else{
				alert("No more Permission to remove");
				return {...state};
			}

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
			throw new Error("non specification action");
	}
}

// container
function CompositionList(){
	const [state, dispatch] = useReducer(reducer, initialState);
	const {accounts} = state;

	const count = useMemo(()=>{
		return(
			accounts.filter( account=> account.active).length
		);
	}, [accounts]);

	return(
		<contextValue.Provider value={dispatch}>
			<CreateList accounts={accounts}/>
			<List accounts={accounts} />
			{count}
		</contextValue.Provider>
	);
}

export default CompositionList;