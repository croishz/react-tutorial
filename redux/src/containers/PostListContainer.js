import React from "react";
import PostList from "../components/PostList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../module/posts";

function PostListContainer(){
	const {data, loading, error} = useSelector(state => {console.log(state); return state.posts.posts});
	const dispatch = useDispatch();

	useEffect( ()=>{
		dispatch(getPosts());
	},[dispatch]);

	if(loading) return <div>Loading...</div>;
	if(error) return <div>Error! {error.type}</div>;
	if(!data) return null;

	return(
		<PostList posts={data} />
	);
} 

export default PostListContainer;