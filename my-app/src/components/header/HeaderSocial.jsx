import React from 'react';
import '../SocialFollow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function HeaderSocial(){
    
    return(
        <div className="header__socials">
            <a 
                href="https://twitter.com/nakukuevo"
                title="Follow me on twitter!"
                target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a  
                title="This is my Git!"
                href="https://github.com/steamCorn"
                target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a  
                title="You can find me on LinkedIn!"
                href="https://www.linkedin.com/in/marina-parinova-205186129/"
                target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>    
        </div>
    )
}

export default HeaderSocial;