import { Phone, Mail, MapPin } from "lucide-react";
import Contact_hero from "../Components/Contact_page/Contact_hero";
import contact from '../assets/contact_images/contact.jpg'

const Contact = () => {
  const contact_info = [
    {
      icon: <Phone size={30} />,
      title: "Call us",
      description: "+91 9986866995",
    },
    {
      icon: <Mail size={30} />,
      title: "Send us an email",
      description: "tejas222666@gmail.com",
    },
    {
      icon: <MapPin size={30} />,
      title: "Visit our office",
      description:
        "Surya city chandupura post anekal taluk, Anekal Main Road, Bengaluru, Karnataka 560099",
    },
  ];

  return (
    <div>
      <Contact_hero />
      <div className="p-10 lg:p-20 w-full h-1/2 flex items-baseline lg:items-center justify-center flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2 flex gap-10 flex-col ">
          <div>
            <h1 className="font-semibold text-4xl text-primary_purple">
              Information
            </h1>
            <p className="mt-2">
              Contact us to capture your moments beautifully.
            </p>
          </div>
          <div className="flex flex-col gap-7">
            {contact_info.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-white bg-primary_purple p-3 rounded-full">
                  {info.icon}
                </div>
                <div>
                  <h2 className="text-lg">{info.title}</h2>
                  <p className="text-xl font-medium  ">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
            <img src={contact} alt="contact" className="rounded-3xl shadow-lg "/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
