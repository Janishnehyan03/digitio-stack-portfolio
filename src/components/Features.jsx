import {
  FaReact,
  FaHtml5,
  FaDatabase,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa"; // Correct icon imports from Fa (FontAwesome)
import { SiNextdotjs } from "react-icons/si"; // Import correct Next.js icon

const features = [
  {
    name: "MongoDB",
    description:
      "Most popular NoSQL database. It is document-based, distributed, and schemaless.",
    icon: <FaDatabase size={24} />,
  },
  {
    name: "React JS",
    description:
      "A JavaScript library for building user interfaces, enabling responsive web apps across all devices.",
    icon: <FaReact size={24} />,
  },
  {
    name: "HTML5",
    description:
      "The latest HTML standard, used for structuring and presenting content on the web.",
    icon: <FaHtml5 size={24} />,
  },
  {
    name: "CSS3",
    description:
      "CSS3 is the modern evolution of Cascading Style Sheets, improving document styling.",
    icon: <FaCss3 size={24} />,
  },
  {
    name: "Node JS",
    description:
      "Node.js is a JavaScript runtime, allowing JavaScript to run outside the browser for back-end applications.",
    icon: <FaNodeJs size={24} />,
  },
  {
    name: "Next JS",
    description:
      "Next.js is a React framework that offers server-side rendering, optimized for performance.",
    icon: <SiNextdotjs size={24} />,
  },
];

export default function Example() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Web Development
          </h2>
          <p className="mt-2 text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-5xl">
            Technologies We Use
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Explore the cutting-edge technologies we employ to create modern, responsive web applications.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.name} className="relative bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white">
                  {feature.icon}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
