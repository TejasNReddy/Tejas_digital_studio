import React from "react";
import footerBG from "../../assets/footerBG.jpg";
import logo from "../../assets/icon.png";
import mailIcon from "../../assets/mail.png";
import iphoneIcon from "../../assets/iphone.png";
import locationIcon from "../../assets/location.png";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <div
      className="relative  h-[400px] bg-cover bg-center text-[#cccccc] flex items-center"
      style={{ backgroundImage: `url(${footerBG})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10 z-0" />

      <div className="relative z-10 px-[10rem] ">
        <div className="flex justify-between items-center">
          <div className="flex  gap-[4rem] items-center">
            <div className="flex flex-col w-[30%]">
              <img src={logo} alt="logo" className="h-20 w-20" />
              <p className="mt-5 leading-6">
                Photography inila miss uman saten eliten finus vivera alacus
                miss the drudean seneice miss notumane tonec a fermen.
              </p>
            </div>
            <div>
              <h1 className="text-white text-[1.125rem] font-bold ">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-2 mt-4">
                {["About", "Services", "Works"].map((link) => (
                  <li key={link} className="relative">
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      className="text-[#cccccc] relative z-10"
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
          <div className="">
            <h1 className="text-white text-[1.125rem] font-bold  ">Contact</h1>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-2">
                <img
                  src={iphoneIcon}
                  alt="phone"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <span>+1 123-456-0606</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={mailIcon} alt="" className="h-[1.5rem] w-[1.5rem]" />
                <span>info@phoxel.com</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={locationIcon}
                  alt=""
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <span>120 King St, Charleston SC 29401, USA</span>
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
