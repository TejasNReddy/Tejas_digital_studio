import  work_hero from '../../assets/works/work_hero.jpg'
const Work_hero = () => {
  return (
    <div className='flex items-end  w-full h-[50vh] bg-no-repeat bg-cover bg-center relative font-primary-font p-5'style={{backgroundImage:`url(${work_hero})`}}>
        <div className='absolute w-full h-[50vh] top-0 left-0 bg-black bg-opacity-50'></div>
        <div className='z-10 p-5'>
            <h1 className='text-4xl text-white mb-2 lg:text-6xl'>Our Works</h1>
            <p className="text-zinc-300 text-lg lg:text-xl">Explore our work and see how we bring moments to life through our lens.</p>
        </div>
    </div>
  )
}



export default Work_hero
