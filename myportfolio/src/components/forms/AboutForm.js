import React,{useState} from "react";
import { useForm } from 'react-hook-form';
import ProfilePreview from "./ProfilePreview";
// import picture from "./avater image2.jpeg";
const AboutForm = () => {
  const { register, handleSubmit} = useForm();
  const user = localStorage.getItem("email");
  const [file, setFile] = useState(null);
  const [style, setStyle] = useState("")
  const [form, setForm] = useState({
    
    aboutDesc: "",
    // aboutStyle: "",
  });
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
// console.log(user)
const [alert, setAlert] = useState(null);
  function handleAlert(message, type) {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

const handleFileInputChange = (event) => {
  const file = event.target.files[0];

  const previewUrl = URL.createObjectURL(file);
  setFile(file);
  // const fileName = event.target.files[0].name;
  // console.log("image" + fileName);
  // setImagePreview(previewUrl);
};
async function onSubmit(e) {
  e.preventDefault();
 
  // console.log(fileUpload);
  const formData = new FormData();
  
  
  formData.append("aboutDesc", form.aboutDesc);
  formData.append("aboutStyle", style);
  // formData.append("event", form.event);
  formData.append("imageFiles", file);
  // formData.append("likes", 1);
  try {
    const url = "http://localhost:5000/portfolio/update/about/"+ user;
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
      alert("About Error");
      console.log("Looks like there was a problem.", err);
      return;
    } else {
      const msg = await response.json();
      // alert("About Details Added");
      handleAlert(msg.message, "success About Details Updated...");
      
      // window.location.reload();
      // setOpen(false);
      // getGroups();
    }
  } catch (err) {
    console.log(err);
  }
}


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
        About Details Updated...
    </p>
</div>

    
 </div>
)}

      <div className="animate__animated animate__fadeInLeft mt-10 mx-7 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                AboutMe Information
              </h3>
              <p className="mb-7 mt-1 text-sm text-gray-600">
                Enter Your Personal Details Here and Description
              </p>
              <div>
                {/* <ProfilePreview/> */}
              </div>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={onSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        AboutMe Image
                      </label>
                      <input
                        type="file"
                        name="aboutpic"
                        id="aboutpic"
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
                        AboutMe Description
                      </label>
                      <textarea
                        type="text"
                        name="aboutDesc"
                        value={form.aboutDesc}
                        onChange={(e) => updateForm({ aboutDesc: e.target.value })}
                        // {...register("aboutDesc", { required: true })}
                        id="aboutDesc"
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
                        id="aboutStyle"
                        name="aboutStyle"
                        onChange={(e) => setStyle( e.target.value )}
                        // {...register("aboutStyle", { required: true })}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option selected value="0">
                          Choose Style
                        </option>
                        <option value="Style#1">Style#1</option>
                        <option value="Style#2">Style#2</option>
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

export default AboutForm;
