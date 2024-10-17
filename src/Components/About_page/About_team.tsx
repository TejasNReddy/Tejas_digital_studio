import team1 from '../../assets/About_images/team1.jpg'
import team2 from '../../assets/About_images/team2.jpg'
import team3 from '../../assets/About_images/team3.jpg'
const About_team = () => {

    const about_team=[
        {
            image:team1,
        },
        {
            image:team2,
        },
        {
            image:team3,
        },
        
    ]


  return (
    <div>
      <div className="w-full p-5 font-primary-font flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold text-primary_purple">Professional Team</h1>
          <p className="text-lg mt-2 text-center">A team of passionate professionals committed to bringing your vision to life through creativity and expertise.</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {about_team.map((about,index)=>{
            return(
                <div key={index} className="p-6 shadow-md relative h-fit">
                    <img src={about.image} alt="about_team" className="aspect-square object-cover  brightness-50 hover:brightness-100 rounded-xl cursor-pointer" />
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default About_team
