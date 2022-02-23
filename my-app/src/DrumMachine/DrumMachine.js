import React from "react";
import DrumPad from './DrumPad';
import ControlBlock from './ControlBlock';
import {firstAudioFile , secondAudioFile } from './sounds-file';
import './drumMachine.css';

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dcurrentDrumpButton: '',
            displayHandler: '',
            currentSoundFile : firstAudioFile
        }
        this.setDisplay =this.setDisplay.bind(this);
    }

    setDisplay(display){
        this.setState({
            displayHandler: display
        });
        console.log(this.state.displayHandler);
    }
    
    render(){
        return(
            <div id="drum-machine" className="wrapper-drum-machine style-wrapper">
                <DrumPad 
                    currentSoundFile={this.state.currentSoundFile}
                    setDisplay = {this.setDisplay}
                />
                <ControlBlock 
                    display={this.state.displayHandler}
                /> 
            </div>
        )
    }
}
export default DrumMachine;