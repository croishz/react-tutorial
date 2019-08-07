import React, {Component, Fragment} from "react";

// class List extends Component{
//     state = {
//         category_name : [
//             "high rise", "office buildings", "repogitory"
//         ]
//     }
//     render(){
//         // return (
//         //     <Ui>
//         //     {
//         //         this.state.category_name.map(
//         //             (name, index)=>{
//         //                 return (
//         //                     <Li className="item" key={index}>
//         //                         {name}
//         //                     </Li>
//         //                 )
//         //             }
//         //         )
//         //     }
//         //     </Ui>
//         // );
//     }
// }

function ItemTextContents(props){
    return(
        <Fragment>
            <strong className="head">{props.contents.head}</strong>
            <Div className="description">{props.contents.desc}</Div>
        </Fragment>
    );
}
function ItemIcon(props){
    return(
        <div className="icon">
            {props.icon === "vector" ? <SVGIcon></SVGIcon> : <img alt="" src="" class="icon"/>}
        </div>
    );
}
function SVGIcon(){
    const state = {
        SVGpath : <path></path>
    }
    return(
        // <svg class="icon">{this.state.path}</svg>
        <svg class="icon">{state.SVGpath}</svg>
    )
}
function List(props){
    return(
        <Ul className="item-group">
            <Li className="item">
                <ItemTextContents contents={props.contents}></ItemTextContents>
                <ItemIcon icon={props.icon}></ItemIcon>
            </Li>
        </Ul>
    );
}

export default List;