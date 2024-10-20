import React from "react";
import footerBG from "../../assets/footerbackground.jpg";
import mailIcon from "../../assets/mail.png";
import iphoneIcon from "../../assets/iphone.png";
import locationIcon from "../../assets/location.png";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <div
      className="relative  bg-cover bg-right lg:bg-center text-[#cccccc] flex items-center "
      style={{ backgroundImage: `url(${footerBG})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 px-[2rem] py-[2rem] lg:px-[10rem]">
        <div className="flex flex-col  lg:flex-row">
          <div className="flex flex-col   gap-10    lg:flex-row lg:gap-[5rem] ">
            <div className="flex flex-col  lg:w-[30%] ">
              <h1 className="text-white text-[1.125rem] font-bold ">
                Tejas Photo Studio
              </h1>
              <p className="mt-5 leading-6">
                Capturing life’s special moments, creating lasting memories that
                tell your unique story and bring joy for years to come.
              </p>
            </div>
            <div className="">
              <h1 className="text-white text-[1.125rem] font-bold ">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-2 ">
                {["About", "Services", "Works"].map((link) => (
                  <li key={link} className="relative">
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      className="text-[rgb(204,204,204)] relative z-10"
                      whileHover={{ color: "#ffffff" }}
                    >
                      {link}
                    </motion.a>
                    <motion.span
                      className="absolute left-0 bottom-[-5px] h-[2px] w-full bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" max-lg:mt-8">
            <h1 className="text-white text-[1.125rem] font-bold">Contact</h1>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-2">
                <img
                  src={iphoneIcon}
                  alt="phone"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <a href="tel:+919986866995" className="text-white">
                  +91 9986866995
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={mailIcon}
                  alt="mail"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <a href="mailto:tejas222666@gmail.com" className="text-white">
                  tejas222666@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={locationIcon}
                  alt="location"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <a
                  href="https://www.google.com/maps/dir//Surya+city+chandupura+post+anekal+taluk,+Anekal+Main+Road,+Bengaluru,+Karnataka+560099/@12.7895507,77.6628685,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae6e7e92a261e5:0xd7808f65be77ea3e!2m2!1d77.7040683!2d12.7895539?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Surya city Chandupura, Anekal Main Road, Bengaluru-560099
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#cccccc] mt-[2rem]"></div>
      </div>
    </div>
  );
};

export default Footer;
