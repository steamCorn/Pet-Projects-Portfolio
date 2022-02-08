import React from "react";
import { marked } from 'marked';

//How conect MARKED to app
//https://snyk.io/advisor/npm-package/marked#readme

//https://marked.js.org/using_advanced



marked.setOptions({
    breaks: true
})

// INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

function PreviewMarkdown(props){
    return(
        <div 
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, { renderer: renderer })
            }}
            id="preview"
        >   
        </div>
    )
}

export default PreviewMarkdown;