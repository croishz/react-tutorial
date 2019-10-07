import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function App(){
	return(
		<>
			<pre>
				<code>
					<div>design for "todo list" </div>
					<div>component tree</div>
					<div>TodoFrame - all props</div>
					<div>	context - all state but not needless </div>
					<div>	TodoTemplete - id : Date.now / day : Date.tolocaleString / </div>
					<div>		TodoHeader</div>
					<div>			DateTime</div>
					<div>			CountLeast</div>
					<div>		TodoList</div>
					<div>			TodoItem - id : useMemo(number) / checked : boolean / content : string</div>
					<div>				[act] check update</div>
					<div>				[act] delete</div>
					<div>				[act] content modify</div>
					<div>		TodoFooter </div>
					<div>			TodoCreate - id : useMemo(number++) / checked : false / content : input.value</div>
					<div>				[act] create</div>
				</code>
			</pre>
		</>
	);
}

export default App;
