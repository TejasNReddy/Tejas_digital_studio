import { Phone, Mail, MapPin } from "lucide-react";
import Contact_hero from "../Components/Contact_page/Contact_hero";
import contact from "../assets/contact_images/contact.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  const contact_info = [
    {
      icon: <Phone size={30} />,
      title: "Call us",
      description: "+91 9986866995",
      link: "tel:+91 9986866995",
    },
    {
      icon: <FaWhatsapp size={30} />,
      title: "Whatsapp Us",
      description: "+91 9986866995",
      link: "https://wa.me/9986866995",
    },
    {
      icon: <Mail size={30} />,
      title: "Send us an email",
      description: "tejas222666@gmail.com",
      link: "mailto:tejas222666@gmail.com",
    },
    {
      icon: <MapPin size={30} />,
      title: "Visit our office",
      description:
        "Surya city chandupura post anekal taluk, Anekal Main Road, Bengaluru, Karnataka 560099",
      link: "https://www.google.com/maps/place/Tejas+Digital+Studio/@12.7895552,77.7034246,188m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae6e7e92a261e5:0xd7808f65be77ea3e!8m2!3d12.7895539!4d77.7040683!16s%2Fg%2F11cn2mbq6q?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <div className="font-primary-font">
      <Helmet>
        <title>Contact Us | Tejas Digital Studio</title>
        <meta
          name="description"
          content="Get in touch with Tejas Digital Studio for professional photography services. We're here to capture your moments with creativity and expertise."
        />
        <meta
          name="keywords"
          content="contact Tejas Digital Studio, photography services contact, Bengaluru photographers contact, hire photographer"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

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
              <Link to={info.link} target="_blank">
                <div key={index} className="flex items-center gap-3">
                  <div className="text-white bg-primary_purple p-3 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold ">{info.title}</h2>
                    <p className="text-xl font-medium">{info.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={contact} alt="contact" className="rounded-3xl shadow-lg " />
        </div>
      </div>
    </div>
  );
};

export default Contact;
