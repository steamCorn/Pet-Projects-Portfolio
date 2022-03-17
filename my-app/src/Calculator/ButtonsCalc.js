import React from "react";

class ButtonsCalc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="buttons-calculator">
                <button id="zero" onClick={this.props.handlerClick} value="0">0</button>
                <button id="one" onClick={this.props.handlerClick} value="1">1</button>
                <button id="two" onClick={this.props.handlerClick} value="2">2</button>
                <button id="three" onClick={this.props.handlerClick} value="3">3</button>
                <button id="four" onClick={this.props.handlerClick} value="4">4</button>
                <button id="five" onClick={this.props.handlerClick} value="5">5</button>
                <button id="six" onClick={this.props.handlerClick} value="6">6</button>
                <button id="seven" onClick={this.props.handlerClick} value="7">7</button>
                <button id="eight" onClick={this.props.handlerClick} value="8">8</button>
                <button id="nine" onClick={this.props.handlerClick} value="9">9</button>
                <button id="equals" onClick={this.props.handlerClick} value="=">=</button>
                <button id="add" onClick={this.props.handlerClick} value="+">+</button>
                <button id="subtract" onClick={this.props.handlerClick} value="-">-</button>
                <button id="multiply" onClick={this.props.handlerClick} value="*">*</button>
                <button id="divide" onClick={this.props.handlerClick} value="/">/</button>
                <button id="decimal" onClick={this.props.handlerClick} value=".">.</button>
                <button id="clear" onClick={this.props.handlerClick} value="AC">AC</button>
            </div>
        )
    }
}
export default ButtonsCalc;