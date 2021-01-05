exports.createPages = async ({ graphql, actions }) => {
  // const { createPage } = actions;
  // const result = await graphql(
  //   `
  //     {
  //       posts: allStrapiPost {
  //         edges {
  //           node {
  //             strapiId
  //             title
  //           }
  //         }
  //       }
  //       projects: allStrapiProject {
  //         edges {
  //           node {
  //             strapiId
  //             client
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  // if (result.errors) {
  //   throw result.errors;
  // }

  // // Create blog posts pages.
  // const posts = result.data.posts.edges;
  // const projects = result.data.projects.edges;

  // posts.forEach((post, index) => {
  //   createPage({
  //     path: `/blog/${post.node.title.toLowerCase().replace(/\W+/g, "-")}`,
  //     component: require.resolve("./src/templates/post.js"),
  //     context: {
  //       id: post.node.strapiId,
  //     },
  //   });
  // });

  // projects.forEach((project, index) => {
  //   createPage({
  //     path: `/projects/${project.node.client
  //       .toLowerCase()
  //       .replace(/\W+/g, "-")}`,
  //     component: require.resolve("./src/templates/project.js"),
  //     context: {
  //       id: project.node.strapiId,
  //     },
  //   });
  // });
  const { createPage } = actions
  const mdproject = require.resolve(`./src/templates/mdproject.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  console.log("result", result)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/projects${node.frontmatter.slug}`,
      component: mdproject,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
};
