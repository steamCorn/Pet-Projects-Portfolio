import React from 'react';

const ItemPortfolio = (props) => {
  return (
    <article className="item">
      <h3>{props.projectName}</h3>
      <div className="item-image">
        <img src={props.image} alt={props.projectName} />
      </div>
      <div className="item-button">
        <button className="btn" onClick={props.onOpen}>
          Open project
        </button>
      </div>
      <div className="hide-block">
        {props.techStack.map((stack, i) => (
          <span key={i} className="hide-span">
            {stack}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ItemPortfolio;
