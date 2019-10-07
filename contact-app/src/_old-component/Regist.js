import React, {Component} from "react";

class Regist extends Component {
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
			<>
				<PhoneForm 
					onCreate={this.handleCreate} 
				/>
				{/* {JSON.stringify(information)} */}
				<PhoneList
					data={this.state.information}
				/>
			</>
		);
	}
}

export default Regist