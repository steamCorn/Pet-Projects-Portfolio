import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
// import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
// import Contact from './components/contact/Contact';
// import Experience from './components/experience/Experience';
// import Footer from './components/footer/Footer';

// import { BrowserRouter, Routes, Route} from 'react-router-dom';

function Home () {
 
    return (
      <>
        <Header />
        <Navbar />
        {/* <About /> */}
        {/* <Experience /> */}
        <Portfolio />
        {/* <Contact /> */}
      </>


      // <div>
      // <BrowserRouter>
      //   <Navbar />
      //   <Routes>
      //     <Route path='/' element={<Header />} />
      //     <Route path='/about' element={<About />} />
      //     {/* <Route path='/experience' element={ <Experience /> } /> */}
      //     <Route path='/portfolio' element={<Portfolio />} />
      
      //     <Route path='/contac' element={<Contact />} />
      //   </Routes>
      //   <Footer />
      // </BrowserRouter>

      // </div>
    );
     
}

export default Home; 