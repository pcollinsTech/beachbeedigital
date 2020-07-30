// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(
//     `
//       {
//         posts: allStrapiPost {
//           edges {
//             node {
//               strapiId
//             }
//           }
//         }
//       }
//     `
//   );

//   if (result.errors) {
//     throw result.errors;
//   }

//   // Create blog posts pages.
//   const posts = result.data.posts.edges;

//   posts.forEach((post, index) => {
//     createPage({
//       path: `/blog/${post.node.strapiId}`,
//       component: require.resolve("./src/templates/post.js"),
//       context: {
//         id: post.node.strapiId,
//       },
//     });
//   });

//   //   projects.forEach((project, index) => {
//   //     createPage({
//   //       path: `/project/${project.node.strapiId}`,
//   //       component: require.resolve("./src/templates/project.js"),
//   //       context: {
//   //         id: project.node.strapiId,
//   //       },
//   //     });
//   //   });
// };
