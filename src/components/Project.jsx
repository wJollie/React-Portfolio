// Project.js
import React from "react";

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img className="projectImageClass" src={image} alt={title} />
      <div className="projectLinks">
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        View Project       
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
      </div>
    </div>
  );
}

export default Project;
