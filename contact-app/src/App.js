import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import PhoneForm from './component/PhoneForm';
import PhoneList from './component/PhoneList';

class App extends Component {
	id = 2
	state = {
		information : [
			{
				id : 0,
				name : "daigo",
				standing : "12"
			},
			{
				id : 1,
				name : "umehara",
				standing : "10"
			}
		]
	}

	handleCreate = (data) => {
		console.log(data);
		const {information} = this.state;
		this.setState({
			information : information.concat({
				id : this.id++,
				...data
			})
		})
	}
	handleRemove  = (id) => {
		const { information } = this.state;
		this.setState({
			information : information.filter( info => info.id !== id )
		})
	}
	render() {
		return (
			<Fragment>
				<PhoneForm 
					onCreate={this.handleCreate} 
				/>
				{/* {JSON.stringify(information)} */}
				<PhoneList
					data={this.state.information}
				/>
			</Fragment>
		);
	}
}

export default App;
