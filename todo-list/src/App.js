import React from "react";

function App() {
    /*
		state
		날짜 { date }
		할 일 항목 { id, description, check_active, }
		새 항목 생성 { id, description : input value, check_active}
		남아있는 항목의 갯수 {check_active.length}

		component tree
		render
			ㄴ state 관리자
				ㄴ 날짜 정보창
				ㄴ 할 일 항목 
					ㄴ 개개 항목 :: check-toggle list action / remove list action
				ㄴ 남아있는 항목의 갯수
				ㄴ 새 항목 생성 :: change value action / create list action
	*/
    return <div>To do list</div>;
}

export default App;
