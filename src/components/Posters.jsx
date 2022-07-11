import React from "react";

export default function Posters() {
  const Posters = [
    {
      id: 1,
      image: require("../assets/images/7.jpeg"),
    },
    {
      id: 2,
      image: require("../assets/images/8.jpeg"),
    },
    {
      id: 3,
      image: require("../assets/images/9.jpeg"),
    },
    {
      id: 4,
      image: require("../assets/images/10.jpeg"),
    },
    {
      id: 5,
      image: require("../assets/images/11.jpeg"),
    },
    {
      id: 6,
      image: require("../assets/images/12.jpeg"),
    },
  ];
  return (
    <div id="services">
      {/* component */}
      <div className="py-16">
        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
          <span className="font-semibold text-lg text-primary-900 mb-2 block">
            Digital Posters
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
            Posters We Have Created
          </h2>
        </div>
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            {Posters.map((poster, index) => (
              <>
                <div
                  className="bg-white rounded-2xl shadow-xl px-2 py-4 sm:px-12 lg:px-8 hover:shadow-2xl transition-shadow duration-300 group"
                  key={poster.id}
                >
                  <img
                    src={poster.image}
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
