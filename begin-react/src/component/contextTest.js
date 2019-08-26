import React, { useState, useContext, createContext } from "react";

const dispatch = createContext("a형 간염");
/*
	context api
	block scope와 
	react props의 cascading process가 step by step으로 진행되서
	property로 사용하는 값을 직접 전달받는 것이 불가능.
	
	scope를 넘기 위해 전역 변수에 전달할 값을 넣고,
	전달받을 위치의 컴포넌트의 block에 전달받을 gate 메모리를 열어서
	값을 직접 전달받는 것이 가능하도록 설계함.
	
	scope, react arrgument 사용 규칙을 깨기 위한 방법론.
	아마 차후에 이 hook은 고도화가 될 것 같다.
*/
function Son() {
    const bodycopy = useContext(dispatch);
    return <div>우리 가족의 유전병은, {bodycopy}</div>;
}
function Mom() {
    return <Son />;
}
function Grandfather() {
    return <Mom />;
}
function GrandMother({ inherit }) {
    const Aunt = (
        <div>Aunt {inherit === false ? "is exception" : "is identical"}</div>
    );
    return Aunt;
}
function Family() {
    const [check, setCheck] = useState(true);
    // console.log(check);
    return (
        <dispatch.Provider value={check ? "주걱턱" : "아무것도 없다."}>
            <Grandfather />
            <GrandMother inherit={!check} />
            <button type="button" onClick={() => setCheck(!check)}>
                Checker
            </button>
        </dispatch.Provider>
    );
}

export default Family;
