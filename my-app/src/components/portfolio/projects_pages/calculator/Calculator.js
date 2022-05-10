import React from "react";
import DisplayCalc from './DisplayCalc';
import ButtonsCalc from './ButtonsCalc';
import GoBackToPortfolioButton from "../../../__buttons/GoBackToPortfolioButton";
import './calculator.css'

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentNumber : '',
            currentOperator : '',
            result : '',
            operators : ['+', '-', '*', '/']
        }
        
        this.numberPress = this.numberPress.bind(this);
        this.operatorPress = this.operatorPress.bind(this);
        // this.calculateResult = this.calculateResult.bind(this);
        this.clickEquals = this.clickEquals.bind(this);
        this.deleteLastValue = this.deleteLastValue.bind(this);
    }
    
    numberPress(e){
        this.setState({
            currentNumber: this.state.currentNumber + e.target.value
        });
    }

    operatorPress(e){
        
        this.setState({
            previousNumber : this.state.currentNumber,
            result: this.state.currentNumber + e.target.value
        });
        // setResult(currentNumber + e.target.value)
        console.log(e.target.value + "   was pressed");
        
    }

    // calculateResult(e){
    //     switch (e.target.value) {
    //         case '+':
    //             setResult(result + parseInt(calc, 10));
    //             break;

    //         case '-':
    //             setResult(result - parseInt(calc, 10));
    //             break;

    //         case '*':
    //             setResult(result * parseInt(calc, 10));
    //             break;

    //         case '/':
    //             setResult(result / parseInt(calc, 10));
    //     }
    // }

    clickEquals(){
        console.log(' = was cliked');
    }

    deleteLastValue(){
        this.setState({
            currentNumber : '',
            currentOperator : '',
            result : '',
        })
        console.log(' DEL was cliked');
    }

    render(){
        return(
            <div className="wrapper-calculator">
                <div className="calculator calculator-style">
                    <GoBackToPortfolioButton />
                    <DisplayCalc 
                        currentNumber = {this.state.currentNumber}
                        previousNumber= {this.state.previousNumber}
                        calc = {this.state.calc} 
                        result = {this.state.result}
                    />
                    <ButtonsCalc 
                        numberPress ={this.numberPress}
                        operatorPress = {this.operatorPress}
                        clickEquals = {this.clickEquals}
                        deleteLastValue = {this.deleteLastValue}
                    />
                </div>
            </div>
        )
    }
}

export default Calculator;