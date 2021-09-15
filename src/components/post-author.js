import React from "react";
import Avatar from "../images/avatar-gatsby-image";

const PostAuthor = () => {
  return (
    <div className="flex w-full items-center font-sans p-8 md:p-24">
      <div className="w-16 h-16 rounded-full mr-4" alt="Avatar of Author">
        <Avatar />
      </div>
      <div className="flex-1">
        <p className="text-base font-bold text-base md:text-xl leading-none">
          Joe Trubenstein
        </p>
        <p className="text-gray-600 text-xs md:text-base">
          Is coding stuff @
          <a
            className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
            href="https://trubenstein.tech"
          >
            trubenstein.tech
          </a>
          {' '} and living in Tokyo, Japan.
        </p>
      </div>
    </div>
  );
};
export default PostAuthor;
