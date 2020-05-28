import React from "react";
import styled from "styled-components";
import { colorAsset } from '../assets/styled';

const Visual = styled.a`
    display:block;
    max-width:${props => (props.size + 'px')};
    //height:${props => (props.size + 'px')};
    line-height:${props => (props.size + 'px')};
    margin:0 auto 11px;
    &:not(:focus){
        outline:1px solid ${colorAsset.master};
        outline-offset:-1px;
    }
    img {
        display:none;
        max-width:100%;
        vertical-align:middle;
    }
    @media (min-width:992px){
        .pc {display:inline-block;}
    }
    @media (min-width:768px) and (max-width:991px){
        .tablet {display:inline-block;}
    }
    @media (max-width:767px){
        max-width:${props => (Math.floor(props.size * 0.65)+ 'px')};
        //height:${props => (Math.floor(props.size * 0.65)+ 'px')};
        line-height:${props => (Math.floor(props.size * 0.65)+ 'px')};
        .mobile {display:inline-block;}
    }
`
function ModelVisual({ imgData, size, url, useTablet}){
    const {imgPath : path , altText} = imgData;
    return(
        <Visual size={size} href={url}>
            <img className="pc" src={path.desktop} alt={altText}/>
            <img className="mobile" src={path.mobile} alt={altText}/>
            {
                useTablet ?
                <img className="tablet" src={path.tablet} alt={altText}/> : ''
            }
        </Visual>
    );
} 

export default ModelVisual;