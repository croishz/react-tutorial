import React, {Component} from "react";

class PhoneInfo extends Component {
	static defaultProps = {
		info : {
			id : 0 , 
			name : "이름",
			standing : 'string number'
		}
	}
	render(){
		const className = "list-item"

		const { name, standing, id } = this.props.info;

		return (
			<div className={className} data-react-key={id}>
				<div><span>{name}</span></div>
				<div>{standing}</div>
			</div>
		);
	}
}

export default PhoneInfo