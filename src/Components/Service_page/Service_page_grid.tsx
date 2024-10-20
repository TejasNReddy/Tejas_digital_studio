import { BookImage, CalendarClock, Camera, Wand2 } from "lucide-react";
import service1 from "../../assets/Service_page/service1.jpg";
import service2 from "../../assets/Service_page/service2.jpg";
import service3 from "../../assets/Service_page/service3.jpg";
import service4 from "../../assets/Service_page/service4.jpg";

interface propstype {
  icon: React.ReactElement;
  title: string;
  image: string;
  description: string[];
}

const ServiceItem = ({ icon, title, image, description }: propstype) => (
  <div className="p-10 border-r border-b border-gray-200 last:border-r-0 grid gap-10 lg:grid-cols-2">
    <div>
      <div className="bg-primary_purple text-white w-fit p-3 rounded-full shadow-2xl">
        {icon}
      </div>
      <h3 className="mt-4 mb-2 text-xl font-semibold text-primary_purple lg:text-2xl">
        {title}
      </h3>
      <ul className="list-disc">
        {description.map((item, index) => (
          <li key={index} className="text-base text-gray-500">
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex items-center justify-center">
      <img
        src={image}
        alt={title} 
        className=" rounded-3xl brightness-50 hover:brightness-100 transition-all"
      />
    </div>
  </div>
);

const Service_page_grid = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography & Videography",
      image: service1, 
      description: [
        "4K Indoor and Outdoor Photoshoot",
        "4K Indoor and Outdoor Videoshoot",
        "4K Drone Camera",
        "4K Video",
        "Candid Photography",
        "Video Editing",
      ],
    },
    {
      icon: <CalendarClock className="w-8 h-8" />,
      title: "Event Services",
      image: service2, 
      description: [
        "Pre-wedding Shoot",
        "Reception",
        "Marriage",
        "Maternity",
        "Birthday",
        "Puberty",
        "Naming Ceremony",
        "House Warming",
        "LED Wall Projection",
        "Projector",
        "Mixing Unit",
      ],
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Printing & Merchandise",
      image: service3,
      description: [
        "Mug Printing",
        "T-Shirt Printing",
        "Key Chain Printing",
        "Acrylic Stone Printing",
        "Mobile Back Cover Print",
        "Pillow Printing",
        "Bottle Printing",
      ],
    },
    {
      icon: <BookImage className="w-8 h-8" />,
      title: "Frames & Albums",
      image: service4, 
      description: [
        "Non-Tearable Album",
        "Canvera Album",
        "Photo Frames",
        "LED Lighting Frames",
        "Acrylic Frame",
        "Fancy Frames",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 border-l border-t border-gray-200">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          icon={service.icon}
          title={service.title}
          image={service.image}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Service_page_grid;
