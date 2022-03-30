import React from "react";

function ButtonsCalc (props){
   
  
    return(
        <div className="buttons-calculator">
            <button 
                id="zero" 
                onClick={() => props.updateCalc('0')}    
                // value="0"
            >
                0
            </button>
            <button 
                id="one" 
                onClick={() => props.updateCalc('1')}    
                // value="1"
            >
                1
            </button>
            <button 
                id="two" 
                onClick={() => props.updateCalc('2')}    
                // value="2"
            >
                2
            </button>
            <button 
                id="three" 
                onClick={() => props.updateCalc('3')}    
                // value="3"
            >
                3
            </button>
            <button 
                id="four" 
                onClick={() => props.updateCalc('4')}    
                // value="4"
            >
                4
            </button>
            <button 
                id="five" 
                onClick={() => props.updateCalc('5')}    
                // value="5"
            >
                5
            </button>
            <button 
                id="six" 
                onClick={() => props.updateCalc('6')}    
                // value="6"
            >
                6
            </button>
            <button 
                id="seven" 
                onClick={() => props.updateCalc('7')}    
                // value="7"
            >
                7
            </button>
            <button 
                id="eight" 
                onClick={() => props.updateCalc('8')}    
                // value="8"
            >
                8
            </button>
            <button 
                id="nine" 
                onClick={() => props.updateCalc('9')}    
                // value="9"
            >
                9
            </button>
            <button 
                id="equals" 
                onClick={() => props.clickEquals()}    
                value="="
            >
                =
            </button>
            <button 
                id="add" 
                onClick={() => props.updateCalc('+')}    
                value="+"
            >
                +
            </button>
            <button 
                id="subtract"
                onClick={() => props.updateCalc('-')}    
                value="-"
            >
                -
            </button>
            <button 
                id="multiply" 
                onClick={() => props.updateCalc('*')}    
                value="*"
            >
                *
            </button>
            <button 
                id="divide" 
                onClick={() => props.updateCalc('/')}    
                value="/"
            >
                /
            </button>
            <button 
                id="decimal" 
                onClick={() => props.updateCalc('.')}    
                value="."
            >
                .
            </button>
            <button 
                id="clear" 
                onClick={() => props.deleteLastValue()}   
                value="AC"
            >
                AC
            </button>
        </div>
    )
    
}
export default ButtonsCalc;