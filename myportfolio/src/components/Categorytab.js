import React from "react";
import { useState } from "react";
import Profilescard from "./Profilescard";
import Profiletext from "./text/Profiletext";


const Categorytab = (props) => {
  const [state, setState] = useState(1);

  const Tabs = () => {
    if (state === 1) {
      return (
        <>
          <Profiletext />
          <Profilescard
            category="Software Developer"
            name="Rakesh"
            href="#123"
          />
        </>
      );
    }
    if (state === 2) {
      return (
        <>
          <Profiletext />
          <Profilescard category="Full Stack" name="Rakesh" href="#123" />
        </>
      );
    }
    if (state === 3) {
      return (
        <>
          <Profiletext />
          <Profilescard category="Finance Manager" name="Rakesh" href="#123" />
        </>
      );
    }
    if (state === 4) {
      return (
        <>
          <Profiletext />
          <Profilescard category="Medical Officer" name="Rakesh" href="#123" />
        </>
      );
    }
  };
  return (
    <div>
      <div class="mb-4 mx-7 border-b border-gray-700 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li class="mr-2" role="presentation">
            <button
              onClick={() => {
                setState(1);
              }}
              class="inline-block p-4 border-b-2 rounded-t-lg"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              {props.tab1name}
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              onClick={() => {
                setState(2);
              }}
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              {props.tab2name}
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              onClick={() => {
                setState(3);
              }}
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              {props.tab3name}
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => {
                setState(4);
              }}
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              {props.tab4name}
            </button>
          </li>
        </ul>
      </div>
      <Tabs />
    </div>
  );
};

export default Categorytab;
