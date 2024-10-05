import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Works" element={<Works/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
  )
}