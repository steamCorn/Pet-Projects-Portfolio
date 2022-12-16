import React from 'react';
import { useEffect, useState } from 'react';
import './projectLayout.css';

const ProjectLayout = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: props.show ? 'visible' : 'hidden',
        opacity: props.show ? '1' : '0',
        zIndex: props.show ? '100' : '0',
      }}
      className="overlay">
      <div className="popup">
        <span className="close" onClick={closeHandler}>
          &times;
        </span>
        <div className="content">{props.project}</div>
      </div>
    </div>
  );
};

export default ProjectLayout;
