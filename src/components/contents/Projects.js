import React from "react";
import { useSelector } from "react-redux";

import ProjectCard from "./ProjectCard";
import { Github } from "react-bootstrap-icons";

function Projects() {
  const projects = useSelector((state) => state.personalInfo.projects);
  return (
    <>
      <h2 className="text-light">Feature projects</h2>
      <p className="text-light">
        See more of my work on github
        <a href="https://github.com/hmhtom" target="_blank" className="ms-3">
          <Github color="white" size={30} />
        </a>
      </p>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </>
  );
}

export default Projects;
