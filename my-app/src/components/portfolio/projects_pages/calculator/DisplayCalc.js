import React from "react";

export default function DisplayCalc(props) {

    let result = props.result;
    return(
        <div>
            <div id="display">
                <div>
                    {result ? <span>({result})</span>  : ""}
                </div>
                <div>
                    {props.calc || "0"}
                </div>
            </div>
        </div>
    )
}
