import React from 'react';
import './header.css';
import '../about/about.css';
import CTA from './CTA';
import ME from '../../files/my_photo_bg.jpg';
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return(
        <header>
            <div className='container header__container'>
                
                <div className='border-photo'>
                    <div className='photo '>
                        <img src={ME} alt="me"/>
                    </div>
                </div>

                <div className='header__container__position'>
                    <div class="flex-content">
                        <h4>Hello I'm</h4>
                        <h1>Marina Parinova</h1>
                        <h3>Front-end developer based in Netherland</h3>
                    </div>
                    
                    <p>
                        I'm a curious junior front-end developer curious about IT and technology 
                        and the ambition to grow my development skills in an innovative environment.
                        Had not been afraid to leave my old profession and learn something new.
                    </p>
                    <p>
                        You can find more information about me in my resume.
                    </p>
                </div>    
                <div className='grid-row-span'>
                    <CTA/>
                    <HeaderSocial />
                </div>
                
                {/* <a href='#contact' className='scroll__down'>Scroll Down</a> */}
            </div>
            
        </header>
    )
}

export default Header;