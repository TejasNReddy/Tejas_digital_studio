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
      name: "John Doe",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, illum. Autem, commodi quae!",
      img: user2,
    },
    {
      name: "John Doe",
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
      style={{
        width: "450px",
        height: "250px",
      }}
    >
      {users.map((user,item) => {
        return (
          <SwiperSlide key={item}>
            <div className="bg-white h-full w-full p-10 " >
              <div className="flex justify-around gap-4">
                <span className="h-[70px] w-[5px] bg-black"></span>
                <div className="flex items-center justify-center">
                  <p>{user.testimonial} </p>
                </div>
              </div>

              <div className="h-[2px] w-full bg-slate-100 mx-auto my-5"></div>

              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-4">
                  <img
                    src={user1}
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <span>{user.name}</span>
                </div>
                <img
                  src={doubleQuote}
                  alt="doubleQuote"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
