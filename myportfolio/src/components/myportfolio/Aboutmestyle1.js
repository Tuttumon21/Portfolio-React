// import React from 'react'
import React, { useState, useEffect } from "react";

const Aboutmestyle1 = (props) => {

  return (
    <section>
  <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24 bg-white shadow rounded">
    <div class="flex w-full mx-auto text-left">
      <div class="relative inline-flex items-center mx-auto align-middle ">
        <div class="text-center">
        <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-800 md:text-5xl lg:text-6xl lg:max-w-7xl">
            ABOUT ME
            
          </h1>
          
          <p class="max-w-5xl text-justify  mx-auto mt-7 text-1xl leading-relaxed  text-gray-800">{props.aboutDesc}</p>
          
        </div>
      </div>
    </div>
    <section id="intro">
      <div class="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
        <img class="object-cover object-center w-full rounded-xl" alt="hero" src={props.aboutImage}/>
      </div>
    </section>
  </div>
</section>
  )
}

export default Aboutmestyle1