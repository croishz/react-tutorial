import React, {useState, useReducer, createContext, useContext} from "react";
// css
import styles, {css, keyframes, createGlobalStyle} from "styled-components";
// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);	// module import 는 code로 인식할 수 있는 라인 이하에서 사용 못함. 10행에 import 선언 시 error.

// common style
const GlobalStyle = createGlobalStyle`
	body {font-size:inherit;}
`;
const elemDisapper = css`
	position:absolute;
	width:1px;
	height:1px;
	clip:rect(0,0,0,0);
	opacity:0;
	color:transparent;
`
const ListItemStyle = css`
	& + & {margin-top : 20px;}
	input[type="checkbox"]{
		${elemDisapper};
	}
	label {
		margin-left:0.875rem;
	}
	label, svg {
		cursor:pointer;
	}
`
const ListWrap = styles.ul`
	background-color:tan;
	height: auto;
	margin:0 auto;
	padding:20px 0 20px 35px;
	font-size:20px;
	line-height:1.5rem;
	color:#fff;
	li {
		list-style : none;
		${ListItemStyle};
	}
`;

// view component
function List({contents}){
	let screenWidth = window.innerWidth;
	let resizeContainer = Math.ceil(screenWidth/2) * 1 + "px";
	const [containerWidth, setContainerWidth] = useState(resizeContainer);
	const fitWidth = () => {
		window.addEventListener("resize", ()=>{
			screenWidth = window.innerWidth;
			setContainerWidth(
				( Math.ceil(screenWidth/2) * 1 + "px" )
			);
			console.log(resizeContainer);
		}, false);
	}
	const ListContainer = styles(ListWrap)`
		width:${containerWidth};
	`
	return(
		<ListContainer onLoad={fitWidth}>	{/*onload 안됨, onresize 객체가 없다. state에서 푸시하는 값으로 css를 계속 갱신할만한 방법이 없을까.... */}
			{contents.map(content=> <ListItem key={content.id} param={content} elem="li"/>)}
		</ListContainer>
	);
}
function ListItem({param, elem}){
	const dispatch = useContext(useCheckToggle);
	const {id, text, check} = param;
	const TagName = elem;
	return(
		<TagName>
			<input type="checkbox" id={"checkbox" + id} checked={check} onChange={() => dispatch({
				type : "CHECKED_TOGGLE",
				id
			})}/>
			<FontAwesomeIcon icon={check ? ["fas", "check-square"] : ["far", "square"]}/>
			<label htmlFor={"checkbox" + id}>{text}</label>
		</TagName>
	);
}

// context component
const useCheckToggle = createContext("defaultProps");

function reducer(state, action){
	switch(action.type){
		case "CHECKED_TOGGLE" :
			// console.log("toggle");
			return({
				...state,
				information : state.information.map( (info) => info.id === action.id ? 
					{ ...info, check : !info.check} :
					info
				)
			}); 
		default :
			throw new Error('unhandled action');
	}
}

// state 
const initialState = {
	information : [
		{
			id : 1,
			text : "어제의 할 일",
			check : false
		},
		{
			id : 2,
			text : "오늘의 할 일",
			check : false
		},
		{
			id : 3,
			text : "내일의 할 일",
			check : false
		},
		{
			id : 4,
			text : "올해의 할 일",
			check : false
		}
	]
}

// state component
function StyledComponents() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {information} = state;
	return(
		<useCheckToggle.Provider value={dispatch}>
			<GlobalStyle />
			<List contents={information}/>
		</useCheckToggle.Provider>
	);
}

export default StyledComponents;
