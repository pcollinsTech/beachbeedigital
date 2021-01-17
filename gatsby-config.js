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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
        ],
      },
    },   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Beach Bee Digital",
        short_name: "Beach Bee Digital",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./src/assets/images/website-icon.png", 
      },
    },

    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: process.env.API_URL || "http://localhost:1337",
    //     contentTypes: ["project", "post"],
    //     queryLimit: 1000,
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-163515722-1",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
  ],
};
