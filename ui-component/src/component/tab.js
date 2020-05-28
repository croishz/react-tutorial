import React from "react";
import style from "styled-components";
import {Route, NavLink} from "react-router";

const initialState = {
    category : [
        "Mobile", "TV/Audio/Video", "Kitchen", "Lanudry", "Other Appliances"
    ],
}
function tab(){
    return(
        <>
            
        </>
    );
} 

const CategoryMenuWrap =styled.ul`
    font-size:16px;
    line-height:20px;
    color:#333;
    
` 
function CategoryMenu(){
    return(
        <CategoryMenuWrap>
            
            <NavLink>{children}</NavLink>
        </CategoryMenuWrap>
    )
}
export default tab;


document.querySelectorAll(".sr-only").forEach((elem)=>console.log(elem.innerHTML))

