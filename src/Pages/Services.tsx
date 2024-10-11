import Service_hero from "../Components/Service_page/Service_hero"
import Service_page_grid from "../Components/Service_page/Service_page_grid"


const Services = () => {
  return (
    <div>
      <Service_hero/>
      <div className="p-10"><Service_page_grid/></div>
    </div>
  )
}

export default Services
