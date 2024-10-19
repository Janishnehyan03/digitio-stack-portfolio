import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-white py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Contact Us
        </h2>
        <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-800 sm:text-4xl">
          Let’s Connect Together
        </p>
      </div>

      {/* Content Section */}
      <div className="flex justify-center items-center">
        <div className="max-w-screen-md bg-gray-100 py-12 px-10 sm:px-16 lg:px-20 rounded-2xl shadow-lg">
          <p className="mb-8 text-center text-gray-600 text-lg sm:text-xl leading-relaxed">
            We are passionate about what we do and strive to exceed your expectations 
            by delivering innovative solutions that make a lasting impact. Contact us 
            today to discuss your project and let us help you achieve your digital goals. 
            We look forward to working with you and being part of your success story.
          </p>

          {/* Contact Button */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/918086996655?text=Hi%20Digitio%20Stack"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition duration-300 focus:ring-4 focus:ring-teal-300"
            >
              Contact Us Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
