import React from "react";
import DrumPad from './DrumPad';
import ControlBlock from './ControlBlock';
import './drumMachine.css'

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }


    render(){
        return(
            <div className="wrapper-drum-machine style-wrapper">
                <DrumPad /> 
                <ControlBlock />
            </div>
        )
    }
}
export default DrumMachine;