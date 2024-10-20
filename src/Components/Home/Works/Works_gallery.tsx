import img1 from "../../../assets/works/AllFrame.jpg"
import img2 from "../../../assets/works/Heart.jpg"
import img3 from "../../../assets/works/family.jpg"


const Works_gallery = () => {
    interface Imageworks{
        image_url: string;
    }

    const image_works: Imageworks[] = [
        {image_url: img1 },
        {image_url: img2},
        {image_url: img3},
      
    ]

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 md:max-w-[calc(100vw-350px)] h-full mx-auto my-20 max-md:grid-cols-1 md:grid-rows-1 max-md:w-[80%]">
          {image_works.map((item, index) => (
        <div className="" key={index}>
          <img src={item.image_url} alt="works" />
        </div>
      ))}
    </div>
  )
}

export default Works_gallery
