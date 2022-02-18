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
                        <input type="radio" value="First file" name="sound-file"/>
                        First
                    </label>
                    <label>
                        <input type="radio" value="Second file" name="sound-file"/>
                        Second
                    </label>  
                </div>
            </div>
        )
    }
}
export default ControlBlock;