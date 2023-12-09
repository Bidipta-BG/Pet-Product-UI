import React, { useState } from "react";

const NavDropdown = ({ name, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  let data1 = [
    { name: "Option 1", link: "google.com" },
    { name: "Option 2", link: "google.com" },
    { name: "Option 2", link: "google.com" },
    { name: "Option 2", link: "google.com" },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        // className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        className={`text-black px-3 py-2  text-md font-bold inline-flex hover:text-blue-600 ${
          isOpen
            ? "text-blue-600 border-b-4 border-blue-600"
            : "border-b-4 border-white"
        } `}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {name}
        <svg
          // className=" ml-1 mt-1 h-5 w-5 transition hover:rotate-180"
          className={
            isOpen
              ? `ml-1 mt-1 h-5 w-5 transition duration-700 rotate-180`
              : `ml-1 mt-1 h-5 w-5 `
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute left-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            {data1.map((itm) => {
              return (
                <a
                  href={itm.link}
                  // className="text-black px-4 py-2 rounded-md text-sm font-bold"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50  hover:text-blue-600"
                  role="menuitem"
                  tabIndex="-1"
                >
                  {itm.name}
                </a>
              );
            })}
            {/* <a
              href="#"
              // className="text-black px-4 py-2 rounded-md text-sm font-bold"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
            >
              Option 3
            </a> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
