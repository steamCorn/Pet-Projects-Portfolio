import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Header from './components/header/Header';

import Portfolio from './components/portfolio/Portfolio';
import QuotesBlock from './components/portfolio/projects_pages/quoteMachine/QuotesBlock';
import MarkdownPreviewer from './components/portfolio/projects_pages/markdownPreviewer/MarkdownPreviewer';
import DrumMachine from './components/portfolio/projects_pages/drumMachine/DrumMachine';
import Calculator from './components/portfolio/projects_pages/calculator/Calculator';
import Timer from './components/portfolio/projects_pages/countdown/Timer';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Pet-Projects-Portfolio" element={<App />} />
      {/* <Route path="/home" element={<Header />} /> */}
      <Route path="/Pet-Projects-Portfolio/portfolio" element={<Portfolio />} />
      <Route
        path="/Pet-Projects-Portfolio/quotes_block"
        element={<QuotesBlock />}
      />
      <Route
        path="/Pet-Projects-Portfolio/markdown_previewer"
        element={<MarkdownPreviewer />}
      />
      <Route
        path="/Pet-Projects-Portfolio/drum_machine"
        element={<DrumMachine />}
      />
      <Route
        path="/Pet-Projects-Portfolio/calculator"
        element={<Calculator />}
      />
      <Route path="/Pet-Projects-Portfolio/timer" element={<Timer />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
