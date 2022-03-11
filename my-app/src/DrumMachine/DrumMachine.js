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
            soundFileName: 'firstFile',
            volumeValue : 30, 
            volumeSound: 0.3
        }
        this.setDisplay = this.setDisplay.bind(this);
        this.changeSoundFile = this.changeSoundFile.bind(this);
        this.adjustVolume=this.adjustVolume.bind(this);
    }

    changeSoundFile(e){
        if(e.currentTarget.id === 'firstFile'){
            this.setState({
                soundFileName: e.currentTarget.id,
                currentSoundFile: firstAudioFile
            })
        } else {
            this.setState({
                soundFileName: e.currentTarget.id,
                currentSoundFile: secondAudioFile
            })
        }
        console.log(e);
        console.log(this.state.currentSoundFile)
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

                    soundFileName={this.state.soundFileName}
                /> 
            </div>
        )
    }
}
export default DrumMachine;