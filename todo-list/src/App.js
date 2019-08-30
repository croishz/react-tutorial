import React from "react";
import styled from "styled-components";

const Icon = styled(
    ({ component, ...props }) => React.cloneElement(component, props)
)`
  background: red;
`

const elem = "h4";
const Title = styled(({props})=> React.createElement(elem))`
	font-size : 20px;
	line-height : 18px;
	color: tan;
`
function App() {
	return(
		<Title>Hello world!</Title>
	);
}

export default App;
