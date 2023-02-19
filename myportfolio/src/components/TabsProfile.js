// import { Navbar } from 'flowbite-react'
import React from "react";
import ProfileForm from "./forms/ProfileForm";
import Navbar from "./Navbar";
import {useState} from 'react'
import AboutForm from "./forms/AboutForm";
import ServicesForm from "./forms/ServicesForm";
import ExperienceForm from "./forms/ExperienceForm";
import ContactForm from "./forms/ContactForm";

function TabsProfile() {

    const [state,setState] = useState(0)

    const Tabs = () =>{
        if(state===0){
            return (<ProfileForm/>)
        }
        if(state===1){
            return (<AboutForm/>)
        }
        if(state===2){
          return (<ServicesForm/>)
      }
      if(state===3){
        return (<ExperienceForm/>)
    }
    if(state===4){
      return (<ContactForm/>)
  }

    }
  return (
    <div>
      <Navbar />

      <div class="mb-4 mx-5 border-b border-gray-900 dark:border-gray-900">
        <ul
          class="flex flex-wrap justify-center -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li class="mr-2" role="presentation">
            <button onClick={ () => {setState(0)}}
              class="inline-block p-4 border-b-2 rounded-t-lg"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Intro
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button onClick={ () => {setState(1)}}
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              About Me
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button onClick={ () => {setState(2)}}
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Services
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button onClick={ () => {setState(3)}}
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Experience
            </button>
          </li>
          <li role="presentation">
            <button onClick={ () => {setState(4)}}
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>
      <Tabs/>
    </div>
  );
}

export default TabsProfile;
