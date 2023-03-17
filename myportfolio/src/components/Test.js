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
import { Scrollama, Step } from 'react-scrollama';

const Test = () => {
  const { email } = useParams();
  const [user, setUser] = useState(null);
  // const [currentStepIndex, setCurrentStepIndex] = useState(0);
  


  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `http://localhost:5000/portfolio/details/Rak@gmail.com`
      );
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, [email]);

  
  
  return (
    
    <>hi</>
    
  
  );
};


export default Test