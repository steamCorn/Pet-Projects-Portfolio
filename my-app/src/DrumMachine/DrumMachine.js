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
            currentSoundFile : firstAudioFile,
            volumeSliderValue : 0,
            volumeDisplay: ''
        }
        this.setDisplay =this.setDisplay.bind(this);
        this.adjustVolume =this.adjustVolume.bind(this);
    }

    // Changing state from child component
    setDisplay(display){
        this.setState({
            displayHandler: display
        });
    }
    adjustVolume(e){
        this.setState({
            volumeSliderValue: e.target.value,
            volumeDisplay: Math.round(e.target.value * 100)
        })
        console.log(this.state.volumeSliderValue);
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
                    volumeDisplay={this.state.volumeDisplay}
                    value={this.state.volumeSliderValue}
                    onChange={this.adjustVolume}
                /> 
            </div>
        )
    }
}
export default DrumMachine;