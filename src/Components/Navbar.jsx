import React, { useState, useEffect } from "react";
import Searchbar from "./Home/Searchbar";
import mainIcon from "../Icons/main.png";
import NavDropdown from "./Home/NavDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);

  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (navbar.getBoundingClientRect().top === 0.5) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div
      id="navbar"
      className={`  ${
        scroll ? "bg-[hsla(0,0%,100%,.8)]" : "bg-[#141728]"
      } z-30 transition-all ease-linear duration-200 sticky top-[0.25px] flex`}
    >
      <div className="bg-white h-[6rem] w-full">
        <div className=" mx-auto px-2 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0 flex">
                <img
                  style={{ width: 60, height: 60 }}
                  src={mainIcon}
                  alt="My Icon"
                />
                <span className="text-black text-4xl font-black px-2">
                  Website
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  {/* <a
                  href="#"
                  className="text-black px-3 py-2 rounded-md text-lg font-bold"
                >
                  Home
                </a> */}
                  <NavDropdown
                    name="Home"
                    data={[
                      { name: "Option 1", link: "google.com" },
                      { name: "Option 2", link: "google.com" },
                      { name: "Option 2", link: "google.com" },
                      { name: "Option 2", link: "google.com" },
                    ]}
                  />
                  {/* <a
                  href="#"
                  className="text-black px-3 py-2 rounded-md text-lg font-bold"
                >
                  About
                </a> */}
                  <NavDropdown
                    name="Features"
                    data={[
                      { name: "Option 1", link: "google.com" },
                      { name: "Option 2", link: "google.com" },
                      { name: "Option 2", link: "google.com" },
                      { name: "Option 2", link: "google.com" },
                    ]}
                  />
                  {/* <a
                  href="#"
                  className="text-black px-3 py-2 rounded-md text-lg font-bold"
                >
                  Services
                </a> */}
                  <NavDropdown
                    name="Category"
                    data={[
                      { name: "Option 1", link: "google.com" },
                      { name: "Option 2", link: "google.com" },
                      { name: "Option 2", link: "google.com" },
                      { name: "Option 2", link: "google.com" },
                    ]}
                  />
                  <a
                    href="#"
                    className="text-black px-3 py-2 text-md font-bold hover:text-blue-600 hover:border-b-4 border-blue-600"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-black px-3 py-2 text-md font-bold hover:text-blue-600 hover:border-b-4 border-blue-600"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div>
                <Searchbar onSearch={handleSearch} />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
