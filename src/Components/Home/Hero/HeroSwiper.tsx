import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import slider_image1 from "../../../assets/Hero_images/heroimage1.jpg";
import slider_image2 from "../../../assets/Hero_images/heroimage2.jpg";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);

const HeroSwiper: React.FC = () => {
  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      loop={true}
      className="w-screen h-screen font-primary-font"
    >
      <SwiperSlide>
        <div className="relative w-[100%] h-full flex items-center justify-center">
          <div
            className="w-full h-full bg-right lg:bg-center bg-no-repeat bg-cover flex items-center justify-baseline"
            style={{ backgroundImage: `url(${slider_image2})` }}
          >
            <div className="absolute inset-0 bg-black opacity-35 lg:opacity-30" />
            <div className=" z-10 text-white ml-10 flex flex-col gap-3">
              <h5
                className="lg:text-3xl text-2xl font-medium"
              >
                Welcome to{" "}
              </h5>
              <h1 className="text-5xl font-bold lg:text-8xl">
                Tejas Digital Studio
              </h1>
              <p className="lg:text-2xl text-xl mt-3">
                Where Every Shot Tells a Story
              </p>
              <Link
                to="/Contact"
                className="text-xl bg-white w-fit p-2 rounded-lg cursor-pointer text-primary_purple font-semibold lg:text-2xl lg:p-3 mt-3 lg:font-normal md:hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            className="w-full h-full bg-center lg:bg-center bg-no-repeat bg-cover flex items-center justify-baseline"
            style={{ backgroundImage: `url(${slider_image1})` }}
          >
            <div className="absolute inset-0 bg-black opacity-35 lg:opacity-25" />
            <div className=" z-10 text-white ml-10 flex flex-col gap-3">
              <h5 className="lg:text-3xl text-2xl font-medium">Welcome to </h5>
              <h1 className="text-5xl font-bold lg:text-8xl">
                Tejas Digital Studio
              </h1>
              <p className="lg:text-2xl text-xl mt-3">
                Where Every Shot Tells a Story
              </p>
              <Link
                to="/Contact"
                className="text-xl bg-white w-fit p-2 rounded-lg cursor-pointer text-primary_purple font-semibold lg:text-2xl lg:p-3 mt-3 lg:font-normal  md:hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSwiper;
