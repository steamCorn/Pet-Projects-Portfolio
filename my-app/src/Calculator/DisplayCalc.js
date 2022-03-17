import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

class DisplayCalc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div>
                <div id="display">
                    {this.props.display}
                </div>
            </div>
        )
    }
}
export default DisplayCalc;