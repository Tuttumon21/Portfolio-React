import React from 'react'

const Welcometext = () => {
    const userName = localStorage.getItem("firstname");
  return (
    <div className='welcometext m-2 ml-4'>
<h6 class="animate__animated animate__fadeInDown text-4xl font-extrabold dark:text-white">Welcome,<small class="ml-2 font-semibold text-gray-500 dark:text-gray-400">{userName}</small></h6>
</div>

  )
}

export default Welcometext