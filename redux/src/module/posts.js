import * as postsAPI from '../api/posts';
import { reduceUtils, createPromiseThunk, handleAsyncActions } from '../lib/asyncUtils';

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST_ID = "GET_POST_ID";
const GET_POST_ID_SUCCESS = "GET_POST_ID_SUCCESS";
const GET_POST_ID_ERROR = "GET_POST_ID_ERROR";

// thunk creator
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POSTS, postsAPI.getPostById);

const initialState = {
	posts: reduceUtils.initial(),
	post: reduceUtils.initial(),
}
// reducer
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts');
const getPostReducer = handleAsyncActions(GET_POST_ID, 'post');
export default function(state = initialState, action){
	switch(action.type){
		case GET_POSTS:
		case GET_POSTS_SUCCESS:
		case GET_POSTS_ERROR:
			return getPostsReducer(state, action);
		case GET_POST_ID:
		case GET_POST_ID_SUCCESS:
		case GET_POST_ID_ERROR:
			return getPostReducer(state, action);
		default:
			return state;
	}
}