import React from 'react';
import './SocialFollow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function SocialFollow(props){
    return(
        <div className="social-buttons">
            <a id="tweet-quote" className="one-social-button"
            href="https://twitter.com/intent/tweett"
            title="Tweet this quote!"
            target="_blank"
            style={{background : props.color}}>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a id="git" className="button"
            title="Share this quote in Git!"
            href="https://github.com/steamCorn"
            target="_blank"
            style={{background : props.color}}>
                <FontAwesomeIcon icon={faGithub} />
            </a>   
        </div>
    )
}

export default SocialFollow;