import React from "react";
import styled from "styled-components";

function Contents(props){
    return(
        <div>{props.children}</div>
    );
} 
const Hidden = styled(Contents)`
    display:block;
    overflow:hidden;
    width:1px;
    height:1px;
    clip:rect(0,0,0,0);
    opacity:0;
`
export default Hidden;