import { Camera, CalendarClock, Wand2, BookImage } from 'lucide-react';
import { Link } from 'react-router-dom';

interface propstype{
    icon: React.ReactElement;
    title: string;
    description: string;
  
}

const ServiceItem = ({ icon, title, description }:propstype) => (
  <div className="p-6 border-r border-b border-gray-200 last:border-r-0">
    <div className='bg-primary_purple text-white w-fit p-3 rounded-full shadow-2xl'>{icon}</div>
    <h3 className="mt-4 mb-2 text-xl font-semibold text-primary_purple lg:text-2xl">{title}</h3>
    <p className="text-base text-gray-500">{description}</p>
    <div className='flex justify-end mt-3'><Link to="/Services" className='bg-primary_purple text-white p-3 pt-2 pb-2 rounded-md font-medium cursor-pointer shadow-md'>View</Link></div>
  </div>
);

const Service_grid = () => {

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography & Videography",
      description: "Capturing stunning moments with high-quality 4K photography and videography tailored to your needs."
    },
    {
      icon: <CalendarClock className="w-8 h-8" />,
      title: "Event Services",
      description: "Providing comprehensive event coverage to ensure your special occasions are unforgettable."
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Printing & Merchandise",
      description: "Offering customized printing solutions for a variety of products to commemorate your memories."
    },
    {
      icon: <BookImage className="w-8 h-8" />,
      title: "Frames & Albums",
      description: "Creating beautiful frames and albums to showcase and protect your cherished memories."
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-l border-t border-gray-200">
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />

      ))}
    </div>
  );
};

export default Service_grid;