import {createStore} from 'redux';

const store = createStore();
const loggerMiddleware = store => next => action =>{
	console.log("status now", store.getState());
}