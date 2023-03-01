import React,{useState,useEffect} from "react";
import Profile from "./Profile";

const Profilescard = ({category}) => {
  const [details, setDetails] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/portfolio/"+category)
    .then((response) => response.json())
    .then((data) => setDetails(data));
  },[])

  return (
    <div className="flex items-center justify-start p-2 h-auto w-full">
      <div class="grid w-full grid-cols-6 mx-auto">
        <div className="card p-1">
          
          <Profile details={details}/>
          
        </div>
      </div>
    </div>
  );
};

export default Profilescard;
