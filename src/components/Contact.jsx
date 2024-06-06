import React from "react";

function Contact() {
  return (
    <section className="bg-white">
      <div className="lg:text-center mt-10">
        <h2 className="text-base text-primary-900 font-semibold tracking-wide uppercase">
         Contact Us
        </h2>
        <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-400 sm:text-4xl">
          Let's connect together
        </p>
      </div>
      <div className="py-8 px-4 mx-auto w-full flex justify-center items-center sm:py-16 lg:px-6">
        <div className="max-w-screen-md bg-gray-200 py-10 px-20 rounded-[20px]">
          <p className="mb-8  text-center text-gray-500 sm:text-xl">
            We are passionate about what we do, and we strive to exceed your
            expectations by delivering innovative solutions that make a lasting
            impact. Contact us today to discuss your project and let us help you
            achieve your digital goals. We look forward to working with you and
            being a part of your success story.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="https://wa.me/918086996655?text=Hi%20Digitio%20Stack"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-900 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
