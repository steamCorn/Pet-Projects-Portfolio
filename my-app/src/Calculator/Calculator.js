import React from "react";
import DisplayCalc from './DisplayCalc';
import ButtonsCalc from './ButtonsCalc';
import './calculator.css'

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: ''
        }
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick(e){
        console.log(e.target.value)
        this.setState({
            display: e.target.value
        })
    }
    render(){
        return(
            <div className="wrapper-calculator">
                <DisplayCalc display={this.state.display}/>
                <ButtonsCalc handlerClick={this.handlerClick}/>
            </div>
        )
    }
}
export default Calculator;