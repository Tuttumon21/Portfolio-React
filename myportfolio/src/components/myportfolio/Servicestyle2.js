// import React from 'react'
import React, { useState, useEffect } from "react";
import Servicestyle1 from "./Servicestyle1";
const Servicestyle2 = (props) => {
    
  return (
    <section>
      {props.service2desc && props.service2name ? (<div class="relative items-center w-full  my-5 px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl  bg-white shadow">
  <div class="pb-4 border-b border-gray-600">
    <h3 class="text-5xl font-semibold leading-6 text-blue-600">Services / Skills</h3>
  </div>
    <div class="grid w-full grid-cols-1 gap-12 my-5 mx-auto lg:grid-cols-2">
        
      <div class="animate__animated animate__lightSpeedInRight p-6 shadow rounded-xl bg-amber-300">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                1
                            </span>
        </div>
        <h1 class="mx-auto mb-8 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">{props.service1name}</h1>
        <p class="mx-auto text-base leading-relaxed text-gray-700">{props.service1desc}</p>
      </div>
      <div class="animate__animated animate__lightSpeedInLeft p-6 shadow rounded-xl bg-violet-300">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                2
                            </span>
        </div>
        <h1 class="mx-auto mb-8 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">{props.service2name}</h1>
        <p class="mx-auto text-base leading-relaxed text-gray-700">{props.service2desc}</p>
      </div>
    </div>
  </div>):(<><Servicestyle1/></>)}
  
</section>

  )
}

export default Servicestyle2