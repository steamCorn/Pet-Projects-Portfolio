import React from "react";

function ControlBlock (props){

    return(
        <div className="controls-block">
            <div className="block">
                <p>Control Block</p>
                <div id="display">{props.display}</div>
            </div>
            <div className="block">
                <p>Style change</p>
                <input 
                    id="firstFile"
                    // name="sound-file"
                    type="radio" 
                    // value="firstAudioFile" 
                    checked = {props.soundFileName === 'firstFile'}
                    onChange={props.changeSoundFile}
                />
                <label htmlFor='firstFile'>First</label>
                <input 
                    id="secondFile"
                    // name="sound-file"
                    type="radio" 
                    // value="secondAudioFile" 
                    checked = {props.soundFileName === 'secondFile'}
                    onChange={props.changeSoundFile}
                />
                <label htmlFor='secondFile'>Second</label>  
            </div>
            <div className="block">
                <p>Volume</p>
                <div id="displayVolume">{props.volumeDisplay}</div>
                <input 
                    type="range" 
                    id="volume" 
                    name="volume" 
                    min="0" 
                    max="100"
                    value={props.volumeValue}
                    onChange={props.adjustVolume}
                    />
            </div>
        </div>
    )
}

export default ControlBlock;