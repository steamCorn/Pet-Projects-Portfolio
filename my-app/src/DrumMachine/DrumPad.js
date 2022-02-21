import React from "react";

class DrumPad extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           buttensStyle: {} 
        }
        this.playAudio = this.playAudio.bind(this);
        this.handlerPressButton =this.handlerPressButton.bind(this);
        this.handlerClickButton =this.handlerClickButton.bind(this);
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

    handlerPressButton(event){
        let currentAudio = this.props.currentSoundFile
            .find(currentButton => 
            currentButton.keyCode === event.keyCode);
        
        if(!currentAudio){
            return
        }
        this.setState({
            displayHandler: currentAudio.id
        });
        this.playAudio(currentAudio.keyTrigger);
        console.log(currentAudio.keyTrigger);
    }

    handlerClickButton = (event) => {
        let currentAudio = this.props.currentSoundFile
            .find(currentButton => 
            currentButton.id === event.currentTarget.id);

        if(!currentAudio){
            return
        }
        this.setState({
            displayHandler: currentAudio.id
        });
        this.playAudio(currentAudio.keyTrigger);
        console.log("state:   " + currentAudio.keyTrigger);
    }

    // The style for pressed drum pad button


    // const drum_button_style = {
    //     background: "linear-gradient(170deg, #359eff 5%, #3a00df 95%)"
    // }
    render(){
        return(
            <div className="drum-pad-style" id="drumPad"> 
                    {this.props.currentSoundFile.map((sound) => (
                        <div 
                            key={sound.keyCode} 
                            className="drum-pad"
                            // style={props.currentDrumpButton? drum_button_style : {}}
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
                    ))}
                </div>
        )
    }
}

export default DrumPad;