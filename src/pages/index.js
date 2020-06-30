import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import { Banner, Services, Heading } from "../components";
import Layout from "../layout/layout";

import outside2 from "../assets/images/outside2.jpg";
import pic02 from "../assets/images/pic02.jpg";

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
              content:
                "Digital Agency Belfast, Web Agency, Belfast Web Developer",
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <div className="container text-center my-5 p-5">
            <p>
              At BeachBee we are here to kick-start your digital strategy,
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
          <section className="pt-5">
            <Heading title="Projects" />
            <section id="one" className="tiles">
              <article style={{ backgroundImage: `url(${outside2})` }}>
                <header className="major">
                  <h3>2 Taps Winebar</h3>
                  <p>Tapas Restaurant Belfast</p>
                </header>
                <Link to="/2taps" className="link primary"></Link>
              </article>
              <article style={{ backgroundImage: `url(${pic02})` }}>
                <header className="major">
                  <h3>Tempus</h3>
                  <p>feugiat amet tempus</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
              </article>
            </section>
          </section>
          <section id="two" className="bg-orange">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
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
