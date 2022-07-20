import React from 'react';
import './portfolio.css';
import IMG1 from '../../files/portfolio_1.png';
import IMG2 from '../../files/portfolio_2.png';
import IMG3 from '../../files/portfolio_3.png';

import { Outlet, Link} from 'react-router-dom';

const Portfolio = () => {
    
    return(
        <section id='portfolio'>
            <h1>Portfolio</h1>

            <div className='container portfolio__container'>
                
                    <div className='portfolio__item'>
                        <h3>Quotes Block</h3>
                        <div className='portfolio__item-image'>
                            <img src={IMG1} alt='Quotes Block'/>
                        </div>
                        <div className='portfolio__item-cta'>
                            <Link 
                                id="RouterQBlock" 
                                className='btn' 
                                to="/quotes_block" 
                                target='_blank' > 
                                Open project
                            </Link>
                        </div>
                    </div>

                    <article className='portfolio__item'>
                        <h3>Drum Machine</h3>
                        <div className='portfolio__item-image'>
                            <img src={IMG3} alt='Drum Machine'/>
                        </div>
                        <div className='portfolio__item-cta'>
                            <Link 
                                id="RouterQBlock" 
                                className='btn' 
                                to="/drum_machine" 
                                target='_blank' > 
                                Open project
                            </Link>
                        </div>
                    </article>

                    <article className='portfolio__item'>
                        <h3>Markdown Previewer</h3>
                        <div className='portfolio__item-image'>
                            <img src={IMG2} alt='Markdown Previewer'/>
                        </div>
                        <div className='portfolio__item-cta'>
                            <Link 
                                id="RouterQBlock" 
                                className='btn' 
                                to="/markdown_previewer" 
                                target='_blank' > 
                                Open project
                            </Link>
                        </div>
                    </article>

                    <article className='portfolio__item'>
                        <h3>Calculator</h3>
                        <div className='portfolio__item-image'>
                            <img src={IMG3} alt='Calculator'/>
                        </div>
                        <div className='portfolio__item-cta'>
                            <Link 
                                id="RouterQBlock" 
                                className='btn' 
                                to="/calculator" 
                                target='_blank' > 
                                Open project
                            </Link>
                        </div>  
                    </article>
                
            </div>
            <Outlet />
        </section>
    )
}

export default Portfolio;