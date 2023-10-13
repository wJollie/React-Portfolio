// Project.js
import React from "react";

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
}

export default Project;
