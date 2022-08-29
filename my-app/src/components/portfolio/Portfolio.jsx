import React from 'react';
import './portfolio.css';
import IMG1 from '../../files/portfolio_1.png';
import IMG2 from '../../files/portfolio_2.png';
import IMG3 from '../../files/portfolio_3.png';
import IMG4 from '../../files/portfolio_4.png';
import IMG5 from '../../files/portfolio_5.png';

import { Outlet, Link } from 'react-router-dom';

const Portfolio = () => {
  const stack = ['HTML5', 'CSS', 'JavaScript', 'React.js', 'GIT'];

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <h3>Quotes Block</h3>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Quotes Block" />
          </div>
          <div className="portfolio__item-cta">
            <Link
              id="routerQuotesBlock"
              className="btn"
              to="/quotes_block"
              target="_blank"
            >
              Open project
            </Link>
          </div>
          <div className="hide-block">
            <span className="react hide-span">React.js</span>
            <span className="css hide-span">CSS</span>
            <span className="js hide-span">JavaScript</span>
            <span className="git hide-span">GIT</span>
          </div>
        </article>

        <article className="portfolio__item">
          <h3>Drum Machine</h3>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Drum Machine" />
          </div>
          <div className="portfolio__item-cta">
            <Link
              id="routerDrumMachine"
              className="btn"
              to="/drum_machine"
              target="_blank"
            >
              Open project
            </Link>
          </div>
          <div className="hide-block">
            <span className="react hide-span">React.js</span>
            <span className="css hide-span">CSS</span>
            <span className="js hide-span">JavaScript</span>
            <span className="git hide-span">GIT</span>
          </div>
        </article>

        <article className="portfolio__item">
          <h3>Markdown Previewer</h3>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Markdown Previewer" />
          </div>
          <div className="portfolio__item-cta">
            <Link
              id="routerMarkdownPreviewer"
              className="btn"
              to="/markdown_previewer"
              target="_blank"
            >
              Open project
            </Link>
          </div>
          <div className="hide-block">
            <span className="react hide-span">React.js</span>
            <span className="css hide-span">CSS</span>
            <span className="js hide-span">JavaScript</span>
            <span className="git hide-span">GIT</span>
          </div>
        </article>

        <article className="portfolio__item">
          <h3>Calculator</h3>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Calculator" />
          </div>
          <div className="portfolio__item-cta">
            <Link
              id="routerCalculator"
              className="btn"
              to="/calculator"
              target="_blank"
            >
              Open project
            </Link>
          </div>
          <div className="hide-block">
            <span className="react hide-span">React.js</span>
            <span className="css hide-span">CSS</span>
            <span className="js hide-span">JavaScript</span>
            <span className="git hide-span">GIT</span>
          </div>
        </article>

        <article className="portfolio__item">
          <h3>Countdown Timer</h3>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Timer" />
          </div>
          <div className="portfolio__item-cta">
            <Link id="routerTimer" className="btn" to="/timer" target="_blank">
              Open project
            </Link>
          </div>
          <div className="hide-block">
            <span className="react hide-span">React.js</span>
            <span className="css hide-span">CSS</span>
            <span className="js hide-span">JavaScript</span>
            <span className="git hide-span">GIT</span>
          </div>
        </article>
      </div>
      <Outlet />
    </section>
  );
};

export default Portfolio;
