import React,{useEffect, useState} from "react";
import {useNavigate, Link } from "react-router-dom";

import Categorycard from "./Categorycard";
import Navbar from "./Navbar";

import Browserall from "./text/Browserall";
import Introtext from "./text/Introtext";

import Welcometext from "./text/Welcometext";


const Index = () => {
  // const[userdetails,setUserDetails] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  // const navigate = useNavigate();
  useEffect(()=>{
    const user = localStorage.getItem("email");
    fetch("http://localhost:5000/portfolio/details/" + user)
      .then((response) => response.json())
      .then((data) => {
        if(!data){
          setShowAlert(true)
        }
      });
  },[])

  
    // const [secondsLeft, setSecondsLeft] = useState(10);
  
    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     setSecondsLeft((prevSeconds) => prevSeconds - 1);
    //   }, 1000);
  
    //   return () => clearInterval(intervalId);
    // }, []);


    const ShowAlert = () =>{

      // setTimeout(() => {
        
      //   navigate("/Profile", { replace: true });
      // }, 10000);
    return<div class="overflow-y-auto fixed inset-0 z-10 transition-opacity bg-gray-400 bg-opacity-75" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div class="transition-opacity bg-blue-500 bg-opacity-75" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">​</span>
      {/* <!--Modal panel : This is where you put the pop-up's content, the div on top this coment is the wrapper --> */}
      <div class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
          <div>
              <div class="mt-3 text-left sm:mt-5">
                  <h1 class="mb-8 text-2xl font-semibold leading-none tracking-tighter text-blue-700">Notification</h1>
                  <p class="mx-auto text-base leading-relaxed text-gray-800">Go to your Profile to fill the Details</p>
              </div>
          </div>
          <div class="mt-6 sm:flex">
              <div class="mt-3 rounded-lg sm:mt-0">
                  <button onClick={()=>setShowAlert(false)} class="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
              </div>
              <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <Link to="/Profile">
                  <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Go to Profile</button>
                  </Link>
              </div>
          </div>
      </div>
  </div>
</div>

  }
  
  
  
  
  return (
    <div className="Index">  
      {showAlert?<ShowAlert/>:null}    
      <Navbar />
      <Welcometext />
      <Introtext />
      <Browserall />
      <Categorycard />
    </div>
  );
};

export default Index;
