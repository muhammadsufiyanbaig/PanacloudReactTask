import React from "react";
import { Link } from "react-router-dom";

const Nopage = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12 h-screen mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-4 text-sm font-semibold uppercase text-gray-800 md:text-base">
            That’s a 404
          </p>
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Page not found
          </h1>
          <p className="mb-12 max-w-screen-md text-center text-gray-800 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>
          <Link
            to="/"
            className="inline-block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 focus-visible:ring active:text-white md:text-base"
          >
            Go home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nopage;
