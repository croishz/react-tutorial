import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts }){
	return(
	<fieldset>
		<ul>
			{
				posts.map((post)=>(
					<li key={post.id}>
						<Link to={`${post.id}`}>{post.title + post.body}</Link>
					</li>
				))
			}
		</ul>
	</fieldset>
	);
} 

export default PostList;