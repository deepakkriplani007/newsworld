import React from "react";
import { useState } from "react";
import Imagesrc from "../assets/logo.png";
import us from "../assets/usa.svg";
import In from "../assets/india.svg";
import ch from "../assets/china.svg";
import ru from "../assets/russia.svg";
import ca from "../assets/canada.svg";
// import "./App.css";
import { Link } from "react-router-dom";

const Navbar = ({ setCategory, setCountry, country, category }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className=" py-6 bg-white z-50 fixed w-full">
        <div className="container px-4 mx-auto">
          <div className="flex items-center relative">
            <Link className="inline-block text-lg font-bold" to="/">
              <img className="h-12" src={Imagesrc} alt="" width="auto" />
            </Link>
            <span className="text-[25px] flex self-center font-bold"></span>

            <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex lg:w-auto lg:space-x-12">
              <li className="group relative">
                <button
                  className="inline-block text-base text-gray-900 hover:text-orange-900 font-semibold"
                  onClick={() => {
                    setCategory("business");
                  }}
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  className="inline-block text-base text-gray-900 hover:text-orange-900 font-semibold"
                  onClick={() => {
                    setCategory("entertainment");
                  }}
                >
                  Entertainment
                </button>
              </li>
              <li>
                <button
                  className="inline-block text-base text-gray-900 hover:text-orange-900 font-semibold"
                  onClick={() => {
                    setCategory("general");
                  }}
                >
                  General
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory("health");
                  }}
                  className="inline-block text-base text-gray-900 hover:text-orange-900 font-semibold"
                >
                  Health
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory("science");
                  }}
                  className="inline-block text-base text-gray-900 hover:text-orange-900 font-semibold"
                >
                  Science
                </button>
              </li>
              <li>
                <button
                  className="inline-block text-base text-gray-900 hover:text-orange-900 font-semibold"
                  onClick={() => {
                    setCategory("sports");
                  }}
                >
                  sports
                </button>
              </li>
            </ul>
            <div className="block ml-auto">
              <div className="flex items-center">
                <div className="inline-block mr-24 text-base  font-semibold text-orange-900 hover:text-gray-900 group relative">
                  <div className="inline-block text-base text-gray-900  hover:text-orange-900 font-semibold">
                    Country
                  </div>
                  <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50">
                    <div className="mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                    <div className="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                      <div className="pb-3 mb-3 border-b border-gray-100">
                        <button
                          onClick={() => {
                            setCountry("in");
                          }}
                          className="flex py-3 px-4 text-base text-gray-900 hover:bg-orange-50 rounded-lg"
                        >
                          <img className="h-5" src={In} alt="" />
                          <span className="ml-3 justify-self-center">
                            INDIA
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setCountry("us");
                          }}
                          className=" flex py-3 px-4 text-base text-gray-900 hover:bg-orange-50 rounded-lg"
                        >
                          <img className="h-5" src={us} alt="" />
                          <span className="ml-3 justify-self-center">USA</span>
                        </button>
                        <button
                          onClick={() => {
                            setCountry("ru");
                          }}
                          className=" flex py-3 px-4 text-base text-gray-900 hover:bg-orange-50 rounded-lg"
                        >
                          <img className="h-5" src={ru} alt="" />
                          <span className="ml-3 justify-self-center">
                            Rusia
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setCountry("ch");
                          }}
                          className=" flex py-3 px-4 text-base text-gray-900 hover:bg-orange-50 rounded-lg"
                        >
                          <img className="h-5" src={ch} alt="" />
                          <span className="ml-3 justify-self-center">
                            China
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setCountry("ca");
                          }}
                          className=" flex py-3 px-4 text-base text-gray-900 hover:bg-orange-50 rounded-lg"
                        >
                          <img className="h-5" src={ca} alt="" />
                          <span className="ml-3 justify-self-center">
                            Canada
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:hidden ml-auto">
              <button
                className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200"
                onClick={toggleMobileMenu}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 6H21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 18H21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-16">
            <Link className="mr-auto text-2xl font-semibold leading-none">
              <img className="h-10" src={Imagesrc} alt="" width="auto" />
              <span>World</span>
            </Link>
            <button className="navbar-close" onClick={toggleMobileMenu}>
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mb-2">
              <li>
                <button
                  className="block w-full py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                  onClick={() => {
                    setCategory("business");
                  }}
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory("entertainment");
                  }}
                  className="block w-full py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                  to="/"
                >
                  Entertainment
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory("general");
                  }}
                  className="block w-full py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                >
                  General
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory("health");
                  }}
                  className="block w-full py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                >
                  Health
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory("science");
                  }}
                  className="block w-full py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                >
                  Science
                </button>
                <button
                  onClick={() => {
                    setCategory("sports");
                  }}
                  className="block w-full py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                  to="/"
                >
                  Sports
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
