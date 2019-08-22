import React, {useState, useMemo, useRef} from 'react';

const itemStyle = {
	lineHeight : 1.5,
	marginBottom : 14,
	listStyleType : "square"
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

function CreateBrick({username, address, changeEvent, createEvent, nameInput}){
	const btnStyleClone = JSON.parse(JSON.stringify(btnStyle));
	return (
		<div>
			<input type="text" placeholder="ex. Sarah" name="username" value={username} onChange={changeEvent} ref={nameInput}/>
			<input type="text" placeholder="ex. nth Avenue at nth St" name="address" value={address} onChange={changeEvent}/>
			<button type="button" onClick={createEvent} style={Object.assign(btnStyleClone, uiElemStyle)}>Add</button>
		</div>
	);
}

function BrickItem({param, removeEvent, toggleEvent}){
	const {id, username : name, address, leave} = param;
	const activeStyle = {
		color : leave === true && "steelblue"
	}
	const btnStyleClone = JSON.parse(JSON.stringify(btnStyle));
	return(
		<li data-index={id} style={itemStyle}>
			<strong onClick={()=>toggleEvent(id)} style={Object.assign(activeStyle, uiElemStyle)}>{name}</strong>
			{" leave in "}
			<span>"{address}"</span>
			<button type="button" onClick={()=>removeEvent(id)} style={Object.assign(btnStyleClone, uiElemStyle)}>Delete</button>
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
function Count({count}){
	return(
		<span>{count}</span>
	);
}

const states = {
	inputs : {
		username : '',
		address : ''
	},
	information : [
		{
			id : 1,
			username : "Corina",
			address : "West 9th Avenue at 24th streets",
			leave : true 	
		},
		{
			id : 2,
			username : "Kevin",
			address : "East 5th Avenue at 10th streets",
			leave : false 	
		},
		{
			id : 3,
			username : "Timothy",
			address : "West 12th Avenue at 1st streets",
			leave : false 	
		},
		{
			id : 4,
			username : "Sarapova",
			address : "West 12th Avenue at 2nd streets",
			leave : true 	
		},
	]
}

function ListBricks(){
	const [state, setUpdate] = useState(states);
	const {inputs, information : userInfo} = state;
	const {username, address} = inputs;

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
			address,
			leave : true
		};
		const [arr1, arr2, ...rest] = userInfo;
		setUpdate({
			...state,
			inputs : states.inputs,
			information : [	// key name 주의
				// ...userInfo,
				// newCitizen
				arr1, arr2, newCitizen, ...rest
			]
		});
		// console.log("newCitizen : ", newCitizen);
		// console.log("state : ", state);
		nextId.current += 1;
		nameInput.current.focus();
	}
	const onRemove = (id)=>{
		// console.log("id : ", id);
		setUpdate({
			...state,
			information : userInfo.filter( info => info.id !== id )
		});
		// nextId.current -= 1;
	}
	const onActive = (id)=>{
		// console.log("id : ", id);
		setUpdate(
			{...state,
			information : userInfo.map(
				info => info.id === id ?
				(
				// console.log("match"),
				{...info, leave:!info.leave}) :
				(
				// console.log("unmatch"),
				info
				)
			)
		});
	}

	const activebrickItemCount = useMemo(()=> userInfo.filter(info => info.leave).length, [userInfo]);

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
			<Count count={activebrickItemCount}/>
		</div>
	);
}


export default ListBricks;