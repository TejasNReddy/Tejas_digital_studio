import contact_hero from "../../assets/contact_images/contact_hero.jpg";
const Contact_hero = () => {
  return (
    <div
      className="flex items-end  w-full h-[50vh] bg-no-repeat bg-cover bg-center relative font-primary-font p-5"
      style={{ backgroundImage: `url(${contact_hero})` }}
    >
      <div className="absolute w-full h-[50vh] top-0 left-0 bg-black bg-opacity-50"></div>
      <div className="z-10 p-5">
        <h1 className="text-4xl text-white mb-2 lg:text-6xl">Contact Us</h1>
        <p className="text-zinc-300 text-lg lg:text-xl">
        Get in touch with us to capture, create, and preserve your memorable moments.
        </p>
      </div>
    </div>
  );
};

export default Contact_hero;
