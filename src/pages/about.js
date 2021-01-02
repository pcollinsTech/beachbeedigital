import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";

import pic09 from "../assets/images/phil.jpg";
import pic10 from "../assets/images/jarron.jpeg";

const About = (props) => (
  <Layout>
    <Helmet>
      <title>About - Beach Bee Digital</title>
      <meta name="description" content="About Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About</h1>
          </header>

          <hr className="major" />

          <h3>A new Kind of Digital Agency</h3>
          <p>
            <span className="image left">
              <img src={pic10} alt="" />
            </span>
            Beach Bee is your one stop shop for digital services. We have
            specific specialists for each service offered, ensuring you are
            getting the best performance, knowledge and value - it is their sole
            occupation and focus, ensuring there is no compromise regardless if
            you need help with one digital aspect or several.
          </p>
          <p>
            <span className="image right">
              <img src={pic09} alt="" />
            </span>
            Based in Belfast, we get the craic. We understand the problems faced
            by Startups and SMEs, it can often be daunting and nerve-wracking
            establishing your business in a busy online environment. That's why
            BeachBee is here to help! Regardless of your skill level, we are
            happy to offer advice or deliver the work you need to ensure your
            business is a digital success.
          </p>

          <p>
            Sometimes small businesses believe they don’t have the time, nor the
            money, to be competitive online, and this is wrong! It costs much
            less than you might think (Check out our free quotes). Your
            customers are online, and whether you want to impress them with a
            snappy website or rank #1 in your google search terms, we can help
            convince them your business is the only one for the job.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default About;
