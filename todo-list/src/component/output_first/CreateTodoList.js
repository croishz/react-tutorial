import React, {useState} from "react";

function CreateTodoList({input, changeAction, createAction}) {
	const {todoText: value} = input;
	const [status, setStatus] = useState({
		active: false,
	});
	const toggleAction = () => {
		setStatus({
			active: !status.active,
		});
	};
	return (
		<>
			<div style={{display: status.active ? "block" : "none"}}>
				<input type="text" onChange={changeAction} value={value} />
				<button type="button" onClick={createAction}>
					항목 추가
				</button>
			</div>
			<div>
				<button onClick={toggleAction}>
					항목 추가 인터페이스 불러오기
				</button>
			</div>
		</>
	);
}

export default CreateTodoList;
