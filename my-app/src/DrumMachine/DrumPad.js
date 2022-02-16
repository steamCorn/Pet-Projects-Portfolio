import React from "react";

class DrumPad extends React.Component{

    render(){
        
        return(
            <div className="drum-pad">
                <div className="drum-batton" id="Q">
                    Q
                </div>
                <div className="drum-batton" id="W">
                    W
                </div>
                <div className="drum-batton" id="E">
                    E
                </div>
                <div className="drum-batton" id="A">
                    A
                </div>
                <div className="drum-batton" id="S">
                    S
                </div>
                <div className="drum-batton" id="D">
                    D
                </div>
                <div className="drum-batton" id="Z">
                    Z
                </div>
                <div className="drum-batton" id="X">
                    X
                </div>
                <div className="drum-batton" id="S">
                    C
                </div>
            </div>
        )
    }
}
export default DrumPad;