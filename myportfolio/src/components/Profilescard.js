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
    <div>
          <Profile details={details} />
    </div>
  );
};

export default Profilescard;
