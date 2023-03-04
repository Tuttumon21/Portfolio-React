// import React from 'react'
import React,{useState,useEffect} from 'react'
import Intro from './myportfolio/Intro';
import Introstyle2 from './myportfolio/Introstyle2';
import Navbar from "./Navbar";
import Emptytext from './text/Emptytext';

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
        <Navbar/>
      
      <Emptytext/>

     </div>
    ) : (
      <div>
        <Navbar/>
        {/* <Emptytext/> */}
        {details.style ===  1 ?(
           <Intro/>
        ):(<Introstyle2/>)
         
        }  
    </div>
    )
      
    }
</>
    
  )
}

export default Myportfolio