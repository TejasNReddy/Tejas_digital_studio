import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Testimonial from "../components/testimonial/Testimonial";
import Footer from "../components/testimonial/Footer";

const Home: React.FC = () => {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider containerRef={containerRef}>
        <main data-scroll-container ref={containerRef}>
          <Testimonial />
        </main>
      </LocomotiveScrollProvider>
      <Footer />
    </>
  );
};

export default Home;
