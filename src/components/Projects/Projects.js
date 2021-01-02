import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  console.log("Projectss", projects);
  return (
    <section id="one" className="tiles">
      {projects.map((project, i) => {
        return (
          <ProjectCard
            project={project.frontmatter}
            key={`project__${project.frontmatter.title + i}`}
          />
        );
      })}
    </section>
  );
};

export default Projects;
