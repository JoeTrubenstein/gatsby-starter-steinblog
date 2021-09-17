import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostNav from "../components/post-nav";
import Avatar from "../images/avatar-gatsby-image";
import Vending from "../images/vending-gatsby-image";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About " />
      <PostNav />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Vending />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Avatar />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Joe Trubenstein
                  </h2>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4" />
                  <p className="text-base">Site Author and Developer</p>
                </div>
              </div>

              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  For the love of vending machine coffee
                </h2>
                <br />
                <p className="leading-relaxed text-lg mb-4">
                  Despite regularly suffering from panic attacks and living with
                  a remarkably weak stomach, I find myself consuming this
                  caffeinated, acidic poison every day. I drink it almost
                  exclusively black as well. Partly because I want to cut down
                  on sugar, partly because I hate myself. Two Coin Brew is a
                  kind of diary - short pieces of nonfiction with a can of
                  coffee at the center of every tale. Sometimes humorous,
                  sometimes heartbreaking, it's an honor and a pleasure to share
                  my blog with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
