import {useState, useReducer, useCallback} from 'react';

// useState
function useInputs(initValue){
	const [form, setform] = useState(initValue);
	const onChange = useCallback((event)=>{
		const {name, value} = event.target;
		setform({
			...form, 
			[name] : value
		});
	}, [form]);
	const onReset = useCallback(()=>{
		setform(initValue)
	}, [initValue])
 	return(
		[form, onChange, onReset]
	);
}

// useReducer
function reducer(state, action){
	switch(action.type){
		case "CHNAGE_VALUE" : 
			return ({
				...state,
				[action.name] : action.value
			});
		case "RESET_VALUE" :
			return (state = action.init);
		case "EMPTY_VALUE" :
			// for (const key in state) {
			// 	state[key] = ''
			// }
			// return (state);
			return (
				Object.keys(state).reduce( (acc, current)=>{
					acc[current] = "";
					return acc;
				}, {})
			);
		default :
			throw new Error("non specification action");
	}
}

function useInputsByReduce(init){
	const [form, dispatch] = useReducer(reducer, init);
	const onChange = useCallback(event=>{
		console.log("reducer change");
		const {name, value} = event.target;
		dispatch({
			type : "CHNAGE_VALUE",
			name, 
			value
		});
	}, []);
	const onReset = useCallback(()=>{
		console.log("reducer reset");
		dispatch({
			type : "RESET_VALUE",
			init
		})
	},[init]);
	const onRefresh = useCallback(()=>{
		console.log("reducer refresh");
		dispatch({
			type : "EMPTY_VALUE"
		})
	},[]);

	return [form, onChange, onReset, onRefresh];
}

export {useInputs, useInputsByReduce};