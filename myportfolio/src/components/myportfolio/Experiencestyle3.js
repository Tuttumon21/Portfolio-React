// import React from 'react'
import React, { useState, useEffect } from "react";
import Experiencestyle1 from "./Experiencestyle1";
import Experiencestyle2 from "./Experiencestyle2";
import img1 from "./undraw_Done_re_oak4.png";
import img2 from "./undraw_Experts_re_i40h.png";
import img3 from "./undraw_Project_completed_re_jr7u.png";
const Experiencestyle3 = (props) => {

  return (
    <section>
      {props.expe3desc && props.expe3name ? (
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl bg-white shadow">
          <div class="pb-7 border-b border-gray-600">
            <h3 class="text-5xl font-semibold leading-6 text-blue-600">
              Experiences / Achievement
            </h3>
          </div>
          <div class="grid w-full my-10 grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="animate__animated animate__fadeInUpBig p-6 shadow rounded-xl bg-emerald-400">
              <img
                class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={img1}
                alt="blog"
              />

              <h1 class="mx-auto mb-8 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-900 lg:text-3xl">
                {props.expe1name}
              </h1>
              <p class="mx-auto text-base text-justify leading-relaxed text-gray-800">
                {props.expe1desc}
              </p>
            </div>
            <div class="animate__animated animate__fadeInRightBig p-6 shadow rounded-xl bg-fuchsia-400">
              <img
                class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={img2}
                alt="blog"
              />

              <h1 class="mx-auto mb-8 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-900 lg:text-3xl">
                {props.expe2name}
              </h1>
              <p class="mx-auto text-base text-justify leading-relaxed text-gray-800">
                {props.expe2desc}
              </p>
            </div>
            <div class="animate__animated animate__fadeInDownBig p-6 shadow rounded-xl bg-rose-400">
              <img
                class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={img3}
                alt="blog"
              />
              <h1 class="mx-auto mb-8 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-900 lg:text-3xl">
                {props.expe3name}
              </h1>
              <p class="mx-auto text-base text-justify leading-relaxed text-gray-800">
                {props.expe3desc}
              </p>
            </div>
          </div>
        </div>
      ):(<><Experiencestyle2/></>)}
    </section>
  );
};

export default Experiencestyle3;
