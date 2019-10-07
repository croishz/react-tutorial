import React from "react";
import styled from "styled-components";
import {Link, Route} from "react-router-dom";

const profileData = {
    daigo : {
        name : "Umehara Daigo",
        desc : "sfv gamer"
    }, 
    NL : {
        name : "Jeong",
        desc : "sfv gamer"
    }
}

const ProfileWrap = styled.div`
    border:1px solid tan;
    margin-top:16px;
    padding:14px 20px;
`
const ProfileName = styled.span`
    color:lightcoral;
`
function ProfileIndivisual({param, username}){
    const {name, desc} = param;
    return(
        <ProfileWrap>
            <span>{username === "all" ? "" : username + " : " } <ProfileName>{name}</ProfileName></span>  
            <div>{desc}</div>
        </ProfileWrap>
    );
} 

function Profile({match}){
    console.log(match.params);
    const {username} = match.params;
    const profile = profileData[username];
    console.log(profile);

    if(!profile){
        if(username === "all"){
            // console.log("all profile output");
            return(
                <>
                    <span>{"All Profiles"}</span>
                    {Object.keys(profileData).map( (value) => {
                        // console.dir(value);
                        return(
                            <ProfileIndivisual key={value} param={profileData[value]} username={username}/>
                        )
                    })}
                </>
            );
        }
        // console.log("no match profile");
        return <span>No exist.</span>
    }

    return(
        <ProfileIndivisual param={profile} username={username}/>
    );
} 
function Profiles(){
    return(
        <>
        <ul className="Lnb">
            <li>
                <Link to="/profile/daigo">Daigo</Link>
            </li>
            <li>
                <Link to="/profile/NL">NL</Link>
            </li>
        </ul>
        {/* <Route path="/profile" render={()=><span>Choose Gamer</span>} exact/> */}
        <Route path="/profile/:username" component={Profile} exact/>
        </>
    );

}

export {Profiles, Profile};