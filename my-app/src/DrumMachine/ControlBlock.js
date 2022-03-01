import React from "react";

class ControlBlock extends React.Component{
    render(){
        return(
            <div className="controls-block">
                <p>Control Block</p>
                <div id="display">{this.props.display}</div>
                <div className="button-changing-audio-files">
                    <p>Style change</p>
                    <label>
                        <input type="radio" value="First-file" name="sound-file"/>
                        First
                    </label>
                    <label>
                        <input type="radio" value="Secon-file" name="sound-file"/>
                        Second
                    </label>  
                </div>
                <div>
                    <p>Volume</p>
                    <span id="displayVolume">{this.props.volumeDisplay}</span>
                    <input 
                        type="range" 
                        id="volume" 
                        name="volume" 
                        min="0" 
                        max="10" 
                        step="10"
                        value={this.props.value}
                        adjustVolume={this.props.adjustVolume}
                        />
                </div>
            </div>
        )
    }
}
export default ControlBlock;