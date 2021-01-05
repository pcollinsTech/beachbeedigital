import React from "react";
import { Link } from "gatsby";
import pic01 from "../../assets/images/pic01.jpg";
export default function ProjectCard({ project }) {
  return (
    <article
      style={{
        backgroundImage: `url(${
          project.bannerImage !== null
            ? project.bannerImage.publicURL
            : pic01
        })`,
      }}
    >
      <header className="major">
        <h3>{project.title}</h3>
        <p>{project.subTitle}</p>
      </header>
      <Link to={`/projects${project.slug}`} className="link primary"></Link>
    </article>
  );
}
