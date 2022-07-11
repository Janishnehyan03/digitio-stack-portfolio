import React from "react";

function FixedIcon() {
  return (
    <div class="fixed bottom-0 w-full">
      {/* <button class="my-8 float-right px-5 py-2 bg-red-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none">
        Back
      </button> */}
      {/* whatsapp icon button */}
      <a
        href="https://wa.me/918086996655?text=Hi%20Digitio%20Stack%20I'm%20interested%20in%20your%20service"
        class="my-8 float-right px-5 py-2 bg-green-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none hover:bg-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-message-square"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </a>
    </div>
  );
}

export default FixedIcon;
