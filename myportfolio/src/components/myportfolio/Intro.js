import React,{useState,useEffect} from 'react'
// import profilepicture from "./download.jpeg";
const Intro = () => {

    const [details,setDetails] = useState("");
    useEffect(() => {
        getDetails();
      },[]);

    const getDetails = async() => {
        const user = await localStorage.getItem("email");
        fetch("http://localhost:5000/portfolio/details/"+user)
          .then((response) => response.json())
          .then((data) => setDetails(data));
      };
  return (
    
<section>
  <div class="my-5 px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-white shadow rounded">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
     

      <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
        <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">{details.category}<br/>{details.jobtitle} </span>
        <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">{details.firstname} {details.lastname}</h1>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500">{details.desc}</p>
        <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
          <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <button class="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Contact Me</button>
          </div>
        </div>
      </div>

      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div class="absolute rounded-full -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative">
              <img class="object-cover object-center w-96 h-96 mx-auto rounded-full shadow-2xl" alt="hero" src={details.imagePath}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default Intro