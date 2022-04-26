import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';

import Portfolio from './components/portfolio/Portfolio';
import QuotesBlock from './components/portfolio/projects_pages/quoteMachine/QuotesBlock';
import MarkdownPreviewer from './components/portfolio/projects_pages/markdownPreviewer/MarkdownPreviewer';
import DrumMachine from './components/portfolio/projects_pages/drumMachine/DrumMachine';
import Calculator from './components/portfolio/projects_pages/calculator/Calculator';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/home' element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/quotes_block' element={<QuotesBlock />} />
            <Route path='/markdown_previewer' element={<MarkdownPreviewer />} />
            <Route path='/drum_machine' element={<DrumMachine />} />
            <Route path='/calculator' element={<Calculator/>} />
            
        </Routes>
    </BrowserRouter>, 
    document.getElementById('root') 
);
