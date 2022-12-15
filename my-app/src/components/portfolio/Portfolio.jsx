import React from 'react';
import { useState } from 'react';

import ProjectLayout from './ProjectLayout';
import QuotesBlock from './projects_pages/quoteMachine/QuotesBlock';
import DrumMachine from './projects_pages/drumMachine/DrumMachine';
import MarkdownPreviewer from './projects_pages/markdownPreviewer/MarkdownPreviewer';
import Calculator from './projects_pages/calculator/Calculator';
import Timer from './projects_pages/countdown/Timer';

import IMG1 from '../../files/portfolio_1.png';
import IMG2 from '../../files/portfolio_2.png';
import IMG3 from '../../files/portfolio_3.png';
import IMG4 from '../../files/portfolio_4.png';
import IMG5 from '../../files/portfolio_5.png';

import './portfolio.css';

const Portfolio = () => {
  const [visibility, setVisibility] = useState(false);
  const [projectName, setProjectName] = useState();

  function openProject() {
    setVisibility(true);
  }
  function closeProject() {
    setVisibility(false);
  }

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>

      <ProjectLayout
        onClose={closeProject}
        show={visibility}
        name={'routerQuotesBlock'}
        project={projectName}
      />

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <h3>Quotes Block</h3>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Quotes Block" />
          </div>
          <div className="portfolio__item-cta">
            <button
              className="btn"
              onClick={() => {
                openProject();
                setProjectName(<QuotesBlock />);
              }}>
              Open project
            </button>
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
            <button
              className="btn"
              onClick={() => {
                openProject();
                setProjectName(<DrumMachine />);
              }}>
              Open project
            </button>
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
            <button
              className="btn"
              onClick={() => {
                openProject();
                setProjectName(<MarkdownPreviewer />);
              }}>
              Open project
            </button>
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
            <button
              className="btn"
              onClick={() => {
                openProject();
                setProjectName(<Calculator />);
              }}>
              Open project
            </button>
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
            <button
              className="btn"
              onClick={() => {
                openProject();
                setProjectName(<Timer />);
              }}>
              Open project
            </button>
          </div>
          <div className="hide-block">
            <span className="react hide-span">React.js</span>
            <span className="css hide-span">CSS</span>
            <span className="js hide-span">JavaScript</span>
            <span className="git hide-span">GIT</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
