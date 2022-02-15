import React from "react";

class DrumPad extends React.Component{
    render(){
        return(
            <div className="drum-pad">
                <div className="drum-batton">
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" controls></audio>
                    Q
                </div>
                <div className="drum-batton">
                    W
                </div>
                <div className="drum-batton">
                    E
                </div>
                <div className="drum-batton">
                    A
                </div>
                <div className="drum-batton">
                    S
                </div>
                <div className="drum-batton">
                    D
                </div>
                <div className="drum-batton">
                    Z
                </div>
                <div className="drum-batton">
                    X
                </div>
                <div className="drum-batton">
                    C
                </div>
            </div>
        )
    }
}
export default DrumPad;