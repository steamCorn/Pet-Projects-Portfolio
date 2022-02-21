import React from "react";
import DrumPad from './DrumPad';
import ControlBlock from './ControlBlock';
import {firstAudioFile , secondAudioFile } from './sounds-file';
import './drumMachine.css';

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayHandler: '',
            currentSounFile : firstAudioFile
        }
    }
    //Code about changed sound file
    
    render(){
        return(
            <div id="drum-machine" className="wrapper-drum-machine style-wrapper">
                <DrumPad 
                    currentSoundFile={this.state.currentSounFile}
                />
                <ControlBlock 
                    display={this.state.displayHandler}
                /> 
            </div>
        )
    }
}
export default DrumMachine;