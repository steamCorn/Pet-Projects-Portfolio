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
import ItemPortfolio from './ItemPortfolio';

const Portfolio = () => {
  const [visibility, setVisibility] = useState(false);
  const [project, setProject] = useState();

  function openProject(value) {
    setVisibility(true);
    setProject(value);
  }
  function closeProject() {
    setVisibility(false);
  }

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <ItemPortfolio
          projectName={'Countdown Timer'}
          onOpen={() => {
            openProject(<Timer />);
          }}
          image={IMG5}
          techStack={['React.js', 'JavaScript', 'CSS', 'GIT']}
        />
        <ItemPortfolio
          projectName={'Calculator'}
          onOpen={() => {
            openProject(<Calculator />);
          }}
          image={IMG4}
          techStack={['React.js', 'JavaScript', 'CSS', 'GIT']}
        />
        <ItemPortfolio
          projectName={'Drum Machine'}
          onOpen={() => {
            openProject(<DrumMachine />);
          }}
          image={IMG3}
          techStack={['JavaScript', 'CSS', 'GIT']}
        />
        <ItemPortfolio
          projectName={'Quotes Block'}
          onOpen={() => {
            openProject(<QuotesBlock />);
          }}
          image={IMG1}
          techStack={['JavaScript', 'CSS', 'GIT']}
        />
        <ItemPortfolio
          projectName={'Markdown Previewer'}
          onOpen={() => {
            openProject(<MarkdownPreviewer />);
          }}
          image={IMG2}
          techStack={['JavaScript', 'CSS', 'GIT']}
        />
      </div>
      <ProjectLayout
        onClose={closeProject}
        show={visibility}
        name={'routerQuotesBlock'}
        project={project}
      />
    </section>
  );
};

export default Portfolio;
