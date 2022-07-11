import React from "react";

export default function Services() {
  const Services = [
    {
      id: 1,
      name: "UI Design",
      image: require("../assets/illustration/ui design.png"),
    },
    {
      id: 2,
      name: "Web Design",
      image: require("../assets/illustration/developer2.png"),
    },
    {
      id: 3,
      name: "Web Development",
      image: require("../assets/illustration/developer1.png"),
    },
    {
      id: 4,
      name: "Poster Design",
      image: require("../assets/illustration/designer.png"),
    },
    {
      id: 5,
      name: "Logo Design",
      image: require("../assets/illustration/logo design.png"),
    },
    {
      id: 6,
      name: "Video Editing",
      image: require("../assets/illustration/video editor.png"),
    },
  ];
  return (
    <div id="services">
      {/* component */}
      <div className="py-16">
        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
          <span className="font-semibold text-lg text-primary-900 mb-2 block">
            Services
          </span>
          <h2
            className="
                font-bold
                text-3xl
                sm:text-4xl
                md:text-[40px]
                text-dark
                mb-4
                "
          >
            Our Services
          </h2>
        </div>
        <div className="m-auto px-4 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            {Services.map((service, index) => (
              <div className="bg-white rounded-2xl shadow-xl px-2 py-4 sm:px-12 lg:px-8 hover:shadow-2xl transition-shadow duration-300 group" key={service.id}>
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-900 tracking-tight group-hover:text-purple-600">
                    {service.name}
                  </h3>
                </div>
                <img
                  src={service.image}
                  className="w-2/3 ml-auto "
                  alt="illustration"
                  loading="lazy"
                  width={900}
                  height={600}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
