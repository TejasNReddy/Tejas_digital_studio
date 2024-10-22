import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import doubleQuote from "../../assets/doubleQuote.png";
// import user1 from "../../assets/works/photoFrame.jpg";
// import user2 from "../../assets/works/photoFrame.jpg";
// import user3 from "../../assets/works/photoFrame.jpg";

const MySwiper: React.FC = () => {
  interface User {
    name: string;
    testimonial: string;
  }

  const users: User[] = [
    {
      name: "Madhavi K",
      testimonial: "Best place for photos and photography.",
    },
    {
      name: "Chandan M",
      testimonial:
        "Incredible experience! The team's vision and well planned shots exceeded all my expectations.",
    },
    {
      name: "R Kishan",
      testimonial:
        "Talented and professional! They captured every moment with precision and creativity.",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-[80vw] md:w-[60vw] lg:w-[35vw] h-auto"
    >
      {users.map((user, item) => (
        <SwiperSlide key={item}>
          <div className="bg-white h-full w-full p-6 md:p-10 rounded-lg">
            <div className="flex justify-around gap-4">
              <span className="h-[70px] w-[5px] bg-[#574a5e]"></span>
              <div className="flex items-center justify-center">
                <p className="text-sm md:text-base lg:text-lg text-[#574a5e]">
                  {user.testimonial}
                </p>
              </div>
            </div>

            <div className="h-[2px] w-full bg-slate-100 mx-auto my-5"></div>

            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-4">
                <span className="text-sm md:text-base lg:text-lg  text-[#574a5e]">
                  {user.name}
                </span>
              </div>
              <img
                src={doubleQuote}
                alt="doubleQuote"
                className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
