import Service_hero from "../Components/Service_page/Service_hero";
import Service_page_grid from "../Components/Service_page/Service_page_grid";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Photography Services | Tejas Digital Studio</title>
        <meta
          name="description"
          content="Tejas Digital Studio offers a variety of photography services including weddings, portraits, events, and commercial photography. Capture every special moment with our expert photographers."
        />
        <meta
          name="keywords"
          content="Tejas Digital Studio services, wedding photography, portrait photography, event photography, commercial photography, professional photographers, Bengaluru photographers"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Service_hero />
      <div className="p-10">
        <Service_page_grid />
      </div>
    </div>
  );
};

export default Services;
