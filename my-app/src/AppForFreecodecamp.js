//import QuotesBlock from './QuoteMachine/QuotesBlock';
import MarkdownPreviewer from './MarkdownPreviewer/MarkdownPreviewer.js';
import './AppForFreecodecamp.css'
//import 'bootstrap/dist/css/bootstrap.css';


//https://codepen.io/colinlohner/pen/pwGozJ

//https://codepen.io/milanraring/pen/QWwyLdp?editors=1100


function AppForFreecodecamp () {
 
    return (
      <div className="appsBlockFCC">
        <h1>My applications for FreeCodeCamp</h1>
        <div className="blockWithApps">
          {/*
          <div className="oneApp" id="quoteApp">
            <h1>Quotes Block</h1>
             <QuotesBlock/> 
          </div>
          */}
          <div className="oneApp" id="markdownApp">
            <h1>Markdown Previewer</h1>
              <MarkdownPreviewer />
          </div>
        </div>
        
      </div>
      
    );
     
}

export default AppForFreecodecamp;  