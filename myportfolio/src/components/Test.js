// import React from 'react'
import React, { useState, useEffect } from "react";

const Test = () => {
  const [details, setDetails] = useState("");
  useEffect(() => {
     fetch("http://localhost:5000/portfolio/")
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, []);
   
     

  return(<>hi</>)

}

export default Test