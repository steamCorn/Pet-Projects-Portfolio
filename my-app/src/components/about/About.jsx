import React from 'react';
import './about.css';

const About = () => {
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About My Skills</h2>

            <div className='container about__container'>
                
                <div className='about__me'>
                    <div className='about__me-image'>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>

                        <article className='about__card'>
                            <h5>Programming Skills</h5>
                        </article>
                        
                        <article className='about__card'>
                            <h5>Soft Skills</h5>
                        </article>
                            
                        <article className='about__card'>
                            <h5>Courses</h5>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;