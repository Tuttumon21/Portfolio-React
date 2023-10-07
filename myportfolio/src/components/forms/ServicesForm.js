import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ServicesForm = () => {
  const { register, handleSubmit } = useForm();
  const user = localStorage.getItem("email");
  console.log(user);

  const [alert, setAlert] = useState(null);
  function handleAlert(message, type) {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const saveForm = async (data) => {
    const formdata = { ...data, uEmail: user };
    const url = "http://localhost:5000/portfolio/update/services/" + user;
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
      handleAlert(data.message, "success Services Updated...");
      // alert("Services Updated...");
    }
  };

  return (
    <>
    {alert && (
  <div className={`alert alert-${alert.message}`} role="alert">
    {alert.message}
<div class="bg-green-200 border-green-600 text-green-600 border-l-4 p-4 text-center" role="alert">
    <p class="font-bold">
        Success
    </p>
    <p>
        Services Updated...
    </p>
</div>

    
 </div>
)}

      <div className="animate__animated animate__fadeInRight mt-10 mx-7 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Services Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter Details about your services or what you do
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
                        #1 Service Name
                      </label>
                      <input
                        type="text"
                        name="service1name"
                        id="service1name"
                        {...register("service1name", { required: true })}
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
                        #1 Service Description
                      </label>
                      <textarea
                        type="text"
                        name="service1desc"
                        id="service1desc"
                        {...register("service1desc", { required: true })}
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
                        #2 Service Name
                      </label>
                      <input
                        type="text"
                        name="service2name"
                        id="service2name"
                        {...register("service2name")}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        #2 Service Description
                      </label>
                      <textarea
                        type="text"
                        name="service2desc"
                        id="service2desc"
                        {...register("service2desc")}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        #3 Service Name
                      </label>
                      <input
                        type="text"
                        name="service3name"
                        id="service3name"
                        {...register("service3name")}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        #3 Service Description
                      </label>
                      <textarea
                        type="text"
                        name="service3desc"
                        id="service3desc"
                        {...register("service3desc")}
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
                        id="serviceStyle"
                        name="serviceStyle"
                        {...register("serviceStyle", { required: true })}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option selected>Style#1</option>
                        <option>Style#2</option>
                        <option>Style#3</option>
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

export default ServicesForm;
