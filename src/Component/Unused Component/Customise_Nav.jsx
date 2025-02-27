import React, { useState } from 'react'

export default function Customise_Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
  return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Asian Traders</span>
              </a>
              <button
                  data-collapse-toggle="navbar-dropdown"
                  type="button"
                  onClick={toggleDropdown}
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-dropdown"
                  aria-expanded="false"
              >
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
              </button>
              <div className={`${isOpen ? 'w-full md:block md:w-auto' : 'hidden w-full md:block md:w-auto'}`} id="navbar-dropdown">
                  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                      </li>
                      <li>
                          <div id="dropdownNavbarLink" onClick={toggleDropdown2} className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                              Dropdown
                              <svg className="w-2.5 h-2.5 ms-2.5" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg>
                          </div>
                          {/* Dropdown menu */}
                          <div id="dropdownNavbar" className={`${isOpen2 ? "z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" : "hidden"}`}>
                              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                  <li>
                                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                  </li>
                                  <li>
                                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                  </li>
                                  <li>
                                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                  </li>
                              </ul>
                              <div className="py-1">
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                      </li>
                      <li>
                          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                      </li>
                      <li>
                          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

/* #dropdownNavbar{
     position: absolute;
    left: 0;
    right: 0;
    padding-top: 20px;
    z-index: 10;} */