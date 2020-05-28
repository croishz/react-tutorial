import React from 'react';
import CounterContainer from './containers/CounterContainer';
// import PostListContainer from './containers/PostListContainer';
import { Route } from 'react-router';
import PostContainer from './containers/PostContainer';
import PostPage from './pages/PostPage';

function App() {
return (
	<>
		<CounterContainer />
		{/* <PostListContainer /> */}
		<Route path="/" component={PostContainer} exact />
		<Route path="/:id" component={PostPage} />
	</>
	);
}

export default App;
