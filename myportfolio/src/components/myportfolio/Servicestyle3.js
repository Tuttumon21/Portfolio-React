// import React from 'react'
import React, { useState, useEffect } from "react";
import Servicestyle2 from "./Servicestyle2";
const Servicestyle3 = () => {

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
        {details.service3desc && details.service3name ? (<div class="relative items-center w-full px-5 py-12 my-5 mx-auto md:px-12 lg:px-24 max-w-7xl bg-white shadow">
  <div class="pb-7 border-b border-gray-600">
    <h3 class="text-5xl font-semibold leading-6 text-blue-600">Services</h3>
  </div>
    <div class="grid w-full grid-cols-1 gap-12  my-5 mx-auto lg:grid-cols-3">
      <div class="p-6 shadow rounded-xl  bg-orange-300">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
        <span class="flex items-center justify-center w-12 h-12 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                1
                            </span>
        </div>
        <h1 class="mx-auto mb-8 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">{details.service1name}</h1>
        <p class="mx-auto text-base text-justify leading-relaxed text-gray-800">{details.service1desc}</p>

       
      </div>
      <div class="p-6 shadow bg-teal-300 rounded-xl">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
        <span class="flex items-center justify-center w-12 h-12 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                2
                            </span>
        </div>
        <h1 class="mx-auto mb-8 text-2xl  uppercase font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">{details.service2name}</h1>
        <p class="mx-auto text-base text-justify leading-relaxed text-gray-800">{details.service2desc}</p>
      </div>
      <div class="p-6 shadow rounded-xl bg-yellow-200">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
        <span class="flex items-center justify-center w-12 h-12 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                3
                            </span>
        </div>
        <h1 class="mx-auto mb-8 text-2xl uppercase font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">{details.service3name}</h1>
        <p class="mx-auto text-base text-justify leading-relaxed text-gray-800">{details.service3desc}</p>

        
      </div>
    </div>
  </div>):(<><Servicestyle2/></>)}
  
</section>

  )
}

export default Servicestyle3