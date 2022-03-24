import React from 'react';
import CV from '../../files/CV_Marina_Parinova.pdf'

const CTA = () => {
    return(
       <div className='cta'>
           <a href={CV} download>Download CV</a>
           <a href="#contact">Let's talk</a>
       </div>
    )
}

export default CTA;