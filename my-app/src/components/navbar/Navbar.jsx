import React from 'react';
import './navbar.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';

// import { BrowserRouter, Routes, Link} from 'react-router-dom';

const Navbar = () => {
    const [activNav, setActivNav] = useState('#');
    return(
        <nav>
            <a href='#' 
                onClick={() => setActivNav('#')} 
                className={activNav === '#' ? 'active' : ''}>
                <AiOutlineHome/>
            </a>
            <a href='#about' 
                onClick={() => setActivNav('#about')} 
                className={activNav === 'about' ? '#active' : ''}>
                <AiOutlineUser/>
            </a>
            <a href='#portfolio' 
                onClick={() => setActivNav('#portfolio')} 
                className={activNav === '#portfolio' ? 'active' : ''}>
                <BiBook/>
            </a>
            <a href='#contact' 
                onClick={() => setActivNav('#contact')} 
                className={activNav === '#contact' ? 'active' : ''}>
                <BiMessageSquareDetail/>
            </a>
        </nav>

        // <BrowserRouter>
        //     <nav>
        //         <Link to="/"> Home </Link>
        //         <Link to="/about"> About </Link>
        //         <Link to="/portfolio"> Portfolio </Link>
        //         <Link to="/contact"> Contact </Link>
        //     </nav>
        // </BrowserRouter>

    )
}

export default Navbar;