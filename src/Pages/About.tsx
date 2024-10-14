import About_content from "../Components/About_page/About_content";
import About_hero from "../Components/About_page/About_hero";
import About_story from "../Components/About_page/About_story";
import About_team from "../Components/About_page/About_team";
import about_bg from "../assets/About_images/about_bg.jpg";

const About = () => {
  return (
    <div>
      <About_hero />
      <About_content />
      <div
        className="h-[60vh] w-full bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${about_bg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute bg-black w-full h-full bg-opacity-30"></div>
      </div>
      <About_story/>
      <About_team />
    </div>
  );
};

export default About;
