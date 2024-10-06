import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
	return (
		<>
    <Navbar/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/About" element={<About/>}/>
			<Route path="/Services" element={<Services/>}/>
			<Route path="/Works" element={<Works/>}/>
			<Route path="/Contact" element={<Contact/>}/>
		</Routes>
		</>
	)
}
