import team1 from '../../assets/About_images/team1.jpg'
const About_team = () => {

    const about_team=[
        {
            name:'Enrico Brown',
            image:team1,
        },
        {
            name:'Enrico Brown',
            image:team1,
        },
        {
            name:'Enrico Brown',
            image:team1,
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
                    <img src={about.image} alt={about.name} className="object-cover w-full h-64 brightness-50 hover:brightness-100 rounded-xl cursor-pointer" />
                    <h3 className="text-xl font-semibold text-primary_purple absolute top-5 left-10  rounded-b-xl bg-white px-5 py-2">{about.name}</h3>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default About_team
