// import React from "react";
import Category from "./Category";
import pic1 from "./categoryimg/all-low-resolution-color-logo.jpeg";
import pic2 from "./categoryimg/software-low-resolution-color-logo.jpeg";
import pic3 from "./categoryimg/entertainment-low-resolution-color-logo.jpeg";
import pic4 from "./categoryimg/finance-low-resolution-color-logo.jpeg";
import pic5 from "./categoryimg/medical-low-resolution-color-logo.jpeg";
import pic6 from "./categoryimg/education-low-resolution-color-logo.jpeg";
import Profiletext from "./text/Profiletext";
// import {useState} from 'react'
import React, { useState, useEffect } from "react";
import Profilescard from "./Profilescard";
import Emptytext from "./text/Emptytext";

const Categorycard = ({category}) => {
  const [state, setState] = useState(0);
  
  
  const CatTabs = ({ category }) => {
    // const [details, setDetails] = useState(null);
    // const checkCat = ()=>{
    //   cat="Software"
    //   fetch("http://localhost:5000/portfolio/" + cat)
    //     .then((response) => response.json())
    //     .then((data) => setDetails(data));
  //   const [selectedCategory, setSelectedCategory] = useState();
  // const [profiles, setProfiles] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/portfolio/details"+ selectedCategory).then((data) => setProfiles(data));
  // }, [selectedCategory]);
      
    // }
   
      
      
      
   


    if (state === 0) {
      return (
        <>
          <Profiletext />
          <Profilescard category="all" />
        </>
      );
    }
    if (state === 1) {
      return (
        <>
          <Profiletext />
          <Profilescard category="Software" />
        </>
      );
    }
    if (state === 2) {
      return (
        <>
        
     
          <Profiletext />
          <Profilescard category="Entertainment" />
        </>
      );
    }
    if (state === 3) {
      return (
        <>
          <Profiletext />
          <Profilescard category="Finance" />
        </>
      );
    }

    if (state === 4) {
      return (
        <>
          <Profiletext />
          <Profilescard category="Medical" />
        </>
      );
    }

    if (state === 5) {
      return (
        <>
          <Profiletext />
          <Profilescard category="Education" />
        </>
      );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-start p-2 h-auto w-full">
        <div class="grid w-full grid-cols-6 mx-auto">
          <div
            onClick={() => {
              setState(0);
            }}
            className="card p-2"
          >
            <Category href="#1" lnk={pic1} head="ALL Profiles" />
          </div>
          <div
            onClick={() => {
              setState(1);
            }}
            className="card p-2"
          >
            <Category href="#2" lnk={pic2} head="Software" />
          </div>
          <div
            onClick={() => {
              setState(2);
            }}
            className="card p-2"
          >
            <Category href="#2" lnk={pic3} head="Entertainment" />
          </div>
          <div
            onClick={() => {
              setState(3);
            }}
            className="card p-2"
          >
            <Category href="#3" lnk={pic4} head="Finance" />
          </div>
          <div
            onClick={() => {
              setState(4);
            }}
            className="card p-2"
          >
            <Category href="#4" lnk={pic5} head="Medical" />
          </div>
          <div
            onClick={() => {
              setState(5);
            }}
            className="card p-2"
          >
            <Category href="#5" lnk={pic6} head="Education" />
          </div>
        </div>
      </div>
      <CatTabs />
    </div>
  );
};

export default Categorycard;
