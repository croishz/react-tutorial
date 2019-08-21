import React, {useState, useRef} from 'react';

function CreateBrick({username, address, changeEvent, createEvent, nameInput}){
	return (
		<div>
			<input type="text" placeholder="ex. Sarah" name="username" value={username} onChange={changeEvent} ref={nameInput}/>
			<input type="text" placeholder="ex. nth Avenue at nth St" name="address" value={address} onChange={changeEvent}/>
			<button type="button" onClick={createEvent}>Add</button>
		</div>
	);
}

function BrickItem({param, removeEvent, toggleEvent}){
	const {id, username : name, address, status} = param;

	const itemStyle = {
		lineHeight : 1.5,
		marginBottom : 14
	}
	
	const btnStyle = {
		background : "none",
		border : "1px solid currentColor",
		fontSize : 15,
		color:"inherit",
		padding : "4px 12px",
		marginLeft : 10,
	}
	
	const uiElemStyle = {
		cursor : "pointer"
	}
	const activeStyle = {
		color : status === false && "crimson"
	}
	return(
		<li data-index={id} style={itemStyle}>
			<strong onClick={()=>toggleEvent(id)} style={Object.assign(activeStyle, uiElemStyle)}>{name}</strong>
			{" leave in "}
			<span>"{address}"</span>
			<button type="button" onClick={()=>removeEvent(id)} style={Object.assign(btnStyle, uiElemStyle)}>Delete</button>
		</li>
	)
}

function ListBrick({userInfo, onRemove, onActive}){
	return(
		<ul >
			{userInfo.map(info => 
				<BrickItem 
					key={info.id.toString()} 
					param={info}
					removeEvent = {onRemove}
					toggleEvent = {onActive}
				/>
			)}	
		</ul>
	)
}

function ListBricks(){
	const [state, setUpdate] = useState({	// useState는 scope 외부의 값을 참조시킬 수 없다. 
		inputs : {
			username : '',
			address : ''
		},
		information : [
			{
				id : 1,
				username : "Corina",
				address : "West 9th Avenue at 24th streets",
				status : true 	
			},
			{
				id : 2,
				username : "Kevin",
				address : "East 5th Avenue at 10th streets",
				status : false 	
			},
			{
				id : 3,
				username : "Timothy",
				address : "West 12th Avenue at 1st streets",
				status : false 	
			},
			{
				id : 4,
				username : "Sarapova",
				address : "West 12th Avenue at 2nd streets",
				status : true 	
			},
		]
	});
	const {inputs, information : userInfo} = state;
	const {username, address} = inputs;
	// console.log("state : ", state);	

	const onChange = (event)=>{
		const {name, value} = event.target;
		setUpdate({
			...state,
			inputs : {
				...inputs,
				[name] : value
			}
		})
	}

	const nextId = useRef(userInfo.length + 1);
	const nameInput = useRef();
	const onCreate = ()=>{
		const newCitizen = {
			id : nextId.current,
			username,
			address
		};
		const [arr1, arr2, ...rest] = userInfo;
		setUpdate({
			...state,
			inputs : {
				...inputs,
				username : '',
				address : ''
			},
			information : [	// key name 주의
				// ...userInfo,
				// newCitizen
				arr1, arr2, newCitizen, ...rest
			]
		});
		// console.log(newCitizen, state);
		nextId.current += 1;
		nameInput.current.focus();
	}
	const onRemove = (id)=>{
		// console.log("id : ", id);
		setUpdate({
			...state,
			information : userInfo.filter( info => info.id !== id )
		})
		// nextId.current -= 1;
	}
	const onActive = (id)=>{
		console.log("id : ", id);
		setUpdate(
			userInfo.map(
				info => info.id === id ?
				{...state, 
					information : [
						...userInfo, 
						userInfo[info.id - 1].status = !info.status
					]
				} :
				info,
				console.log(state)
			)
		)
	}
	const blockStyle = {
		backgroundColor:"lightcoral", 
		color:"#fefefe",
		padding: "20px 0 20px 45px"
	}
	return(
		<div style={blockStyle}>
			<CreateBrick 
				username={username} 
				address={address} 
				changeEvent={onChange} 
				createEvent={onCreate}
				nameInput={nameInput}
			/>
			<ListBrick userInfo={userInfo} onRemove={onRemove} onActive={onActive}/>
		</div>
	);
}


export default ListBricks;