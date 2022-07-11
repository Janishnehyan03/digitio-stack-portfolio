import React from "react";

function Contact() {
  return (
    <div id="contact">
      {/* social media details  */}
      {/* whatsapp contact button */}
      {/* component */}
      <div className="py-16">
        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
          <span className="font-semibold text-lg text-primary-900 mb-2 block">
            Contact Us
          </span>
          <h2
            className="
                  font-bold
                  text-3xl  sm:text-4xl md:text-[40px]  text-dark mb-4  "
          >
            Feel Free to Contact Us
          </h2>

          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-between row-auto">
              <a
                href="https://wa.me/918086996655?text=Hello%20Digito%20Stack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mb-4 sm:mb-0"
              >
                <button className="bg-white-500 hover:bg-green-500 hover:text-white transition text-green-600 border border-emerald-500 font-bold py-4 px-12 rounded mr-4">
                Open Whatsapp
                </button>
              </a>
              {/* phone number */}
              <h1 className="font-bold text-sm text-dark my-4">
                +91 8086996655
              </h1>
              <h1 className="font-bold text-sm text-dark mb-4">
                digitiostack@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
