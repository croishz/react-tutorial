import {createStore} from 'redux';

// console.log("ready");

const initialState = {
    counter: 0,
    text: '',
    list: []
}

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () =>({
    type: INCREASE,
})
const decrease = () =>({
    type: DECREASE,
})
const changeText = text =>({
    type: CHANGE_TEXT,
})
const addToCart = item =>({
    type: ADD_TO_LIST,
})

function reducer(state = initialState, action){
    switch(action.type){
        case INCREASE :
            return({
                ...state,
                counter:state.counter += 1
            });
        case DECREASE :
            return({
                ...state,
                counter:state.counter -= 1
            });
        case CHANGE_TEXT :
            return({
                ...state,
                text:state.text
            });
        case ADD_TO_LIST :
            return({
                ...state,
                list:state.list.concat(action.item)
            });
        default:
            return state;
    }
}
const store = createStore(reducer);
console.log(store.getState());

const listner = ()=>{
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listner);
console.log(unsubscribe);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('hello'));
store.dispatch(addToCart({id:1, text : 'chunk'}));
store.dispatch(addToCart({id:2, text : 'shrink'}));

window.store = store;
window.unsubscribe = unsubscribe;