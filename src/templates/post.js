// import React from "react";
// import { graphql } from "gatsby";

// import Helmet from "react-helmet";
// import ReactMarkdown from "react-markdown";

// import Layout from "../layout/layout";

// export const query = graphql`
//   query PostQuery($id: Int!) {
//     strapiPost(strapiId: { eq: $id }) {
//       content
//       published
//       strapiId
//       title

//       published_date(fromNow: true)
//       updated_at
//     }
//   }
// `;

// const Post = ({ data }) => {
//   const post = data.strapiPost;
//   return (
//     <Layout>
//       <Helmet>
//         <title>Post - Forty by HTML5 UP</title>
//         <meta name="description" content="Post Page" />
//       </Helmet>

//       <div id="main" className="alt">
//         <section id="one">
//           <div className="inner">
//             <header className="major">
//               <h1>{post.title}</h1>
//             </header>
//             <span className="image main">
//               {/* <img src={post.feautured_image.absolutePath} alt="" /> */}
//             </span>
//             <div className="">
//               <ReactMarkdown source={post.content} />
//               <p>{post.published_date}</p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Layout>
//   );
// };

// export default Post;
