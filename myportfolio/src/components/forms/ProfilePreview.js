import React, { useState } from "react";

const ProfilePreview = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const user = localStorage.getItem("email");
  const [file, setFile] = useState(null);
  // const localUser = localStorage.getItem("username");

//   const [form, setForm] = useState({
//     title: "",
//     event: "",
//   });

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    const previewUrl = URL.createObjectURL(file);
    setFile(file);
    const fileName = event.target.files[0].name;
    console.log("image" + fileName);
    setImagePreview(previewUrl);
  };

  async function onSubmit(e) {
    e.preventDefault();
   
    // console.log(fileUpload);
    const formData = new FormData();
    // formData.append("title", form.title);
    // formData.append("event", form.event);
    formData.append("imageFile", file);
    // formData.append("likes", 1);
    try {
      const url = "http://localhost:5000/portfolio/update/image/" + user;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          // "content-type": "multipart/form-data",
        },
        body: formData,
      });
      if (!response.ok) {
        const err = await response.json();
        alert("login failed");
        console.log("Looks like there was a problem.", err);
        return;
      } else {
        const msg = await response.json();
        // setOpen(false);
        // getGroups();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data" className="mt-44">
      <img
        src={imagePreview}
        alt="profilePic"
        class="mx-auto object-cover rounded-full h-40 w-40 "
      />
      <p class="text-center text-2xl text-gray-800 dark:text-white">JETT</p>
      <p class="text-center text-xl font-light text-gray-500 dark:text-gray-200">
        Valorant Duelist
      </p>
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          Update Picture
        </label>
        <input
          type="file"
          name="userAvatar"
          id="userAvatar"
          autoComplete="given-name"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex m-4 justify-end">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default ProfilePreview;
