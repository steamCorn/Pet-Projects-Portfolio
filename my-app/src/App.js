import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
// import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
// import Testimonials from './components/testimonials/Testimonials';

function App () {
 
    return (
        <>
          <Header />
          <Nav />
          <About />
          {/* <Experience /> */}
          {/* <Services /> */}
          <Portfolio />
          {/* <Testimonials /> */}
          <Contact />
        </>
    );
     
}

export default App;  