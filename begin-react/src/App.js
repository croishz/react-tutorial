import React, { useState, useRef, useMemo } from "react";
import CompositionList from "./component/CompositionList";
import ListBricks from "./component/ListBricks";
import Family from "./component/contextTest";

function Hello({ name, color, opt }) {
    // console.log(name, color);
    return (
        <h1 style={{ color }} className="head">
            {opt && <span>*</span>}
            <span className="option">{opt ? "necessary : " : null}</span>
            {undefined}
            {false}
            {null}
            {/* {0} false로 변환되는 datatype 중 number만 예외 */}
            {name}
        </h1>
    );
}
Hello.defaultProps = {
    name: "nothing",
};

function Wrap({ children }) {
    // const style = {
    // 	border: "2px solid black",
    // 	padding: 12,
    // 	lineHeight: "1em"
    // }
    // return <div style={style}>{children}</div>
    return React.createElement(
        "div",
        {
            style: {
                border: "2px solid steelblue",
                padding: 12,
                lineHeight: "1.5em",
            },
        },
        children, // use by unbrakets
    );
}

function Counter() {
    const [number, setNumber] = useState(0); // useState의 인자가 초기값, 배열의 0번 인자가 초기값을 받는 변수, 1번 인자가 setter 함수
    const increaseCount = () => {
        setNumber(prevNumber => prevNumber + 1);
    };
    const decreaseCount = () => {
        setNumber(prevNumber => prevNumber - 1);
    };
    return (
        <fieldset>
            <legend>value : {number}</legend>
            <div>
                <button onClick={increaseCount}>+</button>
                <button onClick={decreaseCount}>-</button>
            </div>
        </fieldset>
    );
}

function TextInput() {
    const style = {
        marginBottom: 30,
    };
    const [text, setText] = useState("");
    const transport = event => {
        // console.log(event.currentTarget, event.target);
        setText(event.target.value);
    };
    const Initialize = event => {
        setText(text => "");
        // console.log(event.currentTarget, event.target);
        // event.target.previousElementSibling.value = '';
        // setText('');
    };
    return (
        <div style={style}>
            <div>
                <input type="text" onChange={transport} value={text} />
                <button type="button" onClick={Initialize}>
                    initialize
                </button>
            </div>
            <span>value : {text}</span>
        </div>
    );
}

// function UIElemInterface(){}

function MultiInput() {
    const [UIElem, setUpdate] = useState({
        name: "",
        nickname: "",
    });
    const { name, nickname } = UIElem;

    const onchange = e => {
        const { name, value } = e.target;
        // const nextAttr = {...UIElem};
        // nextAttr[name] = value;

        const nextAttr = {
            ...UIElem,
            [name]: value,
        };
        setUpdate(nextAttr);
    };

    const nameInput = useRef();

    const onReset = () => {
        setUpdate({
            name: "",
            nickname: "",
        });
        nameInput.current.focus();
    };

    return (
        <fieldset>
            <legend>Account</legend>
            <div>
                <input
                    type="text"
                    name="name"
                    onChange={onchange}
                    value={name}
                    ref={nameInput}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="nickname"
                    onChange={onchange}
                    value={nickname}
                    placeholder="Nickname"
                />
                <button type="button" onClick={onReset}>
                    Reset
                </button>
            </div>
            <br />
            <div>
                <span>{name}</span> / <span>{nickname}</span>
            </div>
            <br />
        </fieldset>
    );
}

