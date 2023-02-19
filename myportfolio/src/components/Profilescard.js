import React from "react";
import Profile from "./Profile";

const Profilescard = (props) => {
  return (
    <div className="flex items-center justify-start p-2 h-auto w-full">
      <div class="grid w-full grid-cols-6 mx-auto">
        <div className="card p-1">
          <Profile category={props.category} name={props.name} href={props.href}/>
        </div>
      </div>
    </div>
  );
};

export default Profilescard;
