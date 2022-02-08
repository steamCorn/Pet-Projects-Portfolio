import React from "react";

function EditorMarkdown (props) {
    return(
        <div >
            <textarea 
                id="editor" 
                type="text"
                onChange={props.onChangeEditor}
                defaultValue={props.defaultText}
            />
        </div>
    )
}

export default EditorMarkdown;