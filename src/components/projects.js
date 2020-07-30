import React from "react";
import Card from "./card";

const Projects = ({ projects }) => {
  const leftProjectsCount = Math.ceil(projects.length / 5);
  const leftProjects = Projects.slice(0, leftProjectsCount);
  const rightProjects = Projects.slice(leftProjectsCount, projects.length);

  return (
    <div>
      <div className="">
        <div>
          {leftProjects.map((project, i) => {
            return (
              <Card project={project} key={`project__${project.node.id}`} />
            );
          })}
        </div>
        <div>
          <div className="">
            {rightProjects.map((project, i) => {
              return (
                <Card project={project} key={`project__${project.node.id}`} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
