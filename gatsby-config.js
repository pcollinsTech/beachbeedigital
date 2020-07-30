module.exports = {
  siteMetadata: {
    title: "Beach Bee Digital",
    author: "Phil Collins",
    description:
      "At Beach Bee we are here to kick-start your digital strategy, giving you the advice, tools and help needed to get the ball rolling, developing your business into an unstoppable avalanche of success.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Beach Bee Digital",
        short_name: "Beach Bee Digital",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/images/website-icon.png", // This path is relative to the root of the site.
      },
    },

    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: process.env.API_URL || "http://localhost:1337",
    //     contentTypes: [
    //       // List of the Content Types you want to be able to request from Gatsby.
    //       "project",
    //       "post",
    //     ],
    //     queryLimit: 1000,
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-163515722-1", // <- your tracking ID
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
  ],
};
