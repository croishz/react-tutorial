import React, {Component} from 'react';


class Itembox extends Component {
	state = {
		boxContents : [
			{head : "Torre De Cristal", category : "Office Buildings", desc : "High Rise"},
			{head : "BBVA", category : "Headqueters", desc : "Workplace"},
			{head : "Torre Iberdrola", category : "Office Buildings",  desc : "High Rise"},
			{head : "Torre Serrano", category : "Office Buildings", desc : "Repositioning"}
		]
	}
	rendor(){
		return(
			<ul>
				{this.state.boxContents.map(
					(itemboxContents, i) =>  {
						return (
							<li className="itembox" key={i}>
								<div className="head">{itemboxContents.head}</div>
								<div className="category">{itemboxContents.category}</div>
								<div className="desc">{itemboxContents.desc}</div>
							</li>
						);
					}
				)}
			</ul>
		)
	}
}

export default Itembox;