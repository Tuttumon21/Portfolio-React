import React from 'react'
import img2 from "./discord.png";

const Dischelp = () => {
    const redirectToDiscord = () => {
        window.open('https://discord.gg/zRHmB9R', '_blank');
      }
  return (
    

<div class="m-auto overflow-hidden rounded-lg shadow-lg h-90 w-60 md:w-80">
    
        <img alt="profile.jpg" src={img2} class="object-cover w-full max-h-32"/>
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
            </p>
            <p class="mb-2 text-xl text-center font-medium text-gray-800 dark:text-white">
               Support !
            </p>
            <p class="mb-2 text-sm text-center font-small text-gray-500 dark:text-white">
               Support or Suggestion let's join
            </p>
            <button onClick={redirectToDiscord} class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Discord
                  </button>
                  
        </div>
</div>


  )
}

export default Dischelp