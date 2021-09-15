import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import PostNav from "../components/post-nav";
import Seo from "../components/seo";
import PostAuthor from "../components/post-author";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div>
        <PostNav />
        {/*Title*/}
        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">
            {post.frontmatter.date}
          </p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">
            {post.frontmatter.title}
          </h1>
        </div>
        {/*image*/}
        <div
          className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
          style={{
            backgroundImage: `url('${post.frontmatter.image}')`,
            height: "75vh",
          }}
        />
        {/*Container*/}
        <div className="container max-w-5xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <div
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.html }}
              className="prose bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
              style={{ fontFamily: "Georgia,serif" }}
            ></div>
            <PostAuthor />
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {previous && (
              <div key={previous.fields.slug} className="p-4 md:w-1/2">
                <Link to={previous.fields.slug} itemProp="url">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="h-48 w-full object-cover object-center"
                      src={previous.frontmatter.image}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {previous.frontmatter.date}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {" "}
                        <span itemProp="headline">
                          {previous.frontmatter.title}
                        </span>
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {previous.frontmatter.description ||
                          previous.frontmatter.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {next && (
              <div key={next.fields.slug} className="p-4 md:w-1/2">
                <Link to={next.fields.slug} itemProp="url">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="h-48 w-full object-cover object-center"
                      src={next.frontmatter.image}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {next.frontmatter.date}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {" "}
                        <span itemProp="headline">
                          {next.frontmatter.title}
                        </span>
                      </h1>

                      <p className="leading-relaxed mb-3">
                        {next.frontmatter.description ||
                          next.frontmatter.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
      }
    }
  }
`;
