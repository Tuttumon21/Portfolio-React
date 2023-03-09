// import React from 'react'
import React, { useState } from "react";
import Dischelp from "./Helppage/Dischelp";
import Portter from "./Helppage/Portter";
import Userter from "./Helppage/Userter";
import Navbar from "./Navbar";

const Helppage = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-11xl">
          <div class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
            <div class="p-6">
              <Portter />
              
            </div>

            <div class="p-6">
              <Dischelp />
           
            </div>
            <div class="p-6">
              <Userter />
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Helppage;
