import Hero from "../Components/Home/Hero/Hero"
import About from "../Components/Home/About/About"
import Service from "../Components/Home/Services/Service"
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import { useEffect, useRef } from "react";

const Home = () => {
  // const scrollRef = useRef(null);
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);
  return (
    <main className="overflow-x-hidden">
      <Hero/>
      <About/>
      <Service/>
    </main>
  )
}

export default Home
