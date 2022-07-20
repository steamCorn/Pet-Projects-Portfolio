import React from 'react';
import { marked } from 'marked';

//How conect MARKED to app
//https://snyk.io/advisor/npm-package/marked#readme
//https://marked.js.org/using_advanced

//Markdown previewer interprets carriage returns and renders them as <br> (line break) elements
marked.setOptions({
    breaks: true,
});
const renderer = new marked.Renderer();

function PreviewMarkdown(props) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, { renderer: renderer }),
            }}
            id="preview"
        ></div>
    );
}

export default PreviewMarkdown;
