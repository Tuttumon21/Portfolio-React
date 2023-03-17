import React, { useState, useEffect } from "react";
import Myportfolio from "./Myportfolio";
import { useParams } from "react-router-dom";
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
import Emptytext from "./text/Emptytext";



const Viewprofile = () => {
  // 
  const { email } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `http://localhost:5000/portfolio/details/${email}`
      );
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, [email]);


  if (!user) {
    return <div>Loading... please wait... we are searching requested profile<Emptytext/></div>;
  }
  return (
    
    <div className=" overflow-hidden">
    
    
      {user.style === null && <></>}
          {user.style === "1" && <Intro phoneNumber={user.phoneNumber} category={user.category} jobtitle={user.jobtitle} firstname={user.firstname} lastname={user.lastname} desc={user.desc} imagePath={user.imagePath}/>}
          {user.style === "2" && <Introstyle2 imagePath={user.imagePath} firstname={user.firstname} lastname={user.lastname} jobtitle={user.jobtitle} desc={user.desc} linkedin={user.linkedin} facebook={user.facebook} instagram={user.instagram} twitter={user.twitter} />}
          
          
          {user.aboutStyle === null && <></>}
          {user.aboutStyle === "Style#1" && <Aboutmestyle1 aboutDesc={user.aboutDesc} aboutImage={user.aboutImage} />}
          {user.aboutStyle === "Style#2" && <Aboutmestyle2 aboutImage={user.aboutImage} aboutDesc={user.aboutDesc}  />}
          

          {user.serviceStyle === null && <></>}
          {user.serviceStyle === "Style#1" && <Servicestyle1 service1name={user.service1name} service1desc={user.service1desc} />}
          {user.serviceStyle === "Style#2" && <Servicestyle2 service2name={user.service2name} service2desc={user.service2desc} service1name={user.service1name} service1desc={user.service1desc} />}
          {user.serviceStyle === "Style#3" && <Servicestyle3 service3name={user.service3name} service3desc={user.service3desc} service2name={user.service2name} service2desc={user.service2desc} service1name={user.service1name} service1desc={user.service1desc} />}
          
          {user.experienceStyle === null && <></>}
          {user.experienceStyle === "Style#1" && <Experiencestyle1 expe1name={user.expe1name} expe1desc={user.expe1desc} />}
          {user.experienceStyle === "Style#2" && <Experiencestyle2 expe2name={user.expe2name} expe2desc={user.expe2desc} expe1name={user.expe1name} expe1desc={user.expe1desc} />}
          {user.experienceStyle === "Style#3" && <Experiencestyle3 expe3name={user.expe3name} expe3desc={user.expe3desc} expe2name={user.expe2name} expe2desc={user.expe2desc} expe1name={user.expe1name} expe1desc={user.expe1desc} />}
          
          
          {user.contactsStyle === null && <></>}
          {user.contactsStyle === "Style#1" && <Contactmestyle1 phoneNumber={user.phoneNumber} linkedin={user.linkedin} facebook={user.facebook} instagram={user.instagram} twitter={user.twitter} snapchat={user.snapchat} youtube={user.youtube} />}
          {user.contactsStyle === "Style#2" && <Contactmestyle2 phoneNumber={user.phoneNumber} linkedin={user.linkedin} facebook={user.facebook} instagram={user.instagram} twitter={user.twitter} snapchat={user.snapchat} youtube={user.youtube} />}
          






          
    </div>
  
  );
};

export default Viewprofile;
