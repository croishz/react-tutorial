import React from 'react';

function Hello({name, color}){
  console.log(name, color);
  return (
  <h1 
    style = {{color}}
    className = "head"
  >{name}</h1>)
}
Hello.defaultProps = {
  name : "nothing"
}

function Wrap({children}){
  const style = {
    border: "2px solid black",
    padding: 12,
    lineHeight: "1em",
    textTransform : "uppercase"
  }
  return <div style={style}>{children}</div>
}

function App() {
  // const props = [
  //   {name : "Hello", color : "tan"},
  //   {name : "world", color : "lightcoral"},
  // ]
  // const elem = props.map((a)=>{
  //   <Hello name={a.name} color={a.color}/> 
  // })
  return (
    <Wrap>
      {/* {elem} */}
      <Hello name={"Hello"} color={"tan"}/>
      <Hello name={"World"} color={"lightcoral"}/>
    </Wrap>
  );
}

export default App;
