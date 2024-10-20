import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface mobilenavabar {
  navtoggle: boolean;
  setnavtoggle: (value: boolean) => void;
}
const MobileNavbar: React.FC<mobilenavabar> = ({ navtoggle, setnavtoggle }) => {
  return (
    navtoggle && (
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0" }}
        transition={{ duration: 0.5 }}
        className="flex gap-10 items-center justify-center flex-col font-primary-font fixed top-0 left-0 bg-primary_purple w-[100%] h-[100vh]"
      >
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl flex items-center justify-center cursor-pointer text-black bg-white rounded-full p-2"
          onClick={() => {
            setnavtoggle(false);
          }}
        >
          <IoCloseSharp />
        </motion.div>
        <div>
          <ul className="text-5xl font-light flex items-center justify-between flex-col gap-5">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                className="hover:text-primary_purple hover:bg-white hover:p-1 hover:rounded-xl text-white"
                onClick={() => {
                  setnavtoggle(false);
                }}
                to="/"
              >
                Home
              </Link>
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link
                className="hover:text-primary_purple hover:bg-white hover:p-1 hover:rounded-xl text-white"
                onClick={() => {
                  setnavtoggle(false);
                }}
                to="/About"
              >
                About
              </Link>
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                className="hover:text-primary_purple hover:bg-white hover:p-1 hover:rounded-xl text-white"
                onClick={() => {
                  setnavtoggle(false);
                }}
                to="/Works"
              >
                Works
              </Link>
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                className="hover:text-primary_purple hover:bg-white hover:p-1 hover:rounded-xl text-white"
                onClick={() => {
                  setnavtoggle(false);
                }}
                to="/Services"
              >
                Services
              </Link>
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                className="hover:text-primary_purple hover:bg-white hover:p-1 hover:rounded-xl text-white"
                onClick={() => {
                  setnavtoggle(false);
                }}
                to="/Contact"
              >
                Contact
              </Link>
            </motion.span>
          </ul>
        </div>
        <div className="w-[100%] flex items-center justify-center gap-2">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="https://www.instagram.com/tejas_digital_studio/?igsh=MWFnbmRmaWluYzZhZg%3D%3D"
              target="_blank"
              className="bg-white flex items-center justify-center text-4xl rounded-xl p-2 text-black shadow-xl"
            >
              <FaInstagram />
            </Link>
          </motion.span>
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="https://youtube.com/@tejas_digital_studio?si=pCdkffnpIZ6wGTJf"
              target="_blank"
              className="bg-white flex items-center justify-center text-4xl rounded-xl p-2 text-black shadow-xl"
            >
              <FaYoutube />
            </Link>
          </motion.span>
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              to="https://wa.me/9986866995 "
              target="_blank"
              className="bg-white flex items-center justify-center text-4xl rounded-xl p-2 text-black shadow-xl"
            >
              <FaWhatsapp />
            </Link>
          </motion.span>
        </div>
      </motion.div>
    )
  );
};

export default MobileNavbar;
