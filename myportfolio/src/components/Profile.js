import React,{useEffect, useState} from "react";
import {useNavigate, Link } from "react-router-dom";


const Profile = ({details}) => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false)


  // useEffect(()=>{
  //   console.log(details)
  //   if(details===null){
  //     setShowAlert(true);
  //   }
  // })

//   const ProfileAlert = () =>{

//     // setTimeout(() => {
      
//     //   navigate("/Profile", { replace: true });
//     // }, 10000);

//   return<div class="overflow-y-auto fixed inset-0 z-10 transition-opacity bg-gray-400 bg-opacity-75" aria-labelledby="modal-title" role="dialog" aria-modal="true">
// <div class="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//     <div class="transition-opacity bg-blue-500 bg-opacity-75" aria-hidden="true"></div>
//     <span class="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">​</span>
//     {/* <!--Modal panel : This is where you put the pop-up's content, the div on top this coment is the wrapper --> */}
//     <div class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
//         <div>
//             <div class="mt-3 text-left sm:mt-5">
//                 <h1 class="mb-8 text-2xl font-semibold leading-none tracking-tighter text-blue-700">Notification</h1>
//                 <p class="mx-auto text-base leading-relaxed text-gray-800">No Profiles Found!</p>
//             </div>
//         </div>
//         <div class="mt-6 sm:flex">
//             <div class="mt-3 rounded-lg sm:mt-0">
//                 <button onClick={()=>setShowAlert(false)} class="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
//             </div>
            
//         </div>
//     </div>
// </div>
// </div>

// }

  return (
   <div class="grid w-full grid-cols-6 mx-auto">
    {/* {showAlert?<ProfileAlert/>:null}  */}
    {
      details && details.map((d,key)=>(  
        <section>
          
      <div class="flex flex-col w-full mt-2 px-5 py-12 mx-auto">
        <div class="w-56 max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
          <img
            alt="team"
            class="flex-shrink-0 object-cover object-center w-32 h-32 mx-auto -mt-8 rounded-full shadow-xl aboslute"
            src={d.imagePath}
          />

          <div class="p-3 lg:text-center">
            <span class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
              {d.subcategory}
            </span>
            <h4 class="mt-2 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              {d.firstname}
            </h4>

            <div class="mt-2">
              <button
                // href={props.href}
               // onClick={() => window.open(/viewprofile/`${d.email}`, "_blank")}
               onClick={() => window.open(`/viewprofile/${d.email}`, "_blank")}
              
                class="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                 
                View profile
              </button>
              {/* <Link to={`/viewprofile/${d.email}`}>View</Link> */}
            </div>
          </div>
        </div>
      </div>
       </section>
    ))
      }
   </div>
    
  );
};

export default Profile;
