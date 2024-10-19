import React from "react";

function About() {
  return (
    <section id="about" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
            Who We Are
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pr-8 text-left">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Digitio Stack, we are a team of full-stack web and mobile app developers
              specializing in scalable software solutions. Our goal is to ensure that your 
              software grows alongside your business, offering robust and flexible systems 
              tailored to your needs.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Benefit from our extensive experience and knowledge as technical architects, 
              where we focus on understanding your business goals to create customized solutions 
              that drive success and meet your unique requirements.
            </p>

            {/* Key Points */}
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-3">
              <li className="flex items-start">
                <span className="w-[8px] h-[8px] bg-teal-500 mr-3 mt-2 rounded-full" />
                Passionate about creating exceptional digital experiences.
              </li>
              <li className="flex items-start">
                <span className="w-[8px] h-[8px] bg-teal-500 mr-3 mt-2 rounded-full" />
                Specializing in scalable software solutions for businesses.
              </li>
              <li className="flex items-start">
                <span className="w-[8px] h-[8px] bg-teal-500 mr-3 mt-2 rounded-full" />
                Leveraging the latest technologies to drive innovation.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              alt="Company Image"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
