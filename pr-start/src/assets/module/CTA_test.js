import React from "react";
import styled from 'styled-components';
import { StyledBtn as DefaultBtn, PrimaryBtn, SecondaryBtn, BorderBtn } from './Button';

const ButtonArea = styled.div`
    margin-bottom:20px;
`
/*
function Button({children}){
    return <button type="button">{children}</button>
}
const Container = styled.div`
    max-width:400px;
    margin:auto;
`
const StyledBtn = styled(Button)`
    font-size:14px;
    line-height:1em;
    padding:10px 16px;
    color:#fff;
    margin:0 10px;
    @media (max-width:480px){
        & + & {
            margin:10px 0 0;
        }
    }
`
const PrimaryBtn = styled(StyledBtn)`
    background-color:palevioletred;
`
const BorderBtn = styled(StyledBtn)`
    background-color:#fff;
    color:palevioletred;
    border:1px solid palevioletred;
`
function BtnContainer(){
    return(
        <Container>
            <PrimaryBtn children={"Button"} />
            <BorderBtn as="a" children={"Button"} />
        </Container>
    )
}
*/
// const BorderBtn = styled(StyledBtn).attrs(() => ({ borderColor: palevioletred}))`
//     background-color:#fff;
//     color:${props.borderColor};
//     border:1px solid currentColor;
// `
function CTA() {
    return (
        <ButtonArea>
            <DefaultBtn children={"Add to Cart"} blocked isPrimary/>
            <BorderBtn as="a" href="www.lg.com/uk"  children={"Where to buy"} blocked />
        </ButtonArea>
        // <>
        //     <ButtonArea>
        //         <DefaultBtn isPrimary>{'More'}</DefaultBtn>
        //         <DefaultBtn as="input" type="button" value="More" isSecondary/>
        //         <DefaultBtn as="a" href="#none" isDisabled>{'More'}</DefaultBtn>
        //     </ButtonArea>
        //     <ButtonArea>
        //         <PrimaryBtn lg>{'Label'}</PrimaryBtn>
        //         <SecondaryBtn as="input" type="button" value="Label" />
        //         <BorderBtn as="a" href="www.lg.com/uk" primary lg>{'Label'}</BorderBtn>
        //         <BorderBtn secondary>{'Label'}</BorderBtn>
        //     </ButtonArea>
        // </>
    );
}

export default CTA;