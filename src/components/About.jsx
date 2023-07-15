import React from "react";

function About() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-primary-900 font-semibold tracking-wide uppercase">
            About us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-400 sm:text-4xl">
            Who We Are
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div className="w-full md:w-1/2 md:pr-8 text-left">
            <p className="text-lg text-gray-700 mb-6">
              At Digitio Stack, we are a team of full-stack web developers and
              mobile app developers specializing in creating scalable software
              solutions that grow alongside your business. With our expertise as
              technical architects, we ensure that your software is robust,
              flexible, and capable of meeting your evolving needs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Benefit from our collective talent as technical architects, where
              we bring extensive knowledge and insights to every project. By
              understanding your business objectives, we create customized
              solutions that drive success and align with your unique
              requirements.
            </p>
            <ul className="list-disc list-inside text-lg ml-4 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="w-[8px] h-[8px] bg-green-500 mr-2 mt-1 rounded-full" />
                <span>
                  Passionate about creating exceptional digital experiences.
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-[8px] h-[8px] bg-green-500 mr-2 mt-1 rounded-full" />
                <span>
                  We specialize in scalable software solutions for businesses.
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-[8px] h-[8px] bg-green-500 mr-2 mt-1 rounded-full" />
                <span>
                  Leveraging the latest technologies to drive innovation.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              alt="Company Image"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
