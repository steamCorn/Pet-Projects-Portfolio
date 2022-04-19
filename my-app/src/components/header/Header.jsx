import React from 'react';
import './header.css';
import '../about/about.css';
import CTA from './CTA';
import ME from '../../files/me.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return(
        <header>
            <div className='container header__container'>
                
                <div>
                    <div className='photo'>
                        <img src={ME} alt="me"/>
                    </div>
                </div>

                <div>
                    <h4>Hello I'm</h4>
                    <h1>Marina Parinova</h1>
                    <h3>Front-end developer based in Netherland</h3>
                    <p>
                        Curious starting front-end developer with a passion 
                        for the field and the ambition to grow yourself and others around you.
                        Had not been afraid to leave my old profession and learn something new. 
                    </p>
                    <CTA/>
                    <HeaderSocial />
                </div>
                
                {/* <a href='#contact' className='scroll__down'>Scroll Down</a> */}
            </div>
            
        </header>
    )
}

export default Header;