import MySwiper from "./MySwiper";
import parallaxBG from "../../assets/Hero_images/heroimage1.jpg";

const ParallaxSection: React.FC = () => {
  return (
    <div className="relative  overflow-hidden ">
      <div
        className="bg-cover bg-no-repeat px-10 py-10"
        style={{
          backgroundImage: `url(${parallaxBG})`,
          backgroundAttachment: "fixed",
          height: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65" />

        <div className="relative z-10 flex flex-col justify-around items-center gap-10 lg:flex-row lg:justify-around lg:items-center ">
          <div className="text-[white]">
            <h5 className="font-bold text-[8vw] md:text-[4vw] lg:text-[2.5vw]">
              Need help with professional photography?
            </h5>
            <h5 className="font-bold text-[8vw] md:text-[4vw] lg:text-[2.5vw]">
              Let's work together!
            </h5>
            <button
            onClick={()=>{window.location.href="/Contact"}}
              className="text-[1.25rem] font-thin border-[1px] border-white px-4 py-2 rounded-full mt-10 
    hover:text-black hover:border-black hover:bg-white transition-all duration-300 ease-in-out"
            >
              Contact Us
            </button>
          </div>
          <div>
            <MySwiper />
          </div>
        </div>
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
