import React from "react";
import DisplayCalc from './DisplayCalc';
import ButtonsCalc from './ButtonsCalc';
import './calculator.css'

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: [],
            lastSign: '0',
            equals: false
        }
        this.handlerClick = this.handlerClick.bind(this);
        this.counFormula = this.counFormula.bind(this);
    }
    handlerClick(e){
        this.setState({
            lastSign: e.target.value,
            display: [...this.state.display, e.target.value] //showing entered Formula
        });
        this.counFormula();
    }
    counFormula(){
        if(this.state.lastSign === "equals"){
            this.setState({
                equals: true
            })
            let formula = this.state.display;
            console.log(formula);
        }
    }


    render(){
        return(
            <div className="wrapper-calculator">
                <DisplayCalc 
                display={this.state.display}
                lastSign={this.state.lastSign}
                />
                <ButtonsCalc handlerClick={this.handlerClick}/>
            </div>
        )
    }
}
export default Calculator;