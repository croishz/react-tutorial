import React from "react";
import qs  from "qs";

function Home({location, match, history, staticContext}){
    console.log(location);
    console.log(match);
    console.log(history);
    console.log(staticContext);

    const queryString = qs.parse(location.search, {ignoreQueryPrefix:true});
    const confirm = queryString.confirm === "true";
    
    // console.log(parseInt(queryString.id, 10));
    // console.log(10);
    return(
        <>
            <h1>Welcome Home page</h1>
            <div>{confirm && "승인되었습니다."}</div>
        </>
    );
} 

export default Home;