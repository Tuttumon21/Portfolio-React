import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import  Test  from "./components/Test";
import ProfileForm from "./components/forms/ProfileForm";
import AboutForm from "./components/forms/AboutForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Test/>}/>
      <Route path="/ProfileForm" element={<ProfileForm/>}/>
      <Route path="/AboutForm" element={<AboutForm/>}/>

    </Routes>
  );
}
export default App;
