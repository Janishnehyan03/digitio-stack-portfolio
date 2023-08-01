import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function FixedIcon() {
  return (
    <div class="fixed bottom-0 w-full">
      {/* <button class="my-8 float-right px-5 py-2 bg-red-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none">
        Back
      </button> */}
      {/* whatsapp icon button */}
      <a
        href="https://wa.me/918086996655?text=Hi%20Digitio%20Stack%20I'm%20interested%20in%20your%20service"
        class="my-8 float-right px-2 py-2 mr-4 bg-green-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none hover:bg-green-600"
      >
        <FaWhatsapp size={25} className="text-white" />
      </a>
    </div>
  );
}

export default FixedIcon;
