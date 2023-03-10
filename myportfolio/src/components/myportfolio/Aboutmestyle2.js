// import React from 'react'
import React, { useState, useEffect } from "react";

const Aboutmestyle2 = (props) => {
  



  return (
    <section>
  <div class="relative items-center w-full px-5 py-12 my-5 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24 bg-white shadow">
  <section id="intro">
      <div class="animate__animated animate__fadeInUp flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-4xl">
        <img class="object-cover object-center w-full rounded-xl" alt="hero" src={props.aboutImage}/>
      </div>
    </section>
    
    <div class="flex w-full mx-auto text-left">
      <div class="relative inline-flex items-center mx-auto align-middle">
        <div class="text-center my-7">
          <h1 class="animate__animated animate__fadeInLeftBig max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-700 md:text-5xl lg:text-6xl lg:max-w-7xl">
            About Me
          </h1>
          <p class="animate__animated animate__fadeInRightBig max-w-4xl text-justify mx-auto mt-8 text-base leading-relaxed text-gray-800">{props.aboutDesc}</p>
        </div>
      </div>
    </div>
    
  </div>
</section>

  )
}

export default Aboutmestyle2