import React, {useContext} from "react";
import {useDispatch} from "../App";

function List({todo}) {
	return (
		<>
			<LeftTodo param={todo} />
			{todo.map(todoInfo => (
				<TodoItem key={todoInfo.id.toString()} param={todoInfo} />
			))}
		</>
	);
}
function LeftTodo({param}) {
	return (
		<div className="left_todo">
			<span>
				남아있는 할 일 :{" "}
				{param.filter(todoinfo => todoinfo.check).length}
			</span>
		</div>
	);
}
function TodoItem({param, SVGIcon}) {
	const dispatch = useContext(useDispatch);
	const {id, todoText} = param;
	const labelSync = "todo" + id;
	return (
		<div>
			<input
				type="checkbox"
				id={labelSync}
				className="btn done_todo"
				onClick={() =>
					dispatch({
						type: "DONE_TODO",
						id,
					})
				}
			/>
			<label for={labelSync} className="todo_text">
				{todoText}
			</label>
			<button
				type="button"
				className="btn remove_todo"
				onClick={() =>
					dispatch({
						type: "REMOVE_TODO",
						id,
					})
				}
			>
				{SVGIcon}
				<span>항목 제거</span>
			</button>
		</div>
	);
}

export default List;
