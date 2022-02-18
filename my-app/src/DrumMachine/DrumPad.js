import React from "react";

class DrumPad extends React.Component{

    render(){
        return(
            <div className="drum-pad-style" id="drumPad"> 
                {this.props.currentSounFile.map((sound) => (
                    <div 
                        key={sound.keyCode} 
                        className="drum-pad drum-batton-style"
                        id={sound.id}
                        onClick={this.props.onClick}
                    >
                        <audio 
                            className="clip"
                            src={sound.url}
                            id={sound.keyTrigger}
                            onClick={this.props.onClick}
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