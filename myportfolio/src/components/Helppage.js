// import React from 'react'
// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import Dischelp from "./Helppage/Dischelp";
import Portter from "./Helppage/Portter";
import Userter from "./Helppage/Userter";
import Navbar from "./Navbar";

const Helppage = () => {
  const [details, setDetails] = useState("");
  const [users, setUsers] = useState("");

  useEffect(() => {
    getPort();
    getUsers();
  }, []);

  const getPort = async () => {
    const user = localStorage.getItem("email");
    console.log(user);
    fetch("http://localhost:5000/portfolio/details/" + user)
      .then((response) => response.json())
      .then((data) => setDetails(data));
    //   console.log(details)
  };
  //   useEffect(() => {

  //   }, []);

  const getUsers = async () => {
    const user = localStorage.getItem("email");
    console.log(user);
    fetch("http://localhost:5000/users/details/" + user)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  return (
    <div>
      <Navbar />
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-11xl">
          <div class="grid items-center w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2 shadow-xl">
            <div class="p-6">
              {details ? (
                <Portter />
              ) : (
                <>
                  <Dischelp />
                </>
              )}
            </div>

            <div class="p-6">
              {details ? (
                <>
                  <Dischelp />
                </>
              ) : (
                <Userter />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Helppage;
