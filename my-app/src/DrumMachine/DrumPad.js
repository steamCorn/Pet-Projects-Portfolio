import React from "react";

class DrumPad extends React.Component{

    render(){
        
        return(
            <div className="drum-pad">
                <div className="drum-batton" id="Q" onClick={this.props.onClick}>
                    <audio
                        src={this.props.clip}
                    />
                    Q
                </div>
                <div className="drum-batton" id="W" onClick={this.props.onClick}>
                    W
                </div>
                <div className="drum-batton" id="E" onClick={this.props.onClick}>
                    E
                </div>
                <div className="drum-batton" id="A" onClick={this.props.onClick}>
                    A
                </div>
                <div className="drum-batton" id="S" onClick={this.props.onClick}>
                    S
                </div>
                <div className="drum-batton" id="D" onClick={this.props.onClick}>
                    D
                </div>
                <div className="drum-batton" id="Z" onClick={this.props.onClick}>
                    Z
                </div>
                <div className="drum-batton" id="X" onClick={this.props.onClick}>
                    X
                </div>
                <div className="drum-batton" id="C" onClick={this.props.onClick}>
                    C
                </div>
            </div>
        )
    }
}
export default DrumPad;