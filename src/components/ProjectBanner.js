import React from "react";

const ProjectBanner = ({ title, image, subtitle }) => (
	<section
		id="banner"
		className="style2"
		style={{
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
		}}
	>
		<div className="inner">
			<header className="major">
				<h1>{title}</h1>
			</header>
			<div className="content">
				<p>{subtitle}</p>
			</div>
		</div>
	</section>
);

export default ProjectBanner;
