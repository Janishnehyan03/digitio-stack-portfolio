import React from "react";

const projects = [
  {
    title: "School Website",
    description: "A modern and responsive website for schools, featuring information about courses, faculty, admissions, and student resources.",
    imageUrl: "/images/school-website.avif",
  },
  {
    title: "Personal Website",
    description: "A clean and elegant personal website, ideal for professionals and academics, with sections like biography, portfolio, and contact information.",
    imageUrl: "/images/personal-website.avif",
  },
  {
    title: "E-Commerce Website",
    description: "A fully functional e-commerce website with product listings, shopping cart, and secure payment gateway integration, designed for online stores.",
    imageUrl: "/images/ecommerce.jpg",
  },
  {
    title: "Attendance Management",
    description: "A comprehensive attendance management system that tracks student or employee attendance, integrates with schedules, and generates reports.",
    imageUrl: "/images/attendance.avif",
  },
  {
    title: "Blog Website",
    description: "A blog website with customizable themes, allowing users to post articles, interact with comments, and share content across platforms.",
    imageUrl: "/images/blog.avif",
  },
  {
    title: "Admin Portal",
    description: "An admin portal for managing users, permissions, and content. Includes features like data analytics, activity logs, and role-based access control.",
    imageUrl: "/images/admin-portal.avif",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Our Projects
        </h2>
        <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-800 sm:text-4xl">
          Innovative Solutions, Built for Impact
        </p>
      </div>

      {/* Project Cards Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
