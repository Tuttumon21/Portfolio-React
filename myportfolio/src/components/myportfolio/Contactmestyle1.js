// import React from 'react'
import React, { useState, useEffect } from "react";
import linkedin from "./linkedin.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import whatsapp from "./whatsapp.png";
import snapchat from "./snapchat.png";
import youtube from "./youtube.png";

function sendWhatsAppMessage(phoneNumber) {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  }

const Contactmestyle1 = () => {
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
  <div class="2xl:max-w-7xl sm:px-6 md:px-12 my-10 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto bg-white shadow rounded">
    <div class="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
      <div class="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
        <span class="mb-8 text-4xl font-bold tracking-widest text-blue-600"> Contact  Me </span>
        <h1 class="text-neutral-800 md:text-7xl lg:text-5xl mb-8 text-4xl font-bold leading-none tracking-tighter">Get in Touch</h1>
        {/* <p class="mb-8 text-base leading-relaxed text-left text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p> */}
        <div class="flex flex-wrap w-full mt-2 -mx-4 text-left">
        {details.linkedin ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={details.linkedin}>
                    <img src={linkedin} />
                  </a>
                </div>
              ) : (
                <></>
              )}
          {details.facebook ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={details.facebook}>
                    <img src={facebook} />
                  </a>
                </div>
              ) : (
                <></>
              )}
          {details.instagram ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={details.instagram}>
                    <img src={instagram} />
                  </a>
                </div>
              ) : (
                <></>
              )}
          {details.twitter ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={details.twitter}>
                    <img src={twitter} />
                  </a>
                </div>
              ) : (
                <></>
              )}
              {details.snapchat ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={details.snapchat}>
                    <img src={snapchat} />
                  </a>
                </div>
              ) : (
                <></>
              )}
              {details.phoneNumber ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href="" >
                    <img src={whatsapp} onClick={() => sendWhatsAppMessage(recipientPhoneNumber)} />
                  </a>
                </div>
              ) : (
                <></>
              )}
              {details.youtube ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={details.youtube}>
                    <img src={youtube} />
                  </a>
                </div>
              ) : (
                <></>
              )}



        </div>
      </div>
      <div class="lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0 w-full mt-12">
        <div>
          <div class="relative w-full max-w-lg">
            {/* <div class="bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob absolute top-0 rounded-full"></div> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6253260825245!2d76.29106701404498!3d10.013902992830126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081c84db3aa2e3%3A0x2f6347e37c44cc30!2sSchool%20of%20Technology%20and%20Applied%20Sciences%20(STAS)!5e0!3m2!1sen!2sin!4v1646479972384!5m2!1sen!2sin"
        title="STAS Edappally Map"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        class="rounded"
      ></iframe>
            {/* <div class="bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 absolute rounded-full"></div> */}
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contactmestyle1