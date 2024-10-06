import Service_grid from './Service_grid'

const Service = () => {
  return (
    <div className='w-[100%] lg:p-10'>
        <div className='p-6'>
            <h1 className='text-5xl font-bold text-primary_purple'>Our Services</h1>
            <p className='text-lg mt-4 text-gray-500'>Explore our diverse services designed to capture, celebrate, and preserve your most cherished moments.</p>
        </div>
      <Service_grid/>
    </div>
  )
}

export default Service
