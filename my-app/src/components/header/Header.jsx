import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../files/me.jpg';
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return(
        <header>
            <div className='conteiner header__conteiner'>
                <h5>Hello I,m</h5>
                <h1>Marina Parinova</h1>
                <h4>Front-end developer</h4>
                <CTA/>
                <HeaderSocial />
                <div>
                    <img src={ME} alt="me"/>
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;