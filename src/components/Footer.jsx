import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 rounded-lg shadow">
      <div className="w-full h-full flex items-center justify-center mx-auto max-w-screen-xl p-4">
        <span className="text-gray-500 text-center">
          © 2024
          <a href="https://flowbite.com/" className="hover:underline">
            {" "}
            Digitio Stack
          </a>
          . All Rights Reserved.
        </span>
        {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6">
          About
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6">
          Licensing
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </li>
    </ul> */}
      </div>
    </footer>
  );
}

export default Footer;
