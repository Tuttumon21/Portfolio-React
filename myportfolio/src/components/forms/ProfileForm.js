import React, { useState,useEffect } from "react";
import {useNavigate, Link } from "react-router-dom";
// import avater from "./avater image1.jpeg";
import { useForm } from "react-hook-form";
import ProfilePreview from "./ProfilePreview";

const ProfileForm = () => {
  // const { register, handleSubmit } = useForm();
  const user = localStorage.getItem("email");
  const [details, setDetails] = useState(null)
  const [cat, setCat] = useState(null)
  const [style, setStyle] = useState("")
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false)
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    jobtitle: "",    
    subcategory: "",
    email: user,
    desc: "",
    style: "",
  });
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  useEffect(()=>{
    fetch("http://localhost:5000/portfolio/details/"+user)
    .then((response) => response.json())
    .then((data) => {
      let x = Object.keys(data);
      if(x.length>8 && x.length<18){
      setShowAlert(true)
    }
      setDetails(data)});
 
  },[])
 
  const getSubCategory = async(category) => {
    // const userId = localStorage.getItem("userId");
    setCat(category)
    fetch("http://localhost:5000/portfolio/category/"+category)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    const previewUrl = URL.createObjectURL(file);
    setFile(file);
    
  };
  async function onSubmit(e) {
    e.preventDefault();
   
    // console.log(fileUpload);
    const formData = new FormData();
    formData.append("firstname", form.firstname);
    formData.append("lastname", form.lastname);
    formData.append("jobtitle", form.jobtitle);
    formData.append("category", cat);
    formData.append("subcategory", form.subcategory);
    formData.append("email", form.email);
    formData.append("desc", form.desc);
    formData.append("style", style);
    formData.append("imageFile", file);
   
    try {
      
      const url = "http://localhost:5000/portfolio/add";
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
        alert("Profile Error failed");
        console.log("Looks like there was a problem.", err);
        return;
      } else {
        const msg = await response.json();
        
        window.location.reload();
        // setOpen(false);
        // getGroups();
      }
    } catch (err) {
      console.log(err);
    }
  }

  
  const FillAlert = () =>{

    // setTimeout(() => {
      
    //   navigate("/Profile", { replace: true });
    // }, 10000);
  return<div class="overflow-y-auto fixed inset-0 z-10 transition-opacity bg-gray-400 bg-opacity-75" aria-labelledby="modal-title" role="dialog" aria-modal="true">
<div class="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
    <div class="transition-opacity bg-blue-500 bg-opacity-75" aria-hidden="true"></div>
    <span class="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">​</span>
    {/* <!--Modal panel : This is where you put the pop-up's content, the div on top this coment is the wrapper --> */}
    <div class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
        <div>
            <div class="mt-3 text-left sm:mt-5">
                <h1 class="mb-8 text-2xl font-semibold leading-none tracking-tighter text-blue-700">Notification</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-800">Your Portfolio Details Are Incomplete! Please Fill Remaining Details.</p>
            </div>
        </div>
        <div class="mt-6 sm:flex">
            <div class="mt-3 rounded-lg sm:mt-0">
                <button onClick={()=>setShowAlert(false)} class="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
            </div>
            {/* <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <Link to="/Profile">
                <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Go to Profile</button>
                </Link>
            </div> */}
        </div>
    </div>
</div>
</div>

}

  return (
    <>
    {showAlert?<FillAlert/>:null} 
      <div className="animate__animated animate__fadeInUp my-10 mx-7 sm:mt-0">
        <div className=" md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mb-7 mt-1 text-sm text-gray-600">
                Enter Your Profile Details
              </p>
              <div>
                {/* <ProfilePreview/> */}
              </div>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form
              onSubmit={onSubmit}
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
                        value={form.firstname}
                        onChange={(e) => updateForm({ firstname: e.target.value })}
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
                        value={form.lastname}
                        onChange={(e) => updateForm({ lastname: e.target.value })}
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
                        value={form.jobtitle}
                        onChange={(e) => updateForm({ jobtitle: e.target.value })}
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
                        id="subcategory"
                        name="subcategory"
                        // onClick={()}
                        value={form.subcategory}
                        onChange={(e) => updateForm({ subcategory: e.target.value })}
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
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                        id="email-address"
                        autoComplete="email"
                        disabled
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
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
                      />
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
                        value={form.desc}
                        onChange={(e) => updateForm({ desc: e.target.value })}
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
                        // value={form.style}
                        onChange={(e) => setStyle( e.target.value )}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option selected value="0">
                          Choose Style
                        </option>
                        <option value="1">Style #1</option>
                        <option value="2">Style #2</option>
                      </select>
                    </div>
                  </div>
                </div>
                {details?<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </div>:
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
