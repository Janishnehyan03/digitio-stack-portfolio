import React from "react";
import { FaCheck } from "react-icons/fa";

function Pricing() {
  return (
    <section className="bg-white ">
      <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
        <span className="font-semibold text-lg text-primary-900 mb-2 block">
          Pricing
        </span>
        <h2 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-500 sm:text-4xl">
          Get A Website Today
        </h2>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-100 rounded-lg border border-gray-100 shadow  xl:p-8  ">
            <h3 className="mb-4 text-2xl font-semibold">Starter Package</h3>
            <p className="font-light text-gray-500 sm:text-lg ">
              The Starter Package offers an excellent entry point for
              individuals and small businesses seeking a professional online
              presence.
            </p>
            {/* <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-gray-600">₹13K</span>
            </div> */}
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left my-8">
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />
                <span>Customized website design with up to 5 pages.</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Responsive design to ensure optimal viewing on different
                  devices.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Contact form and integration with social media platforms
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Basic search engine optimization (SEO) to improve your
                  website's visibility.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
            >
             Learn More
            </a>
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-100 rounded-lg border border-gray-100 shadow  xl:p-8  ">
            <h3 className="mb-4 text-2xl font-semibold">Advanced Package</h3>
            <p className="font-light text-gray-500 sm:text-lg ">
              The Advanced Package is designed for businesses and organizations
              looking to enhance online presence and engage with their audience
              on a deeper level.{" "}
            </p>
            {/* <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-gray-600">₹25K</span>
            </div> */}
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left my-8">
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Custom website design with up to 10 pages and preferences.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Advanced SEO implementation for better search engine rankings.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Enhanced user experience through interactive elements.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Basic e-commerce capabilities to showcase and sell products or
                  services.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
            >
             Learn More
            </a>
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-100 rounded-lg border border-gray-100 shadow  xl:p-8  ">
            <h3 className="mb-4 text-2xl font-semibold">Full Stack Package</h3>
            <p className="font-light text-gray-500 sm:text-lg ">
              The Full Stack Package is a comprehensive solution for businesses
              and organizations with more extensive requirements and a focus on
              robust functionality
            </p>
            {/* <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-gray-600">₹35K</span>
            </div> */}
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left my-8">
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Custom website design with unlimited pages and intricate
                  design elements.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Advanced SEO strategy and implementation to drive targeted
                  traffic.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Ongoing maintenance, security updates, and technical support.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheck size={20} className="text-green-500" />

                <span>
                  Database integration for data management and storage.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
            >
             Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
