// import React from 'react'
import React, { useState, useEffect } from "react";
import Experiencestyle1 from "./Experiencestyle1";
import one from "./keyboard-key-1.png";
import two from "./keyboard-key-with-number-2.png";

const Experiencestyle2 = () => {
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
  return (
    <section>
        {details.expe2desc && details.expe2name ? (<div class="relative items-center w-full px-5 py-12 my-5 mx-auto md:px-12 lg:px-24 max-w-7xl bg-white shadow">
        <div class="pb-7 border-b border-gray-600">
    <h3 class="text-5xl font-semibold leading-6 text-blue-600">Experiences</h3>
  </div>
  
  <div class="space-y-8 my-5 lg:divide-y lg:divide-gray-100">
    <div class="py-8 pl-5 sm:flex lg:items-end group bg-green-300">
      <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img class="w-full rounded-md h-28 lg:w-28 object-cover" src={one} alt="text"/>
      </div>
      <div>
        
        <p class="mt-3 text-lg font-medium leading-6">
        <h1 class="mx-auto mb-2 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-900 lg:text-3xl">{details.expe1name}</h1>
        </p>
        <p class="mt-2 text-lg text-gray-800">{details.expe1desc}</p>
      </div>
    </div>
    <div class="py-8 pl-5 sm:flex lg:items-end group bg-sky-300">
      <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img class="w-full rounded-md h-28 lg:w-28 object-cover" src={two} alt="text"/>
      </div>
      <div>
        <p class="mt-3 text-lg font-medium leading-6">
        <h1 class="mx-auto mb-2 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-900 lg:text-3xl">{details.expe2name}</h1>
        </p>
        <p class="mt-2 text-lg text-gray-800">{details.expe2desc}</p>
      </div>
    </div>
   
    
  </div>
  </div>):(<><Experiencestyle1/></>)}
        
</section>
  )
}

export default Experiencestyle2