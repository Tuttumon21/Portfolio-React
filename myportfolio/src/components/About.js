import React from 'react'

const About = () => {
  return (
    <section>
    <div class=" flex flex-col items-center my-10 px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 shadow-xl shadow-green-300">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
                <h1 className="font-bold text-2xl animate__animated animate__slideInLeft">A small About our site</h1>
                <p className='animate__animated animate__slideInRight'>At MyPortfolio, we are passionate about helping creative professionals showcase their skills/Services and achievements/Experiences in the best possible way. We believe that everyone deserves a chance to succeed and stand out in their field, and that's why we've created an easy-to-use platform that makes it simple to create stunning online portfolios.</p>
                <p className='animate__animated animate__slideInLeft'>Our team is made up of talented designers, developers, and entrepreneurs who understand the challenges of building a successful career in the creative industry. We know how important it is to have a professional and compelling portfolio, and we're committed to providing you with the tools and resources you need to achieve your goals.</p>
            <p className='animate__animated animate__slideInRight'>With MyPortfolio, you can choose from a variety of customizable templates that are designed to highlight your work and achievements. Our platform is easy to use, flexible, and affordable, and we're always here to support you every step of the way.</p>
            <p className='animate__animated animate__slideInLeft'>Join our community of creative professionals today and start building your dream portfolio with MyPortfolio.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default About