import React, {Component, Fragment} from "react";

function Clock(){
    const element = (
        <div>
            <h1>Hello world!</h1>
            <h2>It is {new Date().toLocaleDateString()}</h2>
        </div>
    )
    return(
        element
    )
}
class ClockEv extends Component {
    state = {
        begin : "Hello world!",
        date : new Date().toLocaleTimeString()
    }
    componentDidMount(){
        this.timer();
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    // this context keeping by arrow function
    timer(){
        setInterval(() =>{this.ticktok()}, 1000);
    }
    ticktok(){ 
        this.setState(
            {date : new Date().toLocaleTimeString()}
        );
    }
    // this constext redirection
    // timer(){
    //     let _this = this;   // redirection
    //     setInterval(
    //         function(){
    //             _this.setState(
    //                 {date : new Date().toLocaleTimeString()}
    //             )
    //         }
    //     , 1000)
    // }
    render(){
        return(
            <Fragment>
                <h1 className="head">{this.state.begin}</h1>
                <h2 className="date">{this.state.date}</h2>
            </Fragment>
        )
    }
}

export {Clock, ClockEv};