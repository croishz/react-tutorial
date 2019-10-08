import React, {useState} from "react";
import styled from "styled-components";
import WithRouterAPI from "./WithRouterAPI";

const ProfileIndivisualWrap = styled.div`
    border:1px solid tan;
    padding:20px 14px;
    margin-top:20px;
`
const ProfileIndivisualName = styled.span`
    color: lightcoral;
`
const MainCharactor = styled.span`
    font-size:18px;
    color:#333;
`
const gamerData = {
    daigo : {
        name : "Umehara Daigo",
        charactor : "Gulie, Zeku, Ryu"
    },
    ethnim : {
        name : "Ethnim",
        charactor : "Chunli"
    }
} 

function Profile({match}){
    const {username} = match.params;
    const profile = gamerData[username];
    if(username === "all"){
        return(
            Object.keys(gamerData).map((keyValue)=>
                <ProfileIndivisual key={keyValue} username={username} param={gamerData[keyValue]}/>
            )
        );
    }
    return(
        <ProfileIndivisual username={username} param={profile}/>
    );
}

function ProfileIndivisual({param, username}){
    const {name, charactor} = param;
    const [main, ...rest] = charactor.split(",");
    const subCharactors = rest.join(", ");
    return(
        <>
        <ProfileIndivisualWrap>
            <div>
                <ProfileIndivisualName children={name}/>
                {username === "all" ? "" : (" As " + username)}
            </div>
            <div>
                <MainCharactor children={main}/>
                {rest.length !== 0 && ", "}
                {subCharactors}
            </div>
        </ProfileIndivisualWrap>
        <WithRouterAPI />
        </>
    );
}


export default Profile;