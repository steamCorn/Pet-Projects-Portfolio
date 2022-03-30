
import React from 'react';
import './portfolio.css';
import QuotesBlock from './projects_pages/quoteMachine/QuotesBlock';
// import MarkdownPreviewer from './projects_pages/markdownPreviewer/MarkdownPreviewer';
// import DrumMachine from './projects_pages/drumMachine/DrumMachine';
// import Calculator from './projects_pages/calculator/Calculator';
import IMG1 from '../../files/portfolio_1.png';
import IMG2 from '../../files/portfolio_2.png';
import IMG3 from '../../files/portfolio_3.png';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';



const Portfolio = () => {
    return(
        
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                
                    <div className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={IMG1} />
                        </div>
                        <h3>Quotes Block</h3>
                        <div className='portfolio__item-cta'>
                            {/* <a href='' className='btn' target='_blank'>Github</a> */}
                            <a href='' className='btn btn-primary' target='_blank'>Open project</a>
                        </div>
                        {/* <QuotesBlock /> */}
                    </div>

                    <article className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={IMG2} />
                        </div>
                        <h3>Drum Machine</h3>
                        <div className='portfolio__item-cta'>
                            {/* <a href='' className='btn' target='_blank'>Github</a>    */}
                            <a href='' className='btn btn-primary' target='_blank'>Open project</a>
                        </div>
                        {/* <DrumMachine /> */}
                    </article>

                    <article className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={IMG3} />
                        </div>
                        <h3>Markdown Previewer</h3>
                        <div className='portfolio__item-cta'>
                            {/* <a href='' className='btn' target='_blank'>Github</a> */}
                            <a href='' className='btn btn-primary' target='_blank'>Open project</a>
                        </div>
                        {/* <MarkdownPreviewer /> */}
                    </article>

                    {/* <article className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={IMG4} />
                        </div>
                        <h3>Calculator</h3>
                        <div className='portfolio__item-cta'>
                            <a href='' className='btn' target='_blank'>Github</a>
                            <a href='' className='btn btn-primary' target='_blank'>Open project</a>
                        </div>
                            <Calculator /> 
                    </article> */}
                
            </div>
        </section>
            
        
    )
}

export default Portfolio;