import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
// import Experience from './components/experience/Experience';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App () {
 
    return (
        <>
          <Header />
          <Nav />
          <About />
          {/* <Experience /> */}
          <Portfolio />
          <Contact />
        </>
    );
     
}

export default App;  