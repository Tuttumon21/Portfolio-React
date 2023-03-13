import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const user = localStorage.getItem("email");
  console.log(user);

  const saveForm = async (data) => {
    const formdata = { ...data, uEmail: user };
    const url = "http://localhost:5000/portfolio/update/contacts/" + user;
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
      alert("Contacts Updated...");
    }
  };

  return (
    <>
      <div className="animate__animated animate__fadeInUp mt-10 mx-7 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Contacts Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Provide Your Contacts Details and Social Media Links
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
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Snapchat
                      </label>
                      <input
                        type="text"
                        name="snapchat"
                        id="snapchat"
                        {...register("snapchat")}
                        autoComplete="email"
                        // placeholder="yourname@email.com"
                        // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Whatsapp / Phone number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        {...register("phoneNumber")}
                        autoComplete="email"
                        placeholder="1234 456 789"
                        pattern="[0-9]{10}"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        LinkedIn Profile
                      </label>
                      <input
                        type="text"
                        name="linkedin"
                        id="linkedin"
                        {...register("linkedin")}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Facebook
                      </label>
                      <input
                        type="text"
                        name="facebook"
                        id="facebook"
                        {...register("facebook")}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Twitter
                      </label>
                      <input
                        type="text"
                        name="twitter"
                        id="twitter"
                        {...register("twitter")}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Instagram
                      </label>
                      <input
                        type="text"
                        name="instagram"
                        id="instagram"
                        {...register("instagram")}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Youtube
                      </label>
                      <input
                        type="text"
                        name="youtube"
                        id="youtube"
                        {...register("youtube")}
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
                        id="contactsStyle"
                        name="contactsStyle"
                        {...register("contactsStyle", { required: true })}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option selected>Style#1</option>
                        <option>Style#2</option>
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

export default ContactForm;
