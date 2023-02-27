import React, { useState } from "react";
// import avater from "./avater image1.jpeg";
import { useForm } from "react-hook-form";
import ProfilePreview from "./ProfilePreview";

const ProfileForm = () => {
  const { register, handleSubmit } = useForm();
  const user = localStorage.getItem("email");
  const [category, setCategory] = useState([]);

  const saveForm = async (data) => {
    const formdata = { ...data, uEmail: user };
    // console.log(data)
    const url = "http://localhost:5000/portfolio/add";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
      alert("profile added");
    }
  };

  const getSubCategory = async(category) => {
    // const userId = localStorage.getItem("userId");
    fetch("http://localhost:5000/portfolio/category/"+category)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  };


  return (
    <>
      <div className="mt-10 mx-7 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mb-7 mt-1 text-sm text-gray-600">
                Enter Your Profile Details
              </p>
              <div>
                <ProfilePreview/>
              </div>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form
              onSubmit={handleSubmit(saveForm)}
              enctype="multipart/form-data"
            >
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        {...register("firstname", { required: true })}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        {...register("lastname", { required: true })}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="jobtitle"
                        id="jobtitle"
                        {...register("jobtitle", { required: true })}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Category
                      </label>
                      <select
                        id="jobcat"
                        name="category"
                        {...register("category", { required: true })}
                        onChange={(e) => getSubCategory(e.target.value)}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option selected>Select</option>
                        <option value="Software">Software</option>
                        <option value="Entertainment">Entertaiment</option>
                        <option value="Finance">Finance</option>
                        <option value="Medical">Medical</option>
                        <option value="Education">Education</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Field
                      </label>
                      <select
                        id="jobcat"
                        name="category"
                        // onClick={()}
                        {...register("subcategory", { required: true })}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option selected>Select</option>
                        {category && category.map((c,key)=> {return <option value={c.subcategory}>{c.subcategory}</option>})}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        {...register("email", { required: true })}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      {/* <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Profile Picture
                      </label>
                      <input
                        type="file"
                        name="userAvatar"
                        id="userAvatar"
                        autoComplete="given-name"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleFileInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      /> */}
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Profile Intro Description
                      </label>
                      <textarea
                        type="text"
                        name="desc"
                        {...register("desc", { required: true })}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Choose Style
                      </label>
                      <select
                        id="country"
                        name="style"
                        {...register("style", { required: true })}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option selected value="1">
                          Style #1
                        </option>
                        <option value="2">Style #2</option>
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

export default ProfileForm;
