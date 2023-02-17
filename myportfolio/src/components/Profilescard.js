import React from "react";
import Profile from "./Profile";

const Profilescard = () => {
  return (
    <div className="flex items-center justify-start p-2 h-auto w-full">
      <div class="grid w-full grid-cols-6 mx-auto">
        <div className="card p-1">
          <Profile category="ui/ux" name="Rakesh" href="#1"/>
        </div>
      </div>
    </div>
  );
};

export default Profilescard;
