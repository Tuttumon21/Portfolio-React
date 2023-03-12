import React from 'react'

const Textintro = (props) => {
  return (
    <section class="w-full bg-white">
  <div class="relative items-center w-full my-10 px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24 shadow-lg shadow-green-300">
    <div class="flex w-full mx-auto text-left">
      <div class="relative inline-flex items-center mx-auto align-middle">
        <div class="text-center">
          <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-black md:text-5xl lg:text-6xl lg:max-w-7xl">
           MYPortfolio
          </h1>
          <h1 class="max-w-5xl text-xl font-bold leading-none tracking-tighter text-neutral-600 md:text-xl lg:text-xl lg:max-w-7xl">
          Welcome to our portfolio builder website!
          </h1>
          <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">Showcase your Profile in minutes.Don’t know HTML or CSS? No problem. With Portfolio, our easy-to-customize themes are the most beautiful way to present your Profile online.</p>
          <p class="text-md italic font-semibold text-gray-900 dark:text-white" >Whether you're a freelancer, entrepreneur, or job seeker, having a professional and compelling portfolio is essential in today's competitive market. With our user-friendly platform, you can easily create and customize your own portfolio with just a few clicks.Join our community of professionals today and take your career to the next level with an impressive portfolio!</p>
          <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <button onClick={()=>{props.setState(false)}} class="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Textintro