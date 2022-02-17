import React from "react";
import DrumPad from './DrumPad';
import ControlBlock from './ControlBlock';
import {firstAudioFile , secondAudioFile } from './sounds-file';
import './drumMachine.css';

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pressedButton: '',
            displayHandler: ''
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
        let currentPressAudio = firstAudioFile.find(currentButton => 
            currentButton.keyCode === event.keyCode);
        //console.log(currentPressAudio);
        
        this.setState({
            pressedButton: currentPressAudio.keyTrigger,
            displayHandler: currentPressAudio.id
        });
        console.log(this.state.pressedButton);

        if(event.keyCode === currentPressAudio.keyCode){
            this.playAudio(currentPressAudio.url);
        }
    }

    hendlerClickButton = (event) => {
        let currentClickAudio = firstAudioFile.find(currentButton => 
            currentButton.keyTrigger === event.currentTarget.id);

        this.setState({
            pressedButton: currentClickAudio.keyTrigger,
            displayHandler: currentClickAudio.id
        });
        //console.log(e.currentTarget.id);
        if(event.currentTarget.id === currentClickAudio.keyTrigger){
            this.playAudio(currentClickAudio.url);
            console.log("state of main component  "+ this.state.pressedButton);
        }
        
    }

    render(){
        return(
            <div id="drum-machine" className="wrapper-drum-machine style-wrapper">
                <DrumPad 
                    onClick={this.hendlerClickButton}
                /> 
                <ControlBlock 
                    display={this.state.displayHandler}
                /> 
            </div>
        )
    }
}
export default DrumMachine;