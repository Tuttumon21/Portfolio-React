import React from "react";
import { useForm } from "react-hook-form";

const ExperienceForm = () => {
const { register, handleSubmit } = useForm();
  const user = localStorage.getItem("email");
  console.log(user);

  const saveForm = async (data) => {
    const formdata = { ...data, uEmail: user };
    const url = "http://localhost:5000/portfolio/update/experience/" + user;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data)
      body: JSON.stringify(formdata),
    });

    if (!response.ok) {
      const err = await response.json();
      console.log("Looks like there was a problem.", err);
      // console.log(err.msg);
      // setSignMsg(err.msg);
      return;
    } else {
      const data = await response.json();
      alert("Experience Updated...");
    }
  };


  return (
    <>
      <div className="mt-10 mx-7 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
              Experience Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter Details about your Experience
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit(saveForm)}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        #1 Experience Name
                      </label>
                      <input
                      
                        type="text"
                        name="expe1name"
                        id="expe1name"
                        {...register("expe1name", { required: true })}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                        
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        #1 Experience Description
                      </label>
                      <textarea
                        type="text"
                        name="expe1desc"
                        id="expe1desc"
                        {...register("expe1desc", { required: true })}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        #2 Experience Name
                      </label>
                      <input
                        type="text"
                        name="expe2name"
                        id="expe2name"
                        {...register("expe2name")}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        #2 Experience Description
                      </label>
                      <textarea
                        type="text"
                        name="expe2desc"
                        id="expe2desc"
                        {...register("expe2desc")}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        #3 Experience Name
                      </label>
                      <input
                        type="text"
                        name="expe3name"
                        id="expe3name"
                        {...register("expe3name")}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        #3 Experience Description
                      </label>
                      <textarea
                        type="text"
                        name="expe3desc"
                        id="expe3desc"
                        {...register("expe3desc")}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Choose Style
                      </label>
                      <select
                        id="experienceStyle"
                        name="experienceStyle"
                        {...register("experienceStyle", { required: true })}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Style #1</option>
                        <option>Style #2</option>
                        <option>Style #3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceForm;
