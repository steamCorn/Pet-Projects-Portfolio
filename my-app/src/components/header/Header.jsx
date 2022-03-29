import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../files/me.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return(
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Marina Parinova</h1>
                <h5 className='text-light'>Front-end developer</h5>
                <CTA/>
                <HeaderSocial />
                <div className='photo'>
                    <img src={ME} alt="me"/>
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;