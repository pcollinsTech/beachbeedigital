import React from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";

import { Banner, Services, Heading, Projects } from "../components";
import Layout from "../layout/layout";
class HomeIndex extends React.Component {
  
  render() {
    return (
      <Layout>
        <Helmet
          title="Beach Bee Digital"
          meta={[
            {
              name: "description",
              content:
                "Similar to the bee’s on earth - our life’s purpose is to create a buzz in the sunshine while working away. Collecting all the resources to help our client’s grow, breed and produce their own sustainable digital ecosystem.",
            },
            {
              name: "keywords",
              content: "Digital Agency, Web Agency, Web Developer",
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <div className="container text-center my-5 p-5">
            <p>
              At Beach Bee we are here to kick-start your digital strategy,
              giving you the advice, tools and help needed to get the ball
              rolling, developing your business into an unstoppable avalanche of
              success.
            </p>
            <p>
              We specialise in helping startups and SME take their first steps
              towards digital success. From advice with software to providing
              marketing direction, we provide the tools and knowledge you need
              to successfully grow your business. Our aim is to help you and
              your staff to become competent, confident and independent in all
              aspects of digital strategy, ensuring the success of your
              business.
            </p>
            <p>
              Kick-start the buzz for your new company with BeachBee Digital.
            </p>
          </div>

          <Services />
          <section className="">
            <Heading title="Projects" />
            <Projects projects={this.props.data.allMarkdownRemark.nodes} />
          </section>
          <section id="two" className="bg-orange">
            <div className="inner text-center">
              <header className="major mx-auto">
                <h2>Get in Touch</h2>
              </header>
              <p>
                At Beach Bee Digital we pride ourselves on being a digital
                agency with a difference. <br />
                We help businesses get to grips of their digital footprint and
                give them the tools and advice they need to succeed. <br />
              </p>

              <ul className="actions">
                <li>
                  <Link to="#contact" className="button">Contact Us</Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          bannerImage {
            publicURL
          }
          slug
          title
          subTitle
        }
      }
    }
  }
`;
