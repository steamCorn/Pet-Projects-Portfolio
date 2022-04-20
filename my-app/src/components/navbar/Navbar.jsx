import React from 'react';
import './navbar.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
// import {MdWorkOutline} from 'react-icons/md';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activNav, setActivNav] = useState('#');
    return(
        <nav>
            <a href='#' 
                onClick={() => setActivNav('#')} 
                className={activNav === '#' ? 'active' : ''}>
                <AiOutlineHome/>
            </a>
            {/* <a href='#about' 
                onClick={() => setActivNav('#about')} 
                className={activNav === 'about' ? '#active' : ''}>
                <AiOutlineUser/>
            </a> */}
            {/* <a href='#experience' 
                onClick={() => setActivNav('#experience')} 
                className={activNav === '#experience' ? 'active' : ''}>
                <MdWorkOutline/>
            </a> */}
            <a href='#portfolio' 
                onClick={() => setActivNav('#portfolio')} 
                className={activNav === '#portfolio' ? 'active' : ''}>
                <BiBook/>
            </a>
            {/* <a href='#contact' 
                onClick={() => setActivNav('#contact')} 
                className={activNav === '#contact' ? 'active' : ''}>
                <BiMessageSquareDetail/>
            </a> */}

            {/* <Link 
                to="/contact"
                onClick={() => setActivNav('/contact')}
                className={activNav === '/contact' ? 'active' : ''}> 
                <BiMessageSquareDetail/>
            </Link> */}

        </nav>
    )
}

export default Navbar;