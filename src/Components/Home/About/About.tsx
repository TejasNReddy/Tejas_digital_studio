
import { Link } from "react-router-dom";
import AboutCountup from "./AboutCountup";

const About = () => {
	return (
		<div className="w-[100%] lg:h-[80vh] flex items-center justify-center font-primary-font">
			<div className="flex h-[100%] lg:w-4/5 items-center justify-center lg:flex-row flex-col gap-16 lg:gap-2 p-6 mb-5 lg:p-10">
				<div className="lg:w-1/2 w-full h-[100%] mt-5"><AboutCountup/></div>
				<div className="lg:w-1/2 w-full h-[100%] flex align-baseline justify-center flex-col gap-5 ">
					<h1 className="text-5xl font-bold text-primary_purple">About Us </h1>
					<p className="text-justify ">At Tejas Digital Studio, we capture life’s most precious moments in stunning 4K, creating memories that last a lifetime. From events to custom prints, each service is crafted to preserve and celebrate your unique story.</p>
					<Link to="/About" className="bg-primary_purple text-white font-semibold w-fit pt-2 pb-2 pl-4 pr-4 cursor-pointer rounded-lg">View</Link>
				</div>
			</div>
		</div>
	)
}

export default About
