import Hero from "../Components/Home/Hero/Hero";
import About from "../Components/Home/About/About";
import Service from "../Components/Home/Services/Service";
// import Testimonial from "../Components/testimonial/Testimonial";
const Home: React.FC = () => {
  return (
        <main  className="overflow-x-hidden">
          <Hero />
          <About />
          <Service />
          {/* <Testimonial/> */}
        </main>
  );
};

export default Home;
