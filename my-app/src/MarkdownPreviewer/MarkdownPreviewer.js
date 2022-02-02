import React from "react";
import EditorMarkdown from './EditorMarkdown';
import PreviewMarkdown from './PreviewMarkdown';
import Buttonbar from './Buttonbar';
import DefaultText from './DefaultText';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markdown: DefaultText
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
        this.handlerPreviewMaximized = this.handlerPreviewMaximized.bind(this);
    }
    handlerChange(event){
        this.setState({
            markdown: event.target.value,
            editorMaximized: false,
            previewMaximized: false
        })
    }
    handleEditorMaximize(){
        this.setState({
            editorMaximized: !this.state.editorMaximized
        });
        console.log(this.state.editorMaximized);
    }
    handlerPreviewMaximized(){
        this.setState({
            previewMaximized: !this.state.previewMaximized
        });
        console.log(this.state.previewMaximized);
    }



    render(){
        const show={
            height: '20vh'
        }
        const hideWindow = {
            height: '3vh',
            transition: "all .9s ease"
        }
        return(
            <div id="wraperMarkdown">
                <div className={"navbar-container"}>
                    <Buttonbar 
                        nameBar= "Editor"
                        onClick={this.handleEditorMaximize}
                    />
                    <EditorMarkdown defaultText={this.state.markdown}/>
                </div>
                <div className={"navbar-container"}>
                    <Buttonbar 
                        nameBar="Previewer"
                        onClick={this.handlerPreviewMaximized}
                    />
                    <PreviewMarkdown defaultText={this.state.markdown}/>
                </div>
            </div>
        )
    }
}

export default MarkdownPreviewer;