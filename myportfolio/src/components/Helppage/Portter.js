// import React from 'react'
import React, { useState } from "react";

const Portter = () => {
  const [showPopup, setShowPopup] = useState(false);

  function handleMouseOver() {
    setShowPopup(true);
  }

  function handleMouseLeave() {
    setShowPopup(false);
  }
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div class="flex items-center mt-4 space-x-3 md:mt-6">
          <button
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Terminate
          </button>
          {showPopup && (
            <div
              style={{
                position: "absolute",
                top:"100%",
                left: "35%",
                backgroundColor: "white",
                z: "-10",
                opacity: "90%",
              }}
            >
              <div
                class="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4"
                role="alert"
              >
                <p class="font-bold">Alert</p>
                <p>Are you sure you want to Terminate the Portfolio Details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portter;
