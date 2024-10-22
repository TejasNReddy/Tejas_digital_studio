import React, { useState } from "react";
import pic1 from "../assets/works/pic1.jpeg";
import pic2 from "../assets/works/pic2.jpeg";
import pic3 from "../assets/works/pic3.jpeg";
import pic4 from "../assets/works/pic4.jpeg";
import pic6 from "../assets/works/pic6.jpeg";
import pic7 from "../assets/works/pic7.jpeg";
import pic10 from "../assets/works/pic10.jpeg";
import pic9 from "../assets/works/pic9.jpeg";
import pic8 from "../assets/works/pic8.jpeg";
import pic11 from "../assets/works/pic11.jpeg";

import pic5 from "../assets/works/pic5.jpeg";

import { motion } from "framer-motion";
import Work_hero from "../Components/Works_page/Work_hero";
import { Helmet } from "react-helmet";

const Works: React.FC = () => {
  const gridItems: GridItemProps[] = [
    { imageSrc: pic1, workName: "Wedding", event: "Ceremony" },
    {
      imageSrc: pic2,
      workName: "Wedding",
      event: "Ceremony",
      isVertical: true,
    },
    { imageSrc: pic3, workName: "Wedding", event: "Ceremony" },
    { imageSrc: pic4, workName: "Wedding", event: "Ceremony" },
    {
      imageSrc: pic5,
      workName: "Wedding",
      event: "Ceremony",
      isVertical: true,
      isCenter: true,
    },
    { imageSrc: pic6, workName: "Wedding", event: "Ceremony" },
    { imageSrc: pic7, workName: "Wedding", event: "Ceremony" },
    { imageSrc: pic10, workName: "Wedding", event: "Ceremony" },
    { imageSrc: pic9, workName: "Wedding", event: "Ceremony" },
    { imageSrc: pic8, workName: "Wedding", event: "Ceremony" },
    { imageSrc: pic11, workName: "Wedding", event: "Ceremony" },
  ];

  interface GridItemProps {
    imageSrc: string;
    workName: string;
    event: string;
    isVertical?: boolean;
    isCenter?: boolean;
  }

  const GridItem: React.FC<GridItemProps> = ({
    imageSrc,
    workName,
    event,
    isVertical = false,
    isCenter = false,
  }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
      <div
        className={`relative overflow-hidden ${
          isVertical ? (isCenter ? "row-span-2" : "row-span-1") : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imageSrc}
          alt={workName}
          className="w-full h-full object-cover"
        />
        {isHovered && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-white text-black p-2"
            initial={{ translateY: "100%" }}
            animate={{ translateY: "0%" }}
            exit={{ translateY: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span className="block">{workName}</span>
            <span className="block text-sm">{event}</span>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Helmet>
        <title>Works | Tejas Digital Studio</title>
        <meta
          name="description"
          content="Explore the stunning works of Tejas Digital Studio, featuring wedding photography, portraits, and commercial projects. Let our work inspire your next photoshoot."
        />
        <meta
          name="keywords"
          content="Tejas Digital Studio works, wedding photography portfolio, commercial photography works, event photography portfolio"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Work_hero />
      <div className="grid grid-cols-3 grid-rows-3 gap-4 md:max-w-[calc(100vw-350px)] h-full mx-auto my-20 max-md:grid-cols-1 md:grid-rows-1 max-md:w-[80%] ">
        {gridItems.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
