//import QuotesBlock from './QuoteMachine/QuotesBlock';
//import MarkdownPreviewer from './MarkdownPreviewer/MarkdownPreviewer.js';
import DrumMachine from './DrumMachine/DrumMachine';
import './AppForFreecodecamp.css';

function AppForFreecodecamp () {
 
    return (
      <div className="main-block">
        {/*<h4>My applications for FreeCodeCamp</h4>*/}
        <div className="block-with-apps">
          {/* 
          <div className="container-for-one-app" id="quoteApp">
            <h1>Quotes Block</h1>
             <QuotesBlock/> 
          </div>
          
          <div className="container-for-one-app" id="markdownApp">
            <h1>Markdown Previewer</h1>
              <MarkdownPreviewer />
          </div>
          */}
          <div className="container-for-one-app" id="drum-machine">
            <h1>Drum Machine</h1>
            <DrumMachine />
          </div>
        </div>
        
      </div>
      
    );
     
}

export default AppForFreecodecamp;  