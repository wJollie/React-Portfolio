import React from "react";
import Project from "../components/Project";

const projects = [
  {
    title: "Project 1",
    image: "image1.jpg", // Add the path to your project's image
    deployedLink: "https://example.com/project1",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    image: "image2.jpg", // Add the path to your project's image
    deployedLink: "https://example.com/project2",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    image: "image3.jpg", // Add the path to your project's image
    deployedLink: "https://example.com/project3",
    githubLink: "https://github.com/yourusername/project3",
  },
];

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Portfolio;
