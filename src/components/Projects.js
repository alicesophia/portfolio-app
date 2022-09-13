import React from "react";
import PROJECTS from "../data/projects";

const Project = props => {
  const {title, description, image, link} = props.project;

  return (
    <div style={{display: "inline-block", width: 300, margin: 10}}>
      <h3>{title}</h3>
      <img src={image} alt="Project" style={{width: 200, height: 120}}/>
      <p>{description}</p>
      <a href={link} target="_blank">See more</a>
    </div>
  )
}

const Projects = () => (
  <div>
    <h2>Highlighted projects</h2>
    <div>
      {
        PROJECTS.map(PROJECT => (
          <Project key={PROJECT.id} project={PROJECT}/>
        ))
      }
    </div>
  </div>
)

export default Projects;