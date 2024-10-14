import  about_hero from '../../assets/About_images/about_hero.jpg'
const About_hero = () => {
  return (
    <div className='flex items-end  w-full h-[50vh] bg-no-repeat bg-cover bg-center lg:bg-top  relative font-primary-font p-5'style={{backgroundImage:`url(${about_hero})`}}>
        <div className='absolute w-full h-[50vh] top-0 left-0 bg-black bg-opacity-50'></div>
        <div className='z-10 p-5'>
            <h1 className='text-4xl text-white mb-2 lg:text-6xl'>About Us</h1>
            <p className="text-zinc-300 text-lg lg:text-xl">Capturing your moments with exceptional photography, videography, and custom prints.</p>
        </div>
    </div>
  )
}

export default About_hero
