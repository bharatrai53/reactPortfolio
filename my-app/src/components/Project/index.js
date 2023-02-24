import React from 'react';
import './Project.css'

function Project(props) {
  return (
    <div className="project-container">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="links">
        <a href={props.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={props.code} target="_blank" rel="noopener noreferrer">Source Code</a>
      </div>
    </div>
  );
}

export default Project;
