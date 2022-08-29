import React from 'react';
import { FaWindowMaximize, FaWindowMinimize } from 'react-icons/fa';

function Buttonbar(props) {
  return (
    <div className="buttonbar">
      <span>{props.nameBar}</span>
      <input
        id="windowMinimize"
        type="checkbox"
        name="window"
        value={'minimize'}
        onClick={props.onClick}
        onChange={props.onChange}
      />
      <span className="icon-window" id="minimize">
        <FaWindowMaximize />
      </span>
      <span className="icon-window" id="maximize">
        <FaWindowMinimize />
      </span>
    </div>
  );
}

//export default Buttonbar;
