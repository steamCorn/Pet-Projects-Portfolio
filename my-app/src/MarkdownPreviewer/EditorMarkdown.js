import React from "react";

function EditorMarkdown (props) {
    return(
        <div>
            <textarea 
                id="editor" 
                type="text"
                defaultValue={props.defaultText}
            >   
            </textarea>
        </div>
    )
}

export default EditorMarkdown;