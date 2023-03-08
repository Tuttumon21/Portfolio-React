// import React from 'react'
import React, { useState, useEffect } from "react";
const Experiencestyle1 = (props) => {
    

  return (
    <section>
  <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl bg-white shadow">
    <div class="grid w-full grid-cols-1 mx-auto">
    <div class="pb-7 border-b border-gray-600">
    <h3 class="text-5xl font-semibold leading-6 text-blue-600">Experience</h3>
  </div>
      <div class="max-w-3xl my-5 p-6 mx-auto shadow rounded-xl bg-lime-300">
        <h1 class="mx-auto mb-8 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-900 lg:text-3xl">{props.expe1name}</h1>
        <p class="mx-auto text-base text-justify leading-relaxed text-gray-700">{props.expe1desc}</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Experiencestyle1