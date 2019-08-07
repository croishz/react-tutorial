import React, {Component} from "react";

class PhoneForm extends Component {
	state = {
		name : '',
		standing : ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onCreate(this.state);
		this.setState({
			name : '',
			standing : '',
		})
	}
	render(){
		const btnStyle = {
			textTransform : "uppercase",
			backgroundColor : "white",
			border : "1px solid #cecece",
			borderRadius : "0.4em",
			padding: "12px 45px" 
		}
		return(
			<form
				onSubmit={this.handleSubmit}
			>
			<input 
				type="text" 
				placeholder="이름"
				value={this.state.name}
				onChange={this.handleChange}
				name="name"
				/>
			<input 
				type="standing" 
				placeholder="비번"
				value={this.state.standing}
				onChange={this.handleChange}
				name="standing"
			/>
			<div>{this.state.name}</div>
			<div>{this.state.standing}</div>
			<button
				type="submit"
				style = {btnStyle}
			>Regist</button>
			</form>
		)
	}
}

export default PhoneForm;