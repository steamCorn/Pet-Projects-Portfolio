import { useState } from "react";
import DisplayCalc from './DisplayCalc';
import ButtonsCalc from './ButtonsCalc';
import './calculator.css'

function Calculator (){
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ["/", "*", "-", "+", "."];

    const updateCalc = value => {
        //manipulation with operators
        if(
            operators.includes(value) && calc === '' ||
            operators.includes(value) && operators.includes(calc.slice(-1))
        ){
            return;
        }
        setCalc(calc + value);

        if(!operators.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }

    const clickEquals = () => {
        setCalc(eval(calc).toString());
    }
    const deleteLastValue = () => {
        setCalc(calc.slice(0, -1))
    }
    return(
        <div className="wrapper-calculator">
            <DisplayCalc 
                calc ={calc}
                result = {result}
            />
            <ButtonsCalc 
                updateCalc = {updateCalc}
                clickEquals = {clickEquals}
                deleteLastValue = {deleteLastValue}
            />
        </div>
    )
}

export default Calculator;