import React from 'react';

import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa';

function HeaderSocial() {
    return (
        <div className="header__socials">
            <a
                href="https://twitter.com/nakukuevo"
                title="Follow me on twitter!"
                target="_blank"
                rel="noreferrer"
            >
                <FaTwitter />
            </a>
            <a
                title="This is my Git!"
                href="https://github.com/steamCorn"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>
            <a
                title="You can find me on LinkedIn!"
                href="https://www.linkedin.com/in/marina-parinova-205186129/"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedinIn />
            </a>
        </div>
    );
}

export default HeaderSocial;
