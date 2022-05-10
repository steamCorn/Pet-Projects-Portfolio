import React from "react";

export default function DisplayCalc(props) {

    
    return(
        <div>
            <div id="display">
                <div className="results">
                    {props.result}
                </div>
                <div>
                    {<span>{props.currentNumber || '0'}</span>}
                </div>
            </div>
        </div>
    )
}
