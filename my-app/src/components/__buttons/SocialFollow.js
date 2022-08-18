import React from 'react';
import './socialFollow.css';
import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa';

function SocialFollow(props) {
    return (
        <div className="sharing-buttons">
            <a
                id="tweet"
                className="one-social-button"
                href="https://twitter.com/nakukuevo"
                title="Follow me on twitter!"
                target="_blank"
                style={{ background: props.color }}
            >
                <FaTwitter />
            </a>
            <a
                id="git"
                className="button"
                title="This is my Git!"
                href="https://github.com/steamCorn"
                target="_blank"
                style={{ background: props.color }}
            >
                <FaGithub />
            </a>
            <a
                id="linkedin"
                className="button"
                title="You can find me on LinkedIn!"
                href="https://www.linkedin.com/in/marina-parinova-205186129/"
                target="_blank"
                style={{ background: props.color }}
            >
                <FaLinkedinIn />
            </a>
        </div>
    );
}

export default SocialFollow;
