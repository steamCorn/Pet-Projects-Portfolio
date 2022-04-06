import React from 'react';
import './socialFollow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function SocialFollow(props){
    
    return(
        <div className="sharing-buttons">
            <a id="tweet" 
                className="one-social-button"
                href="https://twitter.com/nakukuevo"
                title="Follow me on twitter!"
                target="_blank"
                style={{background : props.color}}>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a id="git" 
                className="button"
                title="This is my Git!"
                href="https://github.com/steamCorn"
                target="_blank"
                style={{background : props.color}}>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a id="linkedin" 
                className="button"
                title="You can find me on LinkedIn!"
                href="https://www.linkedin.com/in/marina-parinova-205186129/"
                target="_blank"
                style={{background : props.color}}>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>    
        </div>
    )
}

export default SocialFollow;