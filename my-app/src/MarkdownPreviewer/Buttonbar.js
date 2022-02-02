import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faWindowMinimize } from '@fortawesome/free-regular-svg-icons'


function Buttonbar (props){
    return(
        
        <div >
            <div className="showBlock" >
                {props.nameBar}
                <input 
                    id="windowMinimize"
                    type="checkbox" 
                    name="window" 
                    value={"minimize"}
                    onClick={props.onClick}
                    onChange={props.onChange}
                />
                <span className="icon-window" id="minimize">
                    <FontAwesomeIcon icon={faWindowMinimize} />
                </span>
                <span className="icon-window" id="maximize">
                    <FontAwesomeIcon icon={faWindowMaximize} />
                </span>
            </div>
        </div>
 
    )
};

export default Buttonbar;