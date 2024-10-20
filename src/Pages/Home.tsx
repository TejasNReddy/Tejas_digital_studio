import Hero from "../Components/Home/Hero/Hero";
import About from "../Components/Home/About/About";
import Service from "../Components/Home/Services/Service";
import Testimonial from "../Components/Testimonial_sec/Testimonial";
import Works_sec from "../Components/Home/Works/Works_sec";
const Home: React.FC = () => {
  return (
        <main  className="overflow-x-hidden">
          <Hero />
          <About />
          <Service />
          <Works_sec/>
          <Testimonial/>
        </main>
  );
};

export default Home;
