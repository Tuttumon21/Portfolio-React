// import React from "react";
import React, { useState, useEffect } from "react";
function sendWhatsAppMessage(phoneNumber) {
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  window.open(url, "_blank");
}
const Contactmestyle2 = () => {
  const [details, setDetails] = useState("");
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const user = await localStorage.getItem("email");
    fetch("http://localhost:5000/portfolio/details/" + user)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };
  const recipientPhoneNumber = `${details.phoneNumber}`;

  return (
    <section>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="flex flex-wrap items-center mx-auto max-w-7xl">
          <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div class="relative w-full max-w-lg">
                <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div class="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.682218151197!2d76.28941462010933!3d10.01809845365926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081c6b5edc1005%3A0x9345f5fa44ff5d3e!2sEdappally%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1646480648658!5m2!1sen!2sin"
                    title="Edappally Map"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span class="mb-8 text-4xl font-bold tracking-widest text-blue-600">
              {" "}
              Contact Me{" "}
            </span>
            <h1 class="text-neutral-900 md:text-7xl lg:text-5xl mb-8 text-4xl font-bold leading-none tracking-tighter">
              Get in Touch
            </h1>

            <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
              We would love to hear from you! Please visit us at our Social
              Media sites.
            </p>
            <div class="flex flex-wrap w-full mt-1 -mx-4 text-left">
              {details.phoneNumber ? (
                <div class="w-1/4 p-4 mt-4 sm:w-1/4">
                  <button
                    onClick={() => sendWhatsAppMessage(recipientPhoneNumber)}
                    class="items-center block px-2 py-1 text-base font-medium text-center bg-green-500 text-white transition duration-500 ease-in-out transform border-2 border-green-500 shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    whatsapp
                  </button>
                </div>
              ) : (
                <></>
              )}
              {details.linkedin ? (
                <div class="w-1/4 p-4 mt-4 sm:w-1/4">
                    <a href={details.linkedin}>
                  <button class="items-center block px-2 py-1 text-base font-medium text-center bg-blue-700 text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    LinkedIn
                   
                  </button>
                  </a>
                </div>
              ) : (
                <></>
              )}
              {details.facebook ? (
                <div class="w-1/4 p-4 mt-4 sm:w-1/4">
                    <a href={details.facebook}>
                  <button class="items-center block px-2 py-1 text-base font-medium text-center bg-blue-600 text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Facebook
                  </button></a>
                </div>
              ) : (
                <></>
              )}
              {details.instagram ? (
                <div class="w-1/4 p-4 mt-4 sm:w-1/4">
                    <a href={details.instagram}>
                  <button
                    onClick={details.instagram}
                    class="items-center block px-2 py-1 text-base font-medium text-center bg-orange-400 text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    instagram
                  </button>
                  </a>
                </div>
              ) : (
                <></>
              )}
              {details.twitter ? (
                <div class="w-1/4 p-4 mt-4 sm:w-1/4">
                    <a href={details.twitter}>
                  <button class="items-center block px-6 py-1 text-base font-medium text-center bg-sky-500 text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    twitter
                  </button>
                  </a>
                </div>
              ) : (
                <></>
              )}

              {details.snapchat ? (
                <div class="w-1/4 p-4 mt-4 sm:w-1/4">
                    <a href={details.snapchat}>
                  <button class="items-center block px-3 py-1 text-base font-medium text-center bg-yellow-300 text-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    snapchat
                  </button>
                  </a>
                </div>
              ) : (
                <></>
              )}
              {details.youtube ? (
                <div class="w-1/4 p-4 mt-4 sm:w-/4">
                     <a href={details.youtube}>
                  <button class="items-center block px-3 py-1 text-base font-medium text-center bg-red-600 text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    youtube
                  </button>
                  </a>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactmestyle2;
