const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DECREASE});

// thunk creator
export const increaseAsync = () => 
// thunk function
(dispatch)=>{
	setTimeout(() => {
		dispatch(increase());
	}, 1000);
}
// thunk creator
export const decreaseAsync = () => 
// thunk function
(dispatch)=>{
	setTimeout(() => {
		dispatch(decrease());
	}, 1000);
}
const initialState = 0;

export default function(state = 0, action){
	console.log(action);
	switch(action.type){
		case "INCREASE" : 
			return state + 1;
		case "DECREASE" : 
			return state - 1;
		default :
		return state;
	}
}
