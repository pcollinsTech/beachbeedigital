import React from "react";
import { Link } from "gatsby";

const Card = ({ project }) => {
  return (
    <Link to={`/project/${project.node.strapiId}`} className="">
      <div className="">
        <div className="">
          <img
            src={project.node.image.publicURL}
            alt={project.node.image.publicURL}
            height="100"
          />
        </div>
        <div className="">
          <p id="title" className="">
            {project.node.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
