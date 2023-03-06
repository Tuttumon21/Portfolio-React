import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Emptytext from "./text/Emptytext";

const Profilescard = ({ category }) => {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/portfolio/" + category)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="flex items-center justify-start p-2 h-auto w-full">
      {details ? (
        <div class="grid w-full grid-cols-6 mx-auto">
          <Profile details={details} />
        </div>
      ) : (
        <Emptytext />
      )}
    </div>
  );
};

export default Profilescard;
