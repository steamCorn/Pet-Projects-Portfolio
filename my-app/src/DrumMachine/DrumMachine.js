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
            volumeValue : 30, 
            volumeSound: 0.3
        }
        this.setDisplay = this.setDisplay.bind(this);
        this.changeSoundFile = this.changeSoundFile.bind(this);
        this.adjustVolume=this.adjustVolume.bind(this);
    }

    changeSoundFile(e){
        if(e.currentTarget.value === 'Secon-file'){
            this.setState({
                currentSoundFile: secondAudioFile
            })
        } else(
            this.setState({
                currentSoundFile: firstAudioFile
            })
        )
    }

    // Changing state from child component
    setDisplay(display){
        this.setState({
            displayHandler: display
        });
    }

    adjustVolume(e){
        this.setState({
            volumeValue: e.target.value,
            volumeSound: e.target.value / 100
        })
        console.log(e.target.value / 100);
    }
    
    render(){
        return(
            <div id="drum-machine" className="wrapper-drum-machine style-wrapper">
                <DrumPad 
                    currentSoundFile={this.state.currentSoundFile}
                    setDisplay = {this.setDisplay}
                    setVolume = {this.setVolume}
                    volumeSound={this.state.volumeSound}
                />
                <ControlBlock 
                    display={this.state.displayHandler}
                    changeSoundFile={this.changeSoundFile}
                    adjustVolume={this.adjustVolume}
                    volumeDisplay={this.state.volumeValue}
                /> 
            </div>
        )
    }
}
export default DrumMachine;