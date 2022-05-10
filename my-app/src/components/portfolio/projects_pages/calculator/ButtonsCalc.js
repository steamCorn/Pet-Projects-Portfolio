import React from "react";

function ButtonsCalc (props){
   
  
    return(
        <div className="buttons-pad-calculator">
            <div className="operators">
                <button 
                    id="add" 
                    onClick={props.operatorPress}    
                    value="+"
                >+</button>
                <button 
                    id="subtract"
                    onClick={props.operatorPress}    
                    value="-"
                >-</button>
                <button 
                    id="multiply" 
                    onClick={props.operatorPress}    
                    value="*"
                > * </button>
                <button 
                    id="divide" 
                    onClick={props.operatorPress}    
                    value="/"
                > / </button>
                
                <button 
                    id="clear" 
                    onClick={props.deleteLastValue}   
                    value="C"
                > C </button>
            </div>

            <div className="digits">
                
                <button 
                    id="one" 
                    onClick={props.numberPress}    
                    value="1"
                >
                    1
                </button>
                <button 
                    id="two" 
                    onClick={props.numberPress}    
                    value="2"
                >
                    2
                </button>
                <button 
                    id="three" 
                    onClick={props.numberPress}    
                    value="3"
                >
                    3
                </button>
                <button 
                    id="four" 
                    onClick={props.numberPress}    
                    value="4"
                >
                    4
                </button>
                <button 
                    id="five" 
                    onClick={props.numberPress}    
                    value="5"
                >
                    5
                </button>
                <button 
                    id="six" 
                    onClick={props.numberPress}    
                    value="6"
                >
                    6
                </button>
                <button 
                    id="seven" 
                    onClick={props.numberPress}    
                    value="7"
                >
                    7
                </button>
                <button 
                    id="eight" 
                    onClick={props.numberPress}    
                    value="8"
                >
                    8
                </button>
                <button 
                    id="nine" 
                    onClick={props.numberPress}    
                    value="9"
                >
                    9
                </button>
                <button 
                    id="decimal" 
                    onClick={props.numberPress}    
                    value="."
                > . </button>

                <button 
                    id="zero" 
                    onClick={props.numberPress}    
                    value="0"
                >
                    0
                </button>
                <button 
                    id="equals" 
                    onClick={() => props.clickEquals()}    
                    value="="
                >
                    =
                </button>
            </div>
            
            
        </div>
    )
    
}
export default ButtonsCalc;