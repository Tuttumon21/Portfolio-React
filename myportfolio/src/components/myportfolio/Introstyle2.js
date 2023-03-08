// import React from 'react'
import React, { useState, useEffect } from "react";
import linkedin from "./linkedin.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";


const Introstyle2 = (props) => {
  

  return (
    <section>
      <div class="my-5 px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-white shadow rounded">
        <div class="flex flex-wrap items-center mx-auto max-w-7xl">
          <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div class="relative w-full max-w-lg">
                <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-40 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div class="relative">
                  <img
                    class="object-cover object-center mx-auto w-96 h-96 rounded-lg shadow-2xl"
                    alt="hero"
                    src={props.imagePath}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span class="mb-8 text-4xl font-bold tracking-widest text-neutral-800 uppercase">
              I AM
              <span class="text-blue-600">
                {" "}
                {props.firstname} {props.lastname}
              </span>
            </span>
            <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-800 md:text-7xl lg:text-5xl">
              i am a{" "}
              <span class="animate-pulse text-blue-600">
                {props.jobtitle}
              </span>
            </h1>
            <p class="mb-8 text-xl leading-relaxed text-left text-gray-800">
              {props.desc}
            </p>
            <div class="flex flex-wrap w-full mt-2 -mx-4 text-left">
                
            {props.linkedin ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={props.linkedin}>
                    <img src={linkedin} />
                  </a>
                </div>
              ) : (
                <></>
              )}

              {props.facebook ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={props.facebook}>
                    <img src={facebook} />
                  </a>
                </div>
              ) : (
                <></>
              )}
              {props.instagram ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={props.instagram}>
                    <img src={instagram} />
                  </a>
                </div>
              ) : (
                <></>
              )}
              {props.twitter ? (
                <div class="w-20 p-4 mt-4 sm:w-20">
                  <a href={props.twitter}>
                    <img src={twitter} />
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

export default Introstyle2;
