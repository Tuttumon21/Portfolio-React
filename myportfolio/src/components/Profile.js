import React from "react";

const Profile = ({details}) => {
  return (
   <div>
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
              <a
                // href={props.href}
                class="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View profile{" "}
              </a>
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
