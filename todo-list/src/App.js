import React, {useReducer, createContext, useCallback, useRef} from "react";
import CreateTodoList from "./component/CreateTodoList";
import List from "./component/List";
import DateWindow from "./component/DateWindow";

const initialState = {
	input: {
		todoText: "",
	},
	todo: [
		{
			id: 1,
			todoText: "아침 산책",
			check: false,
		},
		{
			id: 2,
			todoText: "개고양이 먹이 주기",
			check: false,
		},
		{
			id: 3,
			todoText: "아침 먹기",
			check: false,
		},
		{
			id: 4,
			todoText: "집문 닫기",
			check: false,
		},
	],
};
function reducer(state, action) {
	switch (action.type) {
		case "CREATE_TODO":
			console.log(action.addTodo);
			return {
				...state,
				todo: state.todo.concat(action.addTodo),
			};
		case "REMOVE_TODO":
			if (state.todo.length === 0) {
				return {
					...state,
					todo: [{id: 1, todoText: "", check: false}],
				};
			} else {
				return {
					...state,
					todo: state.todo.filter(
						todoinfo => todoinfo.id !== action.id,
					),
				};
			}
		case "DONE_TODO":
			console.log(action.id);
			return {
				...state,
				todo: state.todo.map(todoinfo =>
					todoinfo.id === action.id
						? {...todoinfo, check: !todoinfo.check}
						: todoinfo,
				),
			};
		case "CHANGE_VALUE":
			console.log(action.value);
			return {
				...state,
				input: {
					todoText: action.value,
				},
			};
		case "MATCHCASE_TODO":
			console.log(action.input.todoText);
			return {
				state,
			};
		default:
			throw new Error("non specification action");
	}
}
function App() {
	const [{input, todo}, dispatch] = useReducer(reducer, initialState);

	const onChange = useCallback(event => {
		const {value} = event.target;
		dispatch({
			type: "CHANGE_VALUE",
			value,
		});
	}, []);

	const onMatch = useCallback(() => {
		dispatch({
			type: "MATCHCASE_TODO",
			input,
		});
	}, [input]);

	const nextId = useRef(todo.length + 1);
	const onCreate = useCallback(() => {
		const addTodo = {
			id: nextId.current,
			todoText: input.todoText,
			check: false,
		};
		dispatch({
			type: "CREATE_TODO",
			addTodo,
		});
		nextId.current += 1;
	}, [input.todoText]);
	return (
		<useDispatch.Provider value={dispatch}>
			<DateWindow />
			<List todo={todo} />
			<CreateTodoList
				input={input}
				changeAction={onChange}
				createAction={onCreate}
			/>
		</useDispatch.Provider>
	);
}
export const useDispatch = createContext("default");
export default App;
