import React from 'react'
import Navbarlog from './Navbarlog'
import img1 from "./img/undraw_Web_devices_re_m8sc.png";
import img2 from "./img/undraw_Portfolio_website_re_jsdd (1).png";
import img3 from "./img/undraw_Safe_re_kiil.png";


function Services() {
  return (
    <section>
      <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <div class="relative items-center w-full my-10 px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl shadow-green-300 shadow-2xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6 shadow">
                <img class="animate__animated animate__backInLeft animate__backInDown object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={img1} alt="blog"/>
                <div class="inline-flex justify-center w-full">
                    <h1 class="animate__animated animate__backInLeft mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Optimized for Any Device</h1>
                   
                </div>
                <p class="animate__animated animate__backInLeft mx-auto text-base font-medium text-justify leading-relaxed text-gray-500">Each of our themes is natively responsive, resizing your content and images to fit any device or screen width.</p>
            </div>
            <div class="p-6 shadow">
                <img class="animate__animated animate__backInDown object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={img2} alt="blog"/>
                <div class="inline-flex justify-center w-full">
                    <h1 class="animate__animated animate__zoomInDown mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Domain Names</h1>
                    
                </div>
                <p class="animate__animated animate__backInUp mx-auto text-base font-medium text-justify leading-relaxed text-gray-500">Using your own domain name on Portfolio gives your site a professional edge and helps people discover your work.</p>
            </div>
            <div class="p-6 shadow">
                <img class="animate__animated animate__backInRight object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={img3} alt="blog"/>
                <div class="inline-flex justify-center w-full">
                    <h1 class="animate__animated animate__backInRight mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Password Protection</h1>
                    
                </div>
                <p class="animate__animated animate__backInRight mx-auto text-base font-medium text-justify leading-relaxed text-gray-500">We keep your portfolio account with Email & Password protection.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Services