function List({ parm, onremove, ontoggle }) {
    const { account_user, email, id, active } = parm;
    const style = {
        color: active && "tan",
    };
    return (
        <div>
            <strong style={style} onClick={() => ontoggle(id)}>
                {account_user}
            </strong>{" "}
            / <span>{email}</span>
            <button onClick={() => onremove(id)}>Delete</button>
        </div>
        // <div>
        // 	<div><strong>{information[0].account_user}</strong><span>{information[0].email}</span></div>
        // 	<div><strong>{information[1].account_user}</strong><span>{information[1].email}</span></div>
        // 	<div><strong>{information[2].account_user}</strong><span>{information[2].email}</span></div>
        // </div>
    );
}
function CreateList({ onchange, oncreate, onreset, user, email, firstFocus }) {
    return (
        <div>
            <input
                type="text"
                onChange={onchange}
                name="user"
                value={user}
                ref={firstFocus}
            />
            <input type="text" onChange={onchange} name="email" value={email} />
            <button
                onClick={() => {
                    oncreate();
                    onreset();
                }}
            >
                Regist
            </button>
        </div>
    );
}
function ConutListLength(users) {
    console.log("count check");
    return users.filter(user => user.active).length;
}
function ListBlock() {
    const [userInfo, setUserInfo] = useState([
        {
            id: "1",
            account_user: "lesh",
            email: "lesh@the-jey.com",
            active: false,
        },
        {
            id: "2",
            account_user: "croishz",
            email: "croishz@github.com",
            active: true,
        },
        {
            id: "3",
            account_user: "karl",
            email: "karl__@the-jey.com",
            active: false,
        },
    ]);

    const [inputValue, setValue] = useState({
        user: "",
        email: "",
    });
    const { user, email } = inputValue;

    const onchange = event => {
        const { name, value } = event.target;
        setValue({
            ...inputValue,
            [name]: value,
        });
    };

    const nextId = useRef(userInfo.length + 1);
    const accountInput = useRef();
    const onreset = () => {
        // reset input value
        setValue({
            user: "",
            email: "",
        });
        accountInput.current.focus();
    };
    const oncreate = () => {
        // create list
        const addUserInfo = {
            id: nextId.current,
            account_user: user,
            email, // 좌항의 email이 inputValue의 email로 대입되는 경우, email로만 써도 무방. 동일 키네임을 찾아들어간다.
        };
        const [arr1, ...rest] = userInfo;
        setUserInfo([arr1, addUserInfo, ...rest]);
        nextId.current += 1;
        // nextId.current = nextList.length += 1;
        // onreset();
    };
    const onremove = condition => {
        const newInfo = userInfo.slice();
        setUserInfo(
            newInfo.filter(
                // (param) => {return param.id !== id}
                param => param.id !== condition,
            ),
        );
        console.log("newInfo : ", newInfo);
        console.log("userInfo : ", userInfo);
    };
    const ontoggle = condition => {
        setUserInfo(
            userInfo.map(param =>
                param.id === condition
                    ? { ...param, active: !param.active }
                    : param,
            ),
        );
    };
    const activeCount = useMemo(() => ConutListLength(userInfo), [userInfo]);
    return (
        <>
            <CreateList
                user={user}
                email={email}
                onchange={onchange}
                oncreate={oncreate}
                onreset={onreset}
                firstFocus={accountInput}
            />
            {userInfo.map(info => {
                return (
                    <List
                        key={info.id}
                        parm={info}
                        onremove={onremove}
                        ontoggle={ontoggle}
                    />
                );
            })}
            <div>{activeCount}</div>
        </>
        // <>
        // 	<List parm={information[0]}/>
        // 	<List parm={information[1]}/>
        // 	<List parm={information[2]}/>
        // </>
    );
}

function App() {
    // const props = [
    // 	{name : "Hello", color : "tan"},
    // 	{name : "world", color : "lightcoral"},
    // ]
    // const elem = props.map((a)=>{
    // 	<Hello name={a.name} color={a.color}/>
    // })

    const useHooks = "useState_like_useReducer";
    let renderList = null;

    if (useHooks === "useReducer") {
        renderList = <CompositionList />;
    } else if (useHooks === "useState") {
        renderList = <ListBlock />;
    } else if (useHooks === "useState_like_useReducer") {
        renderList = <ListBricks />;
    }

    return (
        // <Wrap>
        // 	{	// children parameter
        // 	// ~ chapter1-15
        // 	hook_useReducer === false ?
        // 		<>	{/* braket으로 children parameter를 감싸면 fragment가 필요 */}
        // 			<ListBlock />
        // 			<MultiInput />
        // 			<TextInput />
        // 			<Counter />
        // 			{/* {elem} */}
        // 			<Hello name={"Hello"} color={"tan"}
        // 				// opt={trre}
        // 				opt // property 선언만 하면 true값을 전달.
        // 			/>
        // 			<Hello name={"World"} color={"lightcoral"} opt={false}/>
        // 		</>
        // 	:
        // 	// chapter1-16 ~ 22 : use hooks
        // 	<CompositionList />
        // 	}
        // </Wrap>
        <Wrap>
            {renderList}
            <MultiInput />
            <TextInput />
            <Counter />
            <Hello name={"Hello"} color={"tan"} opt />
            <Hello name={"World"} color={"lightcoral"} opt={false} />
            <Family />
        </Wrap>
    );
}

export default App;
