import React from 'react';

function ControlBlock(props) {
  return (
    <div className="controls-block">
      <div className="controls_display">
        <p>Control Block</p>
        <div id="display-drum">{props.display}</div>
      </div>

      <div className="controls_sets">
        <p>Select a instrument:</p>
        <div className="instrument">
          <label htmlFor="firstFile" className="label-button">
            <span>Guitar</span>
            <div className="custom-radio-btn">
              <input
                id="firstFile"
                name="sound-file"
                type="radio"
                value="firstAudioFile"
                checked={props.soundFileName === 'firstAudioFile'}
                onChange={props.changeSoundFile}
              />
              <span className="checkmark"></span>
            </div>
          </label>
          <label htmlFor="secondFile" className="label-button">
            <span>Piano</span>
            <div className="custom-radio-btn">
              <input
                id="secondFile"
                name="sound-file"
                type="radio"
                value="secondAudioFile"
                checked={props.soundFileName === 'secondAudioFile'}
                onChange={props.changeSoundFile}
              />
              <span className="checkmark"></span>
            </div>
          </label>
        </div>
      </div>

      <div className="controls_volume">
        <div className="display-volume">
          <span>Volume:</span>
          <span id="displayVolume">
            <span>{props.volumeValue}</span>
          </span>
        </div>

        <input
          className="style-range"
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
  );
}

export default ControlBlock;
