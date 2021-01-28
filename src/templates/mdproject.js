import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import ProjectBanner from "../components/ProjectBanner";
import Img from "gatsby-image"

export default function MDProject({ data }) {
  const { markdownRemark: { frontmatter } } = data 
  return (
    <Layout>
        <Helmet>
            <title>{frontmatter.title}</title>
            <meta name="description" content={frontmatter.title} />
        </Helmet>

        <ProjectBanner
            title={frontmatter.title}
            subtitle={frontmatter.subTitle}
            image={frontmatter.bannerImage.publicURL}
        />
        <div id="main">
			<section id="one">
				<div className="inner">
					<header className="major">
						<h2>Challenge</h2>
					</header>
					<p dangerouslySetInnerHTML={{ __html: frontmatter.challenge}} style={{wordWrap: 'break-word'}}/>
				</div>
			</section>
			<section id="two" className="spotlights">
				<section>
					<Link to="/generic" className="image">
						<img src={frontmatter.resolutionImage.publicURL} alt="" />
					</Link>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>What we Did</h3>
							</header>
							<p dangerouslySetInnerHTML={{ __html: frontmatter.resolution}}/>
						</div>
					</div>
				</section>
				<section>
					<Link to="/generic" className="image">
						{/* <img src={pic09} alt="" /> */}
						<img src={frontmatter.conclusionImage.publicURL} alt="" />
					</Link>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Conclusion</h3>
							</header>
							<p dangerouslySetInnerHTML={{ __html: frontmatter.conclusion}}/>
						</div>
					</div>
				</section>
			</section>
		</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subTitle
        challenge
        resolution
        resolutionImage {
           publicURL
        }
        conclusion
        conclusionImage {
           publicURL
        }
        bannerImage {
          publicURL
        }
      }
    }
  }
`