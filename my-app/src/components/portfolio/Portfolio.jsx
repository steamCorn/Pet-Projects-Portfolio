
import React from 'react';
import './portfolio.css';
import IMG1 from '../../files/portfolio_1.png';
import IMG2 from '../../files/portfolio_2.png';
import IMG3 from '../../files/portfolio_3.png';
// import MarkdownPreviewer from './projects_pages/markdownPreviewer/MarkdownPreviewer';

import { Outlet, Link} from 'react-router-dom';

const Portfolio = () => {

    
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                
                    <div className='portfolio__item'>
                        <h3>Quotes Block</h3>
                        <div className='portfolio__item-image'>
                            <img src={IMG1} />
                        </div>
                        <div className='portfolio__item-cta'>
                            {/* <a href='' className='btn' target='_blank'>Github</a> */}
                            <Link 
                                id="RouterQBlock" 
                                className='btn btn-primary' 
                                to="/quotes_block" 
                                target='_blank' > 
                                Open project
                            </Link>
                        </div>
                    </div>

                    <article className='portfolio__item'>
                        <h3>Drum Machine</h3>
                        <div className='portfolio__item-image'>
                            <img src={IMG3} />
                        </div>
                        <div className='portfolio__item-cta'>
                            {/* <a href='' className='btn' target='_blank'>Github</a>    */}
                            <Link 
                                id="RouterQBlock" 
                                className='btn btn-primary' 
                                to="/drum_machine" 
                                target='_blank' > 
                                Open project
                            </Link>
                        </div>
                    </article>

                    <article className='portfolio__item'>
                        <h3>Markdown Previewer</h3>
                        <div className='portfolio__item-image'>
                            <img src={IMG2} />
                            {/* <MarkdownPreviewer preview/> */}
                        </div>
                        <div className='portfolio__item-cta'>
                            {/* <a href='' className='btn' target='_blank'>Github</a> */}
                            <Link 
                                id="RouterQBlock" 
                                className='btn btn-primary' 
                                to="/markdown_previewer" 
                                target='_blank' > 
                                Open project
                            </Link>
                        </div>
                    </article>

                    {/* <article className='portfolio__item'>
                        <h3>Calculator</h3>
                        <div className='portfolio__item-image'>
                            <img src={IMG4} />
                        </div>
                        <div className='portfolio__item-cta'>
                            <a href='' className='btn' target='_blank'>Github</a>
                            <Link 
                                id="RouterQBlock" 
                                className='btn btn-primary' 
                                to="/calculator" 
                                target='_blank' > 
                                Open project
                            </Link>
                        </div>  
                    </article> */}
                
            </div>
            <Outlet />
        </section>
    )
}

export default Portfolio;