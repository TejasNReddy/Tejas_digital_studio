import React, { useState } from 'react';
import photoFrame from "../assets/works/photoFrame.jpg";
import woodWork from "../assets/works/woodWork.jpg";
import birthDayFrame from "../assets/works/birthDayFrame.jpg";
import Heart from "../assets/works/Heart.jpg";
import AllFrame from "../assets/works/AllFrame.jpg";
import Overall from "../assets/works/Overall.jpg";
import picFrame from "../assets/works/picFrame.jpg";
import wedding from "../assets/works/wedding.jpg";
import frame from "../assets/works/frame.jpg";
import family from "../assets/works/picFrame.jpg";
import forever from "../assets/works/forever.jpg";



import { motion } from 'framer-motion';
import Work_hero from '../Components/Works_page/Work_hero';

interface GridItemProps {
  imageSrc: string;
  workName: string;
  event: string;
  isVertical?: boolean;
  isCenter?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({ imageSrc, workName, event, isVertical = false, isCenter = false }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  

  return (
    <div 
      className={`relative overflow-hidden ${isVertical ? (isCenter ? 'row-span-2' : 'row-span-1') : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={workName} className="w-full h-full object-cover" />
      {isHovered && (
        <motion.div
      className="absolute bottom-0 left-0 right-0 bg-white text-black p-2"
      initial={{ translateY: '100%' }}   
      animate={{ translateY: '0%' }}   
      exit={{ translateY: '100%' }}     
      transition={{ duration: 0.3, ease: 'easeInOut' }}  
    >
      <span className="block">{workName}</span>
      <span className="block text-sm">{event}</span>
    </motion.div>
      )}
    </div>
  );
};

const Works: React.FC = () => {
  const gridItems: GridItemProps[] = [
    { imageSrc: photoFrame, workName: "Wedding", event: "Ceremony" },
    { imageSrc: woodWork, workName: "Kids", event: "Family", isVertical: true },
    { imageSrc: birthDayFrame, workName: "Racing", event: "Sports" },
    { imageSrc: Heart, workName: "Portrait", event: "Fashion" },
    {
      imageSrc: wedding,
      workName: "Photographer",
      event: "Work",
      isVertical: true,
      isCenter: true,
    },
    { imageSrc: AllFrame, workName: "Breakdance", event: "Street" },
    { imageSrc: Overall, workName: "Model", event: "Fashion" },
    { imageSrc: picFrame, workName: "Products", event: "Commercial" },
    { imageSrc: frame, workName: "Breakdance", event: "Street" },
    { imageSrc: forever, workName: "Model", event: "Fashion" },
    { imageSrc: family, workName: "Products", event: "Commercial" },
  ];

  return (
    <div>
      <Work_hero/>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 md:max-w-[calc(100vw-350px)] h-full mx-auto my-20 max-md:grid-cols-1 md:grid-rows-1 max-md:w-[80%] ">
        {gridItems.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Works;