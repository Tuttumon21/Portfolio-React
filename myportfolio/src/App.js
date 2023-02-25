import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import  Test  from "./components/Test";
import ProfileForm from "./components/forms/ProfileForm";
import AboutForm from "./components/forms/AboutForm";
import Services from "./components/Services";
import Index from "./components/Index";
import TabsProfile from "./components/TabsProfile";
import Myportfolio from "./components/Myportfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Test/>}/>
      <Route path="/Index" element={<Index/>}/>
      <Route path="/ProfileForm" element={<ProfileForm/>}/>
      <Route path="/AboutForm" element={<AboutForm/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/Profile" element={<TabsProfile/>}/>
      <Route path="/myportfolio" element={<Myportfolio/>}/>

    </Routes>
  );
}
export default App;
