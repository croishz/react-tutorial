const myLogger = store => next => action =>{
	// console.log(store);
	// console.log(next);
	console.log(`\prev`, store.getState());
	console.log(action);
	const result = next(action);
	console.log(`\next`, store.getState());
	return result;
}

export default myLogger;