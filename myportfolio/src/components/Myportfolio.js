// import React from 'react'
import React, { useState, useEffect } from "react";
import Aboutmestyle1 from "./myportfolio/Aboutmestyle1";
import Aboutmestyle2 from "./myportfolio/Aboutmestyle2";
import Contactmestyle1 from "./myportfolio/Contactmestyle1";
import Contactmestyle2 from "./myportfolio/Contactmestyle2";
import Experiencestyle1 from "./myportfolio/Experiencestyle1";
import Experiencestyle2 from "./myportfolio/Experiencestyle2";
import Experiencestyle3 from "./myportfolio/Experiencestyle3";
import Intro from "./myportfolio/Intro";
import Introstyle2 from "./myportfolio/Introstyle2";
import Servicestyle1 from "./myportfolio/Servicestyle1";
import Servicestyle2 from "./myportfolio/Servicestyle2";
import Servicestyle3 from "./myportfolio/Servicestyle3";
import Navbar from "./Navbar";
import Emptytext from "./text/Emptytext";

const Myportfolio = () => {
  const [details, setDetails] = useState("");
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const user = localStorage.getItem("email");
    fetch("http://localhost:5000/portfolio/details/" + user)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  return (
    <>
      {details === null ? (
        <div>
          <Navbar />

          <Emptytext />
        </div>
      ) : (
        <div>
          <Navbar />

          {details.style === null && <></>}
          {details.style === "1" && <Intro />}
          {details.style === "2" && <Introstyle2 />}

          {details.aboutStyle === null && <></>}
          {details.aboutStyle === "Style#1" && <Aboutmestyle1 />}
          {details.aboutStyle === "Style#2" && <Aboutmestyle2 />}

          {details.serviceStyle === null && <></>}
          {details.serviceStyle === "Style#1" && <Servicestyle1 />}
          {details.serviceStyle === "Style#2" && <Servicestyle2 />}
          {details.serviceStyle === "Style#3" && <Servicestyle3 />}

          {details.experienceStyle === "Style#1" && <Experiencestyle1 />}
          {details.experienceStyle === "Style#2" && <Experiencestyle2 />}
          {details.experienceStyle === "Style#3" ? <Experiencestyle3 /> : <></>}

          {details.contactsStyle === null && <></>}
          {details.contactsStyle === "Style#1" && <Contactmestyle1 />}
          {details.contactsStyle === "Style#2" && <Contactmestyle2 />}

        </div>
      )}
    </>
  );
};

export default Myportfolio;
