import React from "react";

const PostNav = () => {
  return (
    <nav className="bg-gray-900 p-4 mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <a
            className="flex text-white text-base no-underline hover:text-white hover:no-underline"
            href="../"
          >
            👻{" "}
            <span className="hidden w-0 md:w-auto md:block pl-1">
              Joe Trubenstein
            </span>
          </a>
        </div>
        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-2">
              <a
                className="inline-block py-2 px-2 text-white no-underline"
                href="../"
              >
                Home
              </a>
            </li>
            <li className="mr-2">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="../about"
              >
                About
              </a>
            </li>
            <li className="mr-2">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="../contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PostNav;
