import React from "react";
import DefaultText from './DefaultText';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markdown: DefaultText,
            editorMaximized: false,
            previewMaximized: false
        }
    }

    handleEditorMaximize(){
        this.setState({
            editorMaximized: !this.state.editorMaximized
        });
    }
    handlerPreviewMaximized(){
        this.setState({
            previewMaximized: !this.state.previewMaximized
        });
    }

    render(){
        return(
            <div id="wraperMarkdown">
                <textarea id="editor">{DefaultText}</textarea>
                <div id="preview"></div>
            </div>
        )
    }
}

export default MarkdownPreviewer;