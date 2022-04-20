// A call to action

import React from 'react';
import CV from '../../files/CV_Marina_Parinova.pdf'

const CTA = () => {
    return(
       <div className='cta'>
           <a href={CV} download className='btn'>Download CV</a>
           {/* <a href="#contact" className='btn btn-primary'>Let's talk</a> */}
       </div>
    )
}

export default CTA;