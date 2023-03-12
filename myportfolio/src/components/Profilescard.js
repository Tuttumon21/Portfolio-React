import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Emptytext from "./text/Emptytext";

const Profilescard = ({ category }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/portfolio/" + category)
      .then((response) => response.json())
      .then((data) => {
        // Filter the profiles based on the selected category
        const filteredProfiles = category === "all" ? data : data.filter(profile => profile.category === category);
        setDetails(filteredProfiles.length > 0 ? filteredProfiles : null);
      });
  }, [category]);
  

  if (!details) {
    return <Emptytext text={`No ${category} Profile available`}/>;
  }

  return (
    <div>
      <Profile details={details} />
    </div>
  );
};

export default Profilescard;