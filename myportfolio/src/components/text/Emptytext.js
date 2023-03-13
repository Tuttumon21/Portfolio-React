import React from "react";

const Emptytext = (props) => {
  return (
    <section>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="flex flex-col w-full mb-12 text-center">
          <div class="max-w-5xl text-2xl font-extrabold leading-none tracking-tighter text-neutral-1000 md:text-5xl lg:text-6xl lg:max-w-7xl">
            <span class="animate__animated animate__slow animate__fadeInUp text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 selection:bg-white">
              CHECK BACK SOON! <br/>{props.text}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emptytext;
