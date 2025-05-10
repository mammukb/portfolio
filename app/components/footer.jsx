import React from "react";

import Image from "next/image";

function footer() {
  return (
    <div>
      <footer className="bg-green-800 text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
     
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Muhammed K B
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-2">
              <div>
                <h2 className=" text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Links
                </h2>
                <hr className="my-5 text-white"/>
                <ul className=" font-medium">
                  <li className="mb-4">
                    <a href="#home" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#skills" className="hover:underline">
                     Skills
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#projects" className="hover:underline">
                      Projects
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-10">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow me
                </h2>
                <ul className=" font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/mammukb"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.linkedin.com/in/muhammedkb"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6  sm:mx-auto  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm  sm:text-center ">
              © 2024{" "}
              <a href="https://muhammedkb.vercel.app/" className="hover:underline">
                mammukb
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/muhammed.kb.39?mibextid=ZbWKwL"
                className=""
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              {/* <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
  </a>*/}
              <a
                href="https://instagram.com/__mammu_kb__?igshid=ZDdkNTZiNTM="
                className=" ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M15 0H5C2.239 0 0 2.239 0 5v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V5C20 2.239 17.761 0 15 0zm2 15c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V5c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v10z" />
                  <path d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM18 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>

              <a
                href="https://github.com/mammukb"
                className=" ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="http://www.linkedin.com/in/muhammedkb"
                className=" ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.6 0H2.4C1.1 0 0 1.1 0 2.4v19.2C0 22.9 1.1 24 2.4 24h19.2c1.3 0 2.4-1.1 2.4-2.4V2.4C24 1.1 22.9 0 21.6 0zM7.9 20.2H4.2V9.3h3.7V20.2zM5.9 7.9C4.8 7.9 4 7.1 4 6s0.8-1.9 1.9-1.9 1.9 0.8 1.9 1.9-0.9 1.9-1.9 1.9zM20.2 20.2h-3.7v-6.3c0-1.5-0.5-2.6-1.9-2.6s-2.2 1.1-2.2 2.6v6.3H9.6V9.3h3.5v1.4c0.6-1.1 1.7-1.8 3-1.8 2.1 0 3.8 1.7 3.8 3.8V20.2z"></path>
                </svg>
                <span className="sr-only">LinkedIn page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
