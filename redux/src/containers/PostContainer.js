import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../module/posts";
import Post from "../components/Post";

function PostContainer({postId}){
	const {data, loading, error} = useSelector(state => state.posts.post );
	const dispatch = useDispatch();
	
	useEffect(()=>{
		dispatch(getPost(postId))
	},[postId, dispatch]);

	if(loading) return <div>Loading...</div>;
	if(error) return <div>Error! {error.type}</div>;
	if(!data) return null;

	return(
		<Post post={data} />
	);
} 

export default PostContainer;