import React from "react";

const Category = (props) => {
  return (
    <div>
      <section>
        <div class="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
          <img
            class="aspect-video w-80 rounded-t-2xl object-cover object-center"
            src={props.lnk}
            alt="img"
          />
          <div class="p-6">
            {/* <small class="text-gray-900 text-xs">Category</small> */}
            <h1 class="text-2xl font-medium text-gray-700 pb-2">
              {props.head}
            </h1>
            <p class="text text-gray-500 leading-6">
              {props.desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
