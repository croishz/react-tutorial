import React, {useCallback, useEffect} from "react";
import {useHistory} from "react-router";


function HistoryAPI(){
    const history = useHistory();    // use hook
    
    const goBack = useCallback(()=>{
        history.goBack();
    }, [history]);
    const goHome = useCallback(()=>{
        history.push("/");
    }, [history]);
    const goHomeByReplace = useCallback(()=>{
        history.replace("/profiles");
    },[history]);
    const goAnywhere = useCallback(()=>{
        history.go(-10);
    },[history]);

    useEffect(()=>{
        console.log(history);
        const unblock = history.block("이 페이지를 나갑니다.");
        console.dir(unblock);
        return ()=>{
            unblock();
        }
    },[history]);

    return(
        <>
            <button type="button" onClick={goBack}>뒤로 가기</button>
            <button type="button" onClick={goHome}>홈</button>
            <button type="button" onClick={goHomeByReplace}>프로필 (replace)</button>
            <button type="button" onClick={goAnywhere}>Stack -10</button>    
		    <hr />
        </>
    );
} 

export default HistoryAPI;