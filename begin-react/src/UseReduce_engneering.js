import React, {useState} from 'react';

/* useReducer 구조 이해
	useState는 값과 값을 변경할 수 있는 함수를 쌍으로 내놓고,
	useReducer는 값과 값을 변경할 함수에 임의의 값들을 전달할 함수를 쌓으로 내놓는다.
	또한 3의 인자로 state의 최초값을 남겨둘 수 있다.

	둘 다 값 변경 함수가 존재하는데, useState는 hook 자체가 변경 함수를 가지고 있고, reducer는 callback으로 이용할 외부 함수를 가진다.

	useReducer(
		callback : function reducer(dispatch( return (state, action) )){ .... return state },
		initialState,
		init
	)
	인 구조.

	그러면 useState의 state 값에 reducer 역할을 할 state를 리턴하는 함수를 선언하고, 그 함수를 호출할 함수로서 두번째 인자를 사용하며, state를 runtime memory 상에 놓아두면 같은 방식으로 돌아가지 않을까...
	하고 짜본 것.
*/
const state = {
	count : 0,
}
const init = JSON.parse(JSON.stringify(state));
console.log(init);
function UseReduceByUseState() {
	const [func, setFunc] = useState(()=>{
		return state;
	})
	const {count} = state;
	const increase = ()=>{
		setFunc(()=>{
			return state.count += 1;	// return의 대상이 state 자체이므로 경로를 타고 정보에 접근해서 변경해야 한다. count += 1로 반환하면 block scope로 인해 업데이트가 불가능. react가 보장해주는 state 객체가 아닌 상태다. props라고 보는 게 맞다.
		})
		console.log("active increase : ", state.count)	// 현재의 업데이트된 state 값이 아닌 직전 값이 찍힐 거라는 예상인데, 초회 호출에선 1, 그 다음부터 1,2,3,4,5....로 찍힌다.
	}
	const decrease = ()=>{
		if (state.count <= 0){
			return false;
		}
		setFunc(()=>{
			return state.count -= 1;
		})
		console.log("active decrease : ", state.count)	// 
	}
	return (
		console.log("업데이트 값 확인 state.count / count : ",state.count, count),
		<>
		<span>count : {count}</span>{" "}
		<button onClick={increase}>increase</button>
		<button onClick={decrease}>decrease</button>
		</>
	);
}

export default UseReduceByUseState;