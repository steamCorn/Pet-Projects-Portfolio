import React from "react";

class DrumPad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeID: '',
            // buttonclicked: {} 
            isButtonActive: true
        }
        this.playAudio = this.playAudio.bind(this);
        this.makeSoundFunction = this.makeSoundFunction.bind(this)
        this.handlerPressButton = this.handlerPressButton.bind(this);
        this.handlerClickButton = this.handlerClickButton.bind(this);
        // this.buttonIDsetState = this.buttonIDsetState.bind(this);
    }

    // Code about how sound was played
    componentDidMount() {
        document.addEventListener('keydown', this.handlerPressButton);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlerPressButton);
    }

    playAudio(id){
        let audio = document.getElementById(id)
        audio.currentTime = 0; 
        audio.play();
    }

    makeSoundFunction(arr, id, trigger){
        if(!arr){
            return;
        }

        // Change parent state
        this.props.setDisplay(id);

        // Change this component state
        this.setState({
            activeButton: id
        })
        console.log("State from makeSoundFunction:    " + this.state.activeButton);

        this.playAudio(trigger);
        this.buttonIDsetState(id);
        setTimeout(() => this.buttonIDsetState(''), 100);
        //console.log("From makeSoundFunction:    " + trigger);
    }

    handlerPressButton(event){
        let currentAudio = this.props.currentSoundFile
            .find(currentButton => 
            currentButton.keyCode === event.keyCode);
        
        this.makeSoundFunction(currentAudio, currentAudio.id, currentAudio.keyTrigger);
    }

    handlerClickButton = (event) => {
        let currentAudio = this.props.currentSoundFile
            .find(currentButton => 
            currentButton.id === event.currentTarget.id);

        this.makeSoundFunction(currentAudio, currentAudio.id, currentAudio.keyTrigger);
    }

    buttonIDsetState(buttonID){
        this.setState({
            activeID : buttonID,
            // isButtonActive: !this.state.isButtonActive
        });
    }
    
    render(){
        // let pad_active = !this.state.isButtonActive ? "pad_active" : "";

        // return(
        //     <div className="drum-pad-style" id="drumPad"> 
        //         {this.props.currentSoundFile.map((sound) => (
        //             <div 
        //                 key={sound.keyCode} 
        //                 className={"drum-pad"+" "+button_style}
        //                 id={sound.id}
        //                 // {sound.id === 1 ? onClick={this.handlerClickButton}}
        //                 onClick={this.handlerClickButton}
        //                 //style={this.state.buttonStyle}
        //             >
        //             <audio 
        //                 className="clip"
        //                 src={sound.url}
        //                 id={sound.keyTrigger}
        //             >
        //                 Sorry, but your browser doesn't support the audio.
        //             </audio>
        //             {sound.keyTrigger}
        //             </div>
        //         ))}
        //     </div>    
        // )
        return(
            <div className="drum-pad-style" id="drumPad"> 
                {this.props.currentSoundFile.map((sound) => (

                    sound.id === this.state.activeID ?

                    <div 
                        key={sound.keyCode} 
                        className={"drum-pad"+" "+"drum_button_active"}
                        id={sound.id}
                        onClick={this.handlerClickButton}
                    >
                        <audio 
                            className="clip"
                            src={sound.url}
                            id={sound.keyTrigger}
                        >
                            Sorry, but your browser doesn't support the audio.
                        </audio>
                        {sound.keyTrigger}
                    </div>
                    :
                    <div 
                        key={sound.keyCode} 
                        className={"drum-pad"}
                        id={sound.id}
                        // {sound.id === 1 ? onClick={this.handlerClickButton}}
                        onClick={this.handlerClickButton}
                        //style={this.state.buttonStyle}
                    >
                        <audio 
                            className="clip"
                            src={sound.url}
                            id={sound.keyTrigger}
                        >
                            Sorry, but your browser doesn't support the audio.
                        </audio>
                        {sound.keyTrigger}
                    </div>
                ))}
            </div> 
        )
    }
}

export default DrumPad;