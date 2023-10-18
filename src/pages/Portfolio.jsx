import React from "react";
import Project from "../components/Project";

const projects = [
  {
    title: "Upenn: Programming Quiz",
    image: "/projectImages/Quiz.png", 
    deployedLink: "https://wjollie.github.io/Challenge-4-Upenn/",
    githubLink: "https://github.com/wJollie/Challenge-4-Upenn",
  },
  {
    title: "Upenn: Weather Dashboard",
    image: "/projectImages/WeatherDashboard.png",
    deployedLink: "https://wjollie.github.io/Upenn-Weather_Dashboard/",
    githubLink: "https://github.com/wJollie/Upenn-Weather_Dashboard",
  },
  {
    title: "Upenn: Work Day Scheduler",
    image: "/projectImages/WorkDayScheduler.png", 
    deployedLink: "https://wjollie.github.io/Upenn-Challenge5/",
    githubLink: "https://github.com/wJollie/Upenn-Challenge5",
  },
  {
    title: "Upenn: Password Generator",
    image: "/projectImages/PasswordGenerator.png", 
    deployedLink: "https://wjollie.github.io/Challenge-3-Upenn/",
    githubLink: "https://github.com/wJollie/Challenge-3-Upenn",
  },
  {
    title: "Upenn: Factors",
    image: "/projectImages/Factors.png", 
    deployedLink: "https://brousy.github.io/factors/",
    githubLink: "https://github.com/brousy/factors",
  },
  {
    title: "Upenn: Primal Planner",
    image: "/projectImages/primal-planners.PNG", 
    deployedLink: "https://primalplanner-6f3879bf7f09.herokuapp.com/",
    githubLink: "https://github.com/wJollie/Primal-Planner",

  },
  
];

const Portfolio = () => {
  return (
    <div>
      <h1 className="projectPageTitle">Portfolio</h1>
      <div className="projectWrapper">
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
    </div>
  );
};

export default Portfolio;
