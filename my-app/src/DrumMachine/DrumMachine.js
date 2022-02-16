import React from "react";
//import DrumPad from './DrumPad';
//import ControlBlock from './ControlBlock';
import {firstAudioFile , secondAudioFile } from './sounds-file';
import './drumMachine.css';

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pressedButton: '',

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
        this.setState({
            pressedButton: event.keyCode
        });

        let currentPressAudio = firstAudioFile.find(currentButton => 
            currentButton.keyCode === event.keyCode);
        console.log(currentPressAudio);

        if(event.keyCode === currentPressAudio.keyCode){
            this.playAudio(currentPressAudio.url);
        }
    }

    hendlerClickButton = (e) => {
        let currentClickAudio = firstAudioFile.find(currentButton => 
            currentButton.keyTrigger === e.currentTarget.id);

        console.log(e.currentTarget.id);
        if(e.currentTarget.id === currentClickAudio.keyTrigger){
            this.playAudio(currentClickAudio.url);
        }
    }


    render(){
        return(
            <div className="wrapper-drum-machine style-wrapper">
                {/*<DrumPad /> 
                <ControlBlock />*/}
                <div className="drum-pad">
                    <div className="drum-batton" 
                        onClick={this.hendlerClickButton}
                        id="Q">
                        Q
                    </div>
                    <div className="drum-batton" onClick={this.hendlerClickButton} id="W">
                        W
                    </div>
                    <div className="drum-batton" onClick={this.hendlerClickButton} id="E">
                        E
                    </div> 
                </div>

            </div>
        )
    }
}
export default DrumMachine;