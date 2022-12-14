import React from 'react';

const Button = ({ buttonDisplay, clickHandler }) => (
  <button className="portfolio__item-cta btn" onClick={clickHandler}>
    {buttonDisplay}
  </button>
);

export default Button;
