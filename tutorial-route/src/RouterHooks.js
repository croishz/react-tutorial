import React from "react";
import styled from "styled-components"
import useReactRouter from "use-react-router";

const OutputWrap = styled.div`
    float:left;
`
const Output = styled.textarea`
    width:300px;
    height:170px;
    vertical-align:top;
`
function RouterHooks(){
    const router = useReactRouter();
    const {history, match, location} = router;
    console.log({history, match, location});
    return(
        <>
            {Object.keys(router).map(
               objName => 
                <OutputWrap key={objName}>
                    <h2>{objName} object</h2>
                    <Output 
                        value={JSON.stringify(router[objName], null, 4)}
                        readOnly
                    />
                </OutputWrap>
            )}
            <button type="button" onClick={()=> history.push("/")}>홈으로</button>
        </>
    );
} 

export default RouterHooks;