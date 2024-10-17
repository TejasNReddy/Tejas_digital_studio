import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import doubleQuote from "../../assets/doubleQuote.png";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user1.jpg";
import user3 from "../../assets/user1.jpg";

const MySwiper: React.FC = () => {
  interface User {
    name: string;
    testimonial: string;
    img: string;
  }

  const users: User[] = [
    {
      name: "John Doe",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, illum. Autem, commodi quae!",
      img: user1,
    },
    {
      name: "Jane Doe",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, illum. Autem, commodi quae!",
      img: user2,
    },
    {
      name: "Sam Smith",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, illum. Autem, commodi quae!",
      img: user3,
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
          <div className="bg-white h-full w-full p-6 md:p-10">
            <div className="flex justify-around gap-4">
              <span className="h-[70px] w-[5px] bg-black"></span>
              <div className="flex items-center justify-center">
                <p className="text-sm md:text-base lg:text-lg">
                  {user.testimonial}
                </p>
              </div>
            </div>

            <div className="h-[2px] w-full bg-slate-100 mx-auto my-5"></div>

            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-4">
                <img
                  src={user.img}
                  alt="user"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
                />
                <span className="text-sm md:text-base lg:text-lg">
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
