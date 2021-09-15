import React from "react";
import { Link } from "gatsby";

const PostCards = ({ posts }) => {
  return (
    <section className="text-gray-600 body-font">
      {console.log(posts)}
      <div className="container px-5 pt-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            return (
              <div key={post.fields.slug} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="h-48 w-full object-cover object-center"
                    src={post.frontmatter.image}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {post.frontmatter.date}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {" "}
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {post.frontmatter.description || post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PostCards;
