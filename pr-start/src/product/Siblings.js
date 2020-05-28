import React from "react";
import styled, {css} from "styled-components";
import {colorAsset} from "../assets/styled";
import Hidden from "../assets/module/Hidden";

const SiblingsFrame = styled.ul`
    padding:0;
    margin:15px 0 0;
    font-size:1rem;
`
// const type = props => {
//     console.log(props);
// }
const Sibling = styled.li`
    cursor: pointer;
    list-style:none;
    display:inline-block;
    vertical-align:top;
    width:24px;
    height:20px;
    line-height:20px;
    font-size:13px;
    color:${colorAsset.gray};
    margin:0 4px;
    ${props => props.type === "size" && css`
        border-radius:3px;
        border:1px solid currentColor;
    `}
    ${props => props.type === "color" && css`
        position:relative;
        width:20px;
        height:20px;
        background-color:${props.color};
        border-radius:50%;
        text-indent:10em;
        &:after {
            display:none;
            content:"";
            position:absolute;
            top:50%; left:50%;
            transform:translate3d(-50%, -50%, 0);
            width:26px;
            height:26px;
            border-radius:50%;
            border:1px solid ${colorAsset.master};
        }
        .active:after {display:block;}
    `}
`
function Siblings(props){
    // console.log(props);
    const {type, siblings} = props;
    return(
        <SiblingsFrame>
            {siblings.map( sibling => {
                // console.log(sibling);
                if(type === "color"){
                    return (
                        <Sibling tabindex="0" key={sibling.color} type={type} color={sibling.color}>
                            <Hidden as="span">{sibling.name}</Hidden>
                        </Sibling>
                    )
                }else{
                    return (
                        <Sibling tabindex="0" key={sibling.size} type={type}>
                            {sibling.size + "\""}
                            <Hidden as="span">{sibling.name}</Hidden>
                        </Sibling>
                    )
                }
            })}
        </SiblingsFrame>
    );
} 

export default Siblings;