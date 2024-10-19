import React from "react";
import {
  FaBook,
  FaChartBar,
  FaCode,
  FaIdBadge,
  FaPen,
  FaShoppingCart,
} from "react-icons/fa";

function Services() {
  return (
    <div id="services" className="pt-20 pb-12 bg-white">
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-4 text-4xl font-bold text-gray-900">
            Explore What We Offer
          </p>
          <p className="mt-2 text-lg text-gray-600">
            We deliver top-notch services in various fields with a focus on quality and innovation.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Block */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <FaCode className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Design</h3>
            <p className="text-gray-600">
              We create visually stunning and user-friendly websites that leave a lasting impression.
            </p>
          </div>

          {/* Service Block */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <FaChartBar className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Development</h3>
            <p className="text-gray-600">
              Our experts build robust and scalable web solutions aligned with your business goals.
            </p>
          </div>

          {/* Service Block */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <FaIdBadge className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Mobile App Development
            </h3>
            <p className="text-gray-600">
              We bring your app idea to life with seamless user experiences on iOS and Android.
            </p>
          </div>

          {/* Service Block */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <FaBook className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Educational Websites
            </h3>
            <p className="text-gray-600">
              We create educational websites that offer a seamless learning experience.
            </p>
          </div>

          {/* Service Block */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <FaPen className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Blog Websites</h3>
            <p className="text-gray-600">
              We develop captivating blog websites with valuable content and customizable layouts.
            </p>
          </div>

          {/* Service Block */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <FaShoppingCart className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              E-commerce Websites
            </h3>
            <p className="text-gray-600">
              We build e-commerce websites that drive sales and provide seamless shopping experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
