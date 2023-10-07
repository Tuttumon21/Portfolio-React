// import React from 'react'
import React, { useState, useEffect } from "react";
import {useNavigate, Link } from "react-router-dom";
import imga from "./undraw_playing_cards_cywn.png";

const Userter = () => {
    const [details, setDetails] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    function handleMouseOver() {
        setShowPopup(true);
      }
    
      function handleMouseLeave() {
        setShowPopup(false);
      }

  useEffect(() => {
    getDetails();
  }, []);

  const [alert, setAlert] = useState(null);
  function handleAlert(message, type) {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const getDetails = async () => {
    const user = localStorage.getItem("email");
    console.log(user)
    fetch("http://localhost:5000/users/details/" + user)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  async function deleteAccount(email) {
    // console.log(email)
    const response = await fetch(`http://localhost:5000/users/${email}`, {
      method: "DELETE"
    });
    if (!response.ok) {
        const err = await response.json();
        console.log("Looks like there was a problem.", err);
        // console.log(err.msg);
        // setSignMsg(err.msg);
        return;
      } else {
        const data = await response.json();
        handleAlert(data.message, "success Deleted the user Details...");

        // alert("Deleted the user??");
        setTimeout(() => {
            localStorage.clear();
            
        navigate("/", { replace: true });
        window.location.reload();
      }, 2000);
      }
}

  return (
    <>
    {alert && (
      <div className={`alert alert-${alert.message}`} role="alert">
        {alert.message}
    <div class="bg-green-200 border-green-600 text-green-600 border-l-4 p-4 text-center" role="alert">
        <p class="font-bold">
            Success
        </p>
        <p>
        Deleted the user Details...
        </p>
    </div>
    
        
     </div>
    )}
    <div class="w-full place-items-center bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-200 dark:border-gray-100">
    
    <div class="animate__animated animate__zoomInLeft flex flex-col items-center py-10">
    <img class="w-24 h-24 object-cover mb-3 rounded-full shadow-lg" src={imga} alt="profile.jpg"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{details.firstname} {details.lastname}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{details.email}</span>
        <div class="flex items-center mt-4 space-x-3 md:mt-6">
            <button onClick={() => deleteAccount(details.email)} onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave} class="animate__animated animate__slideInUp animate__slower inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Terminate</button>
            
        </div>
    </div>
    {showPopup && (
            <div
              style={{
                position: "absolute",
                top:"100%",
                left: "35%",
                backgroundColor: "white",
                z: "-10",
                opacity: "90%",
              }}
            >
              <div
                class="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4"
                role="alert"
              >
                <p class="font-bold">Alert Account</p>
                <p>Are you sure you want to Terminate the Account</p>
              </div>
            </div>
          )}
</div>
</>
  )
}

export default Userter