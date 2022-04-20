import React, { Component } from 'react';
import './Clicker.css';

class Clicker extends Component{
//    constructor(props){
//        state(props)
//    }
    state={ number:0}
    handleClick=e=>{
        let rand=Math.floor(Math.random()*10)+1;
        this.setState({number:rand});
    }
    conditional=rand=>{

    }
    render(){
       return( <div>
            <h1>Number is {this.state.number}</h1>
           {/* <button id='btn' onClick={this.handleClick}>Clicker!!!</button>*/}
            {this.state.number===7 ?
             <h2>you win!!!</h2>
            :<button id='btn' onClick={this.handleClick}>Clicker!!!</button>}
        </div>
       )}
}

export default Clicker;