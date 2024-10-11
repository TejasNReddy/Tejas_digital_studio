import service_hero from '../../assets/Service_page/service_hero.jpg'
const Service_hero = () => {
  return (
    <div className='flex items-end  w-full h-[50vh] bg-no-repeat bg-cover bg-center relative font-primary-font p-5'style={{backgroundImage:`url(${service_hero})`}}>
        <div className='absolute w-full h-[50vh] top-0 left-0 bg-black bg-opacity-50'></div>
        <div className='z-10 p-5'>
            <h1 className='text-4xl text-white mb-2 lg:text-6xl'>Our Services</h1>
            <p className="text-zinc-300 text-lg lg:text-xl">Professional photography capturing life's best moments with artistry and precision.</p>
        </div>
    </div>
  )
}

export default Service_hero
