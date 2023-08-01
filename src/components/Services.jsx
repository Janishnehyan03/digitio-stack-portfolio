import React from "react";
import {
  FaBook,
  FaChartBar,
  FaCode,
  FaIdBadge,
  FaPen,
  FaShoppingCart
} from "react-icons/fa";
function Services() {
  return (
    <div>
      {/* component */}
      <div
        id="services"
        className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
      >
        <div className="container xl:max-w-6xl mx-auto px-4 ">
          {/* Heading start */}
          <div className="lg:text-center">
            <h2 className="text-base text-primary-900 font-semibold tracking-wide uppercase">
              services
            </h2>
            <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-500 sm:text-4xl">
              Know About Our Services
            </p>
          </div>
          {/* End heading */}
          {/* row */};
          <div className="flex flex-wrap flex-row -mx-4 text-center mt-14">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <FaCode className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Web Design
                </h3>
                <p className="text-gray-500">
                  We create visually stunning and user-friendly websites that
                  leave a lasting impression.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <FaChartBar className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Web Development
                </h3>
                <p className="text-gray-500">
                  Our experts build robust and scalable web solutions aligned
                  with your business goals.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <FaIdBadge className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Mobile App Development
                </h3>
                <p className="text-gray-500">
                  We bring your app idea to life with seamless user experiences
                  on iOS and Android.
                </p>
              </div>

              {/* end service block */}
            </div>
            {/* ... */}
          </div>
          <div className="flex flex-wrap flex-row -mx-4 text-center mt-14">
  <div
    className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
    data-wow-duration="1s"
    style={{
      visibility: "visible",
      animationDuration: "1s",
      animationName: "fadeInUp",
    }}
  >
    {/* service block */}
    <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
      <div className="inline-block text-gray-900 mb-4">
        {/* icon */}
        <FaBook className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
        Educational Websites
      </h3>
      <p className="text-gray-500">
        We create educational websites that offer a seamless learning experience   </p>
    </div>
    {/* end service block */}
  </div>
  <div
    className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
    data-wow-duration="1s"
    data-wow-delay=".1s"
    style={{
      visibility: "visible",
      animationDuration: "1s",
      animationDelay: "0.1s",
      animationName: "fadeInUp",
    }}
  >
    {/* service block */}
    <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
      <div className="inline-block text-gray-900 mb-4">
        {/* icon */}
        <FaPen className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
        Blog Websites
      </h3>
      <p className="text-gray-500">
        We develop captivating blog websites with valuable content and customizable layouts.
      </p>
    </div>
    {/* end service block */}
  </div>
  <div
    className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
    data-wow-duration="1s"
    data-wow-delay=".3s"
    style={{
      visibility: "visible",
      animationDuration: "1s",
      animationDelay: "0.3s",
      animationName: "fadeInUp",
    }}
  >
    {/* service block */}
    <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
      <div className="inline-block text-gray-900 mb-4">
        {/* icon */}
        <FaShoppingCart className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
        E-commerce Websites
      </h3>
      <p className="text-gray-500">
        We build e-commerce websites that drive sales and provide seamless shopping experiences.
      </p>
    </div>
    {/* end service block */}
  </div>
  {/* ... */}
</div>
          {/* end row */}
        </div>
      </div>
    </div>
  );
}

export default Services;
