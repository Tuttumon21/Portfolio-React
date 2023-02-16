import React from "react";

import Categorycard from "./Categorycard";
import Navbar from "./Navbar";
import Browserall from "./text/Browserall";
import Introtext from "./text/Introtext";
import Profiletext from "./text/Profiletext";
import Welcometext from "./text/Welcometext";

const Index = () => {
  return (
    <div className="Index">
      <Navbar />
      <Welcometext/>
      <Introtext/>
      <Browserall/>
      <Categorycard />
      <Profiletext/>
    </div>
  );
};

export default Index;
