import {
  FaReact,
  FaHtml5,
  FaDatabase,
  FaCss3,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";

const features = [
  {
    name: "MongoDB",
    description:
      "Most popular NoSQL database. It is a document-based, distributed, and schemaless database. It is the most popular database for storing and retrieving data.",
    icon: <FaDatabase size={30} />,
  },
  {
    name: "React JS",
    description:
      "A JavaScript library for building user interfaces. It is used for building responsive web apps that work on all devices.",
    icon: <FaReact size={30} />,
  },
  {
    name: "HTML5",
    description:
      "HTML5 is the fifth and current version of the HTML standard. HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
    icon: <FaHtml5 size={30} />,
  },
  {
    name: "CSS3",
    description:
      "CSS3 is the latest evolution of the Cascading Style Sheets language and aims to standardize and improve the rendering of documents written in the style sheet language.",
    icon: <FaCss3 size={30} />,
  },
  {
    name: "Node JS",
    description:
      "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside a web browser.",
    icon: <FaNodeJs size={30} />,
  },
  {
    name: "PHP",
    description:
      "PHP is a popular general-purpose scripting language that is especially suited to web development.",
    icon: <FaPhp size={30} />,
  },
];

export default function Example() {
  return (
    <section id="features" className="py-12 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-900 font-semibold tracking-wide uppercase">
            Web Development
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Technologies we use
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-900 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
