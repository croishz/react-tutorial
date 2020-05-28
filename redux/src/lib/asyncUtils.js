export const reduceUtils = {
	initial: (data = null) => ({
		data,
		loading:false,
		error:null
	}),
	loading: (prevState = null) =>({
		data:prevState,
		loading:true,
		error:null
	}),
	success: (data) =>({
		data,
		loading:false,
		error:null
	}),
	error: (error) =>({
		data: null,
		loading:false,
		error
	})
}

export const createPromiseThunk = (type, promiseCreator) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
	
	const thunkCreator = parameter => async dispatch => {
		// thunk creator
		dispatch({type});
		// thunk function
		try {
			const payload = await promiseCreator(parameter);
			dispatch({
				type:SUCCESS,
				payload
			});
		} catch (error) {
			dispatch({
				type:ERROR,
				payload:error,
				error:true
			})
		}
	}
	return thunkCreator;
}

export const handleAsyncActions = (type, key) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
	console.log(key);
	return (state, action) => {
		switch(action.type){
			case `${type}`:
				return {
					...state,
					[key]:reduceUtils.loading()
				}
			case SUCCESS:
				return {
					...state,
					[key]:reduceUtils.success(action.payload)
				}
			case ERROR:
				return {
					...state,
					[key]:reduceUtils.error(action.payload)
				}
			default:
				return state;
		}
	}
}