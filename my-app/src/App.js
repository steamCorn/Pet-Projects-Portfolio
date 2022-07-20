import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';

// import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App () {
 
    return (
      <>
        <Header />
        <Navbar />
        <Portfolio />
      </>


      // <div>
      // <BrowserRouter>
      //   <Navbar />
      //   <Routes>
      //     <Route path='/' element={<Header />} />
      //     <Route path='/portfolio' element={<Portfolio />} />
      //   </Routes>
      // </BrowserRouter>
      // </div>
    );
     
}

export default App;  
