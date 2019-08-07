import React, {Component, Fragment} from "react";
// list item에 들어갈 dom 생성.
// 첫번째 dom은 item의 project name을 가짐. 
// 두번째 dom은 item의 category name을 가짐.
// 세번째 dom은 item의 specification을 가짐.
// 네번째 dom은 item의 icon 이미지를 가짐.
// 각 dom이 출력할 정보는 페이지 로딩이후 불변. 
// list item은 project의 갯수만큼 생성.

const contents = {
	project1 : {
		name : "project1",
		category : "portfolio",
		spec : "private",
		icon : <svg class="icon portfolio"></svg>
	},
	project2 : {
		name : "project2",
		category : "react",
		spec : "flatform",
		icon : <svg class="icon react"></svg>
	},
	project3 : {
		name : "project3",
		category : "component",
		spec : "module",
		icon : <svg class="icon component"></svg>
	},
}
const ListBlockContents = () => {
	let domArray = [];
	for (const key in contents) {
		if (contents.hasOwnProperty(key)) {
			let dom = 
			<li key={contents[key].name.toString()}>
				<div className="name">{contents[key].name}</div>
				<div className="category">{contents[key].category}</div>
				<div className="spec">{contents[key].spec}</div>
				<div className="icon">{contents[key].icon}</div>
			</li>
			domArray.push( dom );
		}
	}
	return domArray;
}
// const ListBlockContents = Object.keys(contents).map(
// 	(key)=>{
// 		<li key={contents[key].toString()}>
// 			<div className="name">{contents[key].name}</div>
// 			<div className="category">{contents[key].category}</div>
// 			<div className="spec">{contents[key].spec}</div>
// 			<div className="icon">{contents[key].icon}</div>
// 		</li>
// 	}
// )


class ListBlock extends Component {
	// static defaultProps = {
	// 	name : "Project Name",
	// 	category : "Project Category",
	// 	spec : "Project Spec",
	// 	icon : "<svg class=\"icon\"></svg>"
	// }
	render(){
		return(
			<ul className={this.props.listClass}>
				<ListBlockContents listClass="project" />
			</ul>
		);
	}
}

export default ListBlock;