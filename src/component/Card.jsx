import React from "react";

import Imagesrc from "../assets/logo.png";

const Card = ({ post }) => {
  const handleclick = () => {
    window.location.href = `${post.url}`;
  };
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        {post.urlToImage ? (
          <img src={post.urlToImage} alt="image" />
        ) : (
          <div className="flex justify-center content-center">
            <img className=" h-36 " src={Imagesrc} art="logo" />
          </div>
        )}
      </div>
      <div className="p-6 ">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {post.description ? (
            <div>{post.title?.slice(0, 46)}...</div>
          ) : (
            <div>{post.title?.slice(0, 102)}...</div>
          )}
        </h5>
        {post.description ? (
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {post.description?.slice(0, 80)}...
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className=" p-6 pt-0">
        <button
          onClick={handleclick}
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
