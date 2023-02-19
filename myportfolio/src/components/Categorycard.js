import React from "react";
import Category from "./Category";
import pic1 from "./categoryimg/all-low-resolution-color-logo.jpeg";
import pic2 from "./categoryimg/software-low-resolution-color-logo.jpeg";
import pic3 from "./categoryimg/entertainment-low-resolution-color-logo.jpeg";
import pic4 from "./categoryimg/finance-low-resolution-color-logo.jpeg";
import pic5 from "./categoryimg/medical-low-resolution-color-logo.jpeg";
import pic6 from "./categoryimg/education-low-resolution-color-logo.jpeg";
import Profiletext from "./text/Profiletext";
import {useState} from 'react'
import Profilescard from "./Profilescard";
import Categorytab from "./Categorytab";

const Categorycard = (props) => {
  const [state,setState] = useState(0)
  const CatTabs = () =>{
    if(state===0){
        return (<><Profiletext/><Profilescard category="UI/UX" name="Rakesh" href="#123"/></>)
    }
    if(state===1){
        return (<Categorytab tab1name="software engineer" tab2name="full stack developer" tab3name="data scientist" tab4name="blockchain developer"/>)
    }
    if(state===2){
      return (<Categorytab tab1name="photographer" tab2name="video editor" tab3name="film director" tab4name="production assistant"/>)
  }
  if(state===3){
    return (<Categorytab tab1name="finance manager" tab2name="financial analyst" tab3name="senior accountant" tab4name="personal banker"/>)
}
if(state===4){
  return (<Categorytab tab1name="medical officer" tab2name="nurse" tab3name="pharmacist" tab4name="medical lab technologist"/>)
}
if(state===5){
  return (<Categorytab tab1name="academic manager" tab2name="teacher" tab3name="lecturer" tab4name="education counsellor"/>)
}

}

  return (
    <div>
    <div className="flex items-center justify-start p-2 h-auto w-full">
      <div class="grid w-full grid-cols-6 mx-auto">
        <div onClick={ () => {setState(0)}} className="card p-2">
          <Category href="#1" lnk={pic1} head="ALL Profiles"/>
        </div>
        <div onClick={ () => {setState(1)}} className="card p-2">
          <Category  href="#2" lnk={pic2} head="Software" />
        </div>
        <div onClick={ () => {setState(2)}} className="card p-2">
          <Category href="#2" lnk={pic3} head="Entertainment" />
        </div>
        <div onClick={ () => {setState(3)}} className="card p-2">
          <Category href="#3" lnk={pic4} head="Finance" />
        </div>
        <div onClick={ () => {setState(4)}} className="card p-2">
          <Category href="#4" lnk={pic5} head="Medical" />
        </div>
        <div onClick={ () => {setState(5)}} className="card p-2">
          <Category href="#5" lnk={pic6} head="Education" />
        </div>
      </div>
    </div>
    <CatTabs/>
    </div>
  );
};

export default Categorycard;
