import Hero from "../Components/Home/Hero/Hero";
import About from "../Components/Home/About/About";
import Service from "../Components/Home/Services/Service";
import Testimonial from "../Components/Testimonial_sec/Testimonial";
import Works_sec from "../Components/Home/Works/Works_sec";
import {Helmet} from "react-helmet";
const Home: React.FC = () => {
  return (
    <main className="overflow-x-hidden">
      <Helmet>
        <title>Tejas Digital Studio | Professional Photography Services</title>
        <meta
          name="description"
          content="Tejas Digital Studio offers professional photography services including weddings, portraits, events, and commercial shoots. Capture your moments with us."
        />
        <meta
          name="keywords"
          content="Tejas Digital Studio, photography services, wedding photography, event photography, commercial photography, portrait photography, Bengaluru photographers"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero />
      <About />
      <Service />
      <Works_sec />
      <Testimonial />
    </main>
  );
};

export default Home;
