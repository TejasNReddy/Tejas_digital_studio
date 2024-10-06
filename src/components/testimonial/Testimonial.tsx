import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import parallaxBG from "../../assets/parallaxBg.jpg";
import "locomotive-scroll/dist/locomotive-scroll.css";
import MySwiper from "./MySwiper";

const ParallaxSection: React.FC = () => {
  const { scroll } = useLocomotiveScroll();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const speed = 0.45;

  useEffect(() => {
    if (!scroll) return;

    const handleScroll = (instance: any) => {
      if (sectionRef.current && imageRef.current) {
        const scrollPosition = instance.scroll.y;
        const sectionTop = sectionRef.current.getBoundingClientRect().top;

        const offset = (scrollPosition - sectionTop) * speed;

        imageRef.current.style.transform = `translateY(${-offset}px)`;
      }
    };

    scroll.on("scroll", handleScroll);

    return () => {
      scroll.off("scroll", handleScroll);
    };
  }, [scroll, speed]);

  return (
    <div
      ref={sectionRef}
      className="relative h-[420px] w-full overflow-hidden "
      data-scroll
      data-scroll-section
    >
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center z-0 "
        style={{
          backgroundImage: `url(${parallaxBG})`,
          height: "400%",
          willChange: "transform",
          top: "-100%",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-65" />

      <div className="relative z-10 flex justify-around items-center h-full ">
        <div className="text-[white]">
          <h5 className="  font-bold text-[1.75vw]">
            Need help with professional photography?{" "}
          </h5>
          <h5 className="font-bold text-[1.75vw]">Let's work together!</h5>
          <button
            className="text-[1.25rem] font-thin border-[1px] border-white px-4 py-2 rounded-full mt-10 
    hover:text-black hover:border-black hover:bg-white transition-all duration-300 ease-in-out"
          >
            Contact Me
          </button>
        </div>
        <div><MySwiper/></div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => {
  return (
    <section className="relative " data-scroll-container>
      <ParallaxSection />
    </section>
  );
};

export default Testimonial;
