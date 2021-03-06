import * as React from "react";
import { graphql } from "gatsby";

import Header from "../components/header";
import Layout from "../components/layout";
import PostCards from "../components/post-cards";
import Pagination from "../components/pagination";
import Seo from "../components/seo";

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { currentPage, numPages } = pageContext;
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Two Coin Brew" />
      <Header />
      <PostCards posts={posts} />
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
};

export default BlogIndex;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image
        }
      }
    }
  }
`;
