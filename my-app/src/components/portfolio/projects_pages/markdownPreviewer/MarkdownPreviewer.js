import React from 'react';
import EditorMarkdown from './EditorMarkdown';
import PreviewMarkdown from './PreviewMarkdown';
import DefaultText from './DefaultText';
import './markdownPreviewer.css';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: DefaultText,
    };
    this.handlerChange = this.handlerChange.bind(this);
  }
  handlerChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }

  render() {
    return (
      <div className="wraper-markdown">
        <div className="container__markdownPreviewer">
          <EditorMarkdown
            defaultText={this.state.markdown}
            onChangeEditor={this.handlerChange}
          />
        </div>
        <div className="container__markdownPreviewer previewWrap">
          <PreviewMarkdown markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
