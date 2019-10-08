import React from "react";
import {withRouter} from "react-router-dom";
import styled from "styled-components"

const OutputWrap = styled.div`
    float:left;
`
const Output = styled.textarea`
    width:300px;
    height:150px;
    vertical-align:top;
`
function WithRouterAPI(props){
    return(
        <>
            {Object.keys(props).map(
               objName => 
                <OutputWrap>
                    <h2>{objName} object</h2>
                    <Output 
                        value={JSON.stringify(props[objName], null, 4)}
                        readOnly
                    />
                </OutputWrap>
            )}
        </>
    );
} 

export default withRouter(WithRouterAPI);