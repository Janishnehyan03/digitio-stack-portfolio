import React from "react";

export default function Projects() {
  const Services = [
    {
      id: 1,
      name: "CP Creatives",
      image: require("../assets/images/1.png"),
      url: "http://www.cpcreatives.unaux.com/index.html",
    },
    {
      id: 2,
      name: "AL Vahda",
      image: require("../assets/images/2.png"),
      url: "https://vahda.herokuapp.com/",
    },
    {
      id: 3,
      name: "E Commerce",
      image: require("../assets/images/3.png"),
      url: "https://mern-amazon-shop.herokuapp.com/",
    },
    {
      id: 4,
      name: "DHDC Manoor",
      image: require("../assets/images/4.png"),
      url: "http://dhdcmanoor.unaux.com/index.php",
    },
    {
      id: 5,
      name: "The Read",
      image: require("../assets/images/5.png"),
      url: "http://www.the-read.in/",
    },
    {
      id: 6,
      name: "Jamia Thahqeeq",
      image: require("../assets/images/6.png"),
      url: "http://jamiathahqeeq.in/",
    },
  ];
  return (
    <div id="services">
      {/* component */}
      <div className="py-16">
        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
          <span className="font-semibold text-lg text-primary-900 mb-2 block">
            Websites 
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
           Websites We Have Created
          </h2>
        </div>
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            {Services.map((service, index) => (
              <>
                <a href={service.url}>
                  <div
                    className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:shadow-2xl transition-shadow duration-300 group hover:scale-105"
                    key={service.id}
                  >
                    <div className="mb-12 space-y-4">
                      <h3 className="text-2xl font-semibold text-purple-900 tracking-tight group-hover:text-purple-600 text-center">
                        {service.name}
                      </h3>
                    </div>
                    <img
                      src={service.image}
                      className="w-full ml-auto "
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                </a>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
