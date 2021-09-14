import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <nav className="bg-gray-900 p-4 mt-0 w-full">
          <div className="container mx-auto flex items-center">
            <div className="flex text-white font-extrabold">
              <a
                className="flex text-white text-base no-underline hover:text-white hover:no-underline"
                href="#"
              >
                👻{" "}
                <span className="hidden w-0 md:w-auto md:block pl-1">
                  Ghostwind CSS
                </span>
              </a>
            </div>
            <div className="flex pl-4 text-sm">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="mr-2">
                  <a
                    className="inline-block py-2 px-2 text-white no-underline"
                    href="index.html"
                  >
                    HOME
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                    href="#"
                  >
                    LINK
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                    href="#"
                  >
                    LINK
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                    href="#"
                  >
                    LINK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*slide in nav*/}
        <div
          id="header"
          className="bg-white fixed w-full z-10 top-0 hidden animated"
          style={{ opacity: ".95" }}
        >
          <div className="bg-white">
            <div className="flex flex-wrap items-center content-center">
              <div className="flex w-1/2 justify-start text-white font-extrabold">
                <a
                  className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2"
                  href="#"
                >
                  👻{" "}
                  <span className="hidden w-0 md:w-auto md:block pl-1">
                    Ghostwind CSS
                  </span>
                </a>
              </div>
              <div className="flex w-1/2 justify-end content-center">
                <p className="hidden sm:block mr-3 text-center h-14 p-4 text-xs">
                  <span className="pr-2">Share this</span> 👉
                </p>
                <a
                  className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
                  href="https://twitter.com/intent/tweet?url=#"
                  style={{ backgroundColor: "#33b1ff" }}
                >
                  <svg
                    className="fill-current text-white h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
                  </svg>
                </a>
                <a
                  className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
                  href="https://www.facebook.com/sharer/sharer.php?u=#"
                  style={{ backgroundColor: "#005e99" }}
                >
                  <svg
                    className="fill-current text-white h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/*Progress bar*/}
          <div
            id="progress"
            className="h-1 bg-white shadow"
            style={{
              background:
                "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
            }}
          />
        </div>
        {/*Title*/}
        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">
            08 APRIL 2019 <span className="text-gray-900">/</span> GETTING
            STARTED
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
            {/*Subscribe*/}
            <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
              <h2 className="font-bold break-normal text-2xl md:text-4xl">
                Subscribe to Ghostwind CSS
              </h2>
              <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
                Get the latest posts delivered right to your inbox
              </h3>
              <div className="w-full text-center pt-4">
                <form action="#">
                  <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* /Subscribe*/}
            {/*Author*/}
            <div className="flex w-full items-center font-sans p-8 md:p-24">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <div className="flex-1">
                <p className="text-base font-bold text-base md:text-xl leading-none">
                  Ghostwind CSS
                </p>
                <p className="text-gray-600 text-xs md:text-base">
                  Tailwind CSS version of Ghost's Casper theme by{" "}
                  <a
                    className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                    href="https://www.tailwindtoolbox.com"
                  >
                    TailwindToolbox.com
                  </a>
                </p>
              </div>
              <div className="justify-end">
                <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
                  Read More
                </button>
              </div>
            </div>
            {/*/Author*/}
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {previous && (
              <div key={previous.fields.slug} className="p-4 md:w-1/2">
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
                      <Link to={previous.fields.slug} itemProp="url">
                        <span itemProp="headline">{previous.title}</span>
                      </Link>
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {previous.frontmatter.description || previous.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {next && (
              <div key={next.fields.slug} className="p-4 md:w-1/2">
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
                      <Link to={next.fields.slug} itemProp="url">
                        <span itemProp="headline">{next.title}</span>
                      </Link>
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {next.frontmatter.description || next.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <footer className="bg-gray-900">
          <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div className="w-full mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a
                  className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
                  href="#"
                >
                  👻{" "}
                  <span className="text-base text-gray-200">Ghostwind CSS</span>
                </a>
              </div>
              <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                  <li>
                    <a
                      className="inline-block py-2 px-3 text-white no-underline"
                      href="index.html"
                    >
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
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
