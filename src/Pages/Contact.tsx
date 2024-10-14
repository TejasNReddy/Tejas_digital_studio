import { Phone } from "lucide-react"
import Contact_hero from "../Components/Contact_page/Contact_hero"

const Contact = () => {

  const contact_info =[
    {
      icon: <Phone size={24} />,
      title: "Call us",
      description: "+91 9986866995"
    }
  ]

  return (
    <div>
      <Contact_hero/>
      <div>
        <div>
          <h1>Information</h1>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
