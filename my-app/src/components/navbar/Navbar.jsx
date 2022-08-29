import React from 'react';
import './navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { useState } from 'react';

const Navbar = () => {
  const [activNav, setActivNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActivNav('#')}
        className={activNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActivNav('#portfolio')}
        className={activNav === '#portfolio' ? 'active' : ''}
      >
        <BiBook />
      </a>
    </nav>
  );
};

export default Navbar;
