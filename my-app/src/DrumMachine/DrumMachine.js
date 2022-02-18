import React from "react";
import DrumPad from './DrumPad';
import ControlBlock from './ControlBlock';
import {firstAudioFile , secondAudioFile } from './sounds-file';
import './drumMachine.css';

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentDrumpButton: '',
            displayHandler: '',
            currentSounFile : firstAudioFile
        }
        this.playAudio = this.playAudio.bind(this);
        this.hendlerPressButton = this.hendlerPressButton.bind(this);
        this.hendlerClickButton = this.hendlerClickButton.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.hendlerPressButton);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.hendlerPressButton);
    }

    playAudio(url){
        const audio = new Audio(url);
        audio.currentTime = 0; 
        audio.play();
    }

    hendlerPressButton(event){
        let currentPressAudio = this.state.currentSounFile
            .find(currentButton => 
            currentButton.keyCode === event.keyCode);
        
        if(!currentPressAudio){
            return
        }
        this.setState({
            currentDrumpButton: currentPressAudio.keyTrigger,
            displayHandler: currentPressAudio.id
        });
        this.playAudio(currentPressAudio.url);
        console.log(currentPressAudio.keyTrigger);
    }

    hendlerClickButton = (event) => {
        let currentClickAudio = this.state.currentSounFile
            .find(currentButton => 
            currentButton.id === event.currentTarget.id);

        if(!currentClickAudio){
            return
        }
        this.setState({
            currentDrumpButton: currentClickAudio.keyTrigger,
            displayHandler: currentClickAudio.id
        });
        this.playAudio(currentClickAudio.url);
        console.log("state:   " + currentClickAudio.keyTrigger);
    }

    render(){
        return(
            <div id="drum-machine" className="wrapper-drum-machine style-wrapper">
                <DrumPad 
                    onClick={this.hendlerClickButton}
                    currentSounFile={this.state.currentSounFile}
                /> 
                <ControlBlock 
                    display={this.state.displayHandler}
                /> 
            </div>
        )
    }
}
export default DrumMachine;