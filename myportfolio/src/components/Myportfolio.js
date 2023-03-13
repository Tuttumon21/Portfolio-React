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
    console.log(user)
    fetch("http://localhost:5000/portfolio/details/" + user)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  return (
    <>
      {details === null ? (
        <div>
          <Navbar />

          <Emptytext text="fill your Details first" />
        </div>
      ) : (
        <div>
          <Navbar />
          

          {details.style === null && <></>}
          {details.style === "1" && <Intro phoneNumber={details.phoneNumber} category={details.category} jobtitle={details.jobtitle} firstname={details.firstname} lastname={details.lastname} desc={details.desc} imagePath={details.imagePath}/>}
          {details.style === "2" && <Introstyle2 imagePath={details.imagePath} firstname={details.firstname} lastname={details.lastname} jobtitle={details.jobtitle} desc={details.desc} linkedin={details.linkedin} facebook={details.facebook} instagram={details.instagram} twitter={details.twitter} />}
          

          {details.aboutStyle === null && <></>}
          {details.aboutStyle === "Style#1" && <Aboutmestyle1 aboutDesc={details.aboutDesc} aboutImage={details.aboutImage} />}
          {details.aboutStyle === "Style#2" && <Aboutmestyle2 aboutImage={details.aboutImage} aboutDesc={details.aboutDesc}  />}

          {details.serviceStyle === null && <></>}
          {details.serviceStyle === "Style#1" && <Servicestyle1 service1name={details.service1name} service1desc={details.service1desc} />}
          {details.serviceStyle === "Style#2" && <Servicestyle2 service2name={details.service2name} service2desc={details.service2desc} service1name={details.service1name} service1desc={details.service1desc} />}
          {details.serviceStyle === "Style#3" && <Servicestyle3 service3name={details.service3name} service3desc={details.service3desc} service2name={details.service2name} service2desc={details.service2desc} service1name={details.service1name} service1desc={details.service1desc} />}

          {details.experienceStyle === null && <></>}
          {details.experienceStyle === "Style#1" && <Experiencestyle1 expe1name={details.expe1name} expe1desc={details.expe1desc} />}
          {details.experienceStyle === "Style#2" && <Experiencestyle2 expe2name={details.expe2name} expe2desc={details.expe2desc} expe1name={details.expe1name} expe1desc={details.expe1desc} />}
          {details.experienceStyle === "Style#3" && <Experiencestyle3 expe3name={details.expe3name} expe3desc={details.expe3desc} expe2name={details.expe2name} expe2desc={details.expe2desc} expe1name={details.expe1name} expe1desc={details.expe1desc} />}

          {details.contactsStyle === null && <></>}
          {details.contactsStyle === "Style#1" && <Contactmestyle1 phoneNumber={details.phoneNumber} linkedin={details.linkedin} facebook={details.facebook} instagram={details.instagram} twitter={details.twitter} snapchat={details.snapchat} youtube={details.youtube} />}
          {details.contactsStyle === "Style#2" && <Contactmestyle2 phoneNumber={details.phoneNumber} linkedin={details.linkedin} facebook={details.facebook} instagram={details.instagram} twitter={details.twitter} snapchat={details.snapchat} youtube={details.youtube} />}

        </div>
      )}
    </>
  );
};

export default Myportfolio;
