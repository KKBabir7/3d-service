import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const Slider3D = () => {
  const sliderList = [
    {
      image: "/img/Fashion Accessories.webp",
      label: "Fashion Accessories",
      link: "/fashion-accessories"
    },
    {
      image: "/img/Tech Accessories.webp",
      label: "Tech Accessories",
      link: "/tech-accessories"
    },
    {
      image: "/img/Packaging.webp",
      label: "Packaging",
      link: "/packaging"
    },
    {
      image: "/img/Cosmetics-update.webp",
      label: "Cosmetics",
      link: "/cosmetics"
    },
    {
      image: "/img/Furniture.webp",
      label: "Furniture",
      link: "/furniture"
    },
    {
      image: "/img/Tech Equipment.webp",
      label: "Tech Equipment",
      link: "/tech-equipments"
    },
  ];
  return (
    <div id='3d' className='pb-10 pt-0 '>
      <div className='flex justify-center gap-7 my-10'>
        <div className='w-[400px] border-b border-[#FF6900]'></div>
        <h1 className='text-[28px] md:text-[40px] -mb-2 md:-mb-4 font-bold'>3D</h1>
        <div className='w-[400px] border-b border-[#FF6900]'></div>
      </div>
      <div>

        <div className='2xl:container 2xl:mx-auto '>
          <div className='relative w-full '>
            <Carousel uniqueId="id_125" delay={5000}
              item={3}
              indicators={false}
              responsive={[
                {
                  breakPoint: 641,
                  item: 1
                },
                {
                  breakPoint: 1025,
                  item: 2,
                }
              ]
              }
            >
              {sliderList.map((item, index) => (
            <div key={index}>
                <Link to={item.link} className='relative flex flex-col md:block mx-2 cursor-pointer'>
              
              <div>
                  <LazyLoadImage
                    src={item.image}
                    className="w-full object-cover"
                    effect="blur"
                  />
                </div>
                <div className='w-full flex gap-3 py-4 justify-center'>
                  <h2 className='text-black font-medium'>{item.label}</h2>
                </div>
              
              </Link>
            </div>
            ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className='container mx-auto mt-10'>

        <p className='text-xs text-center md:text-sm px-[54px]'>{`Visualize your brand in a captivating three-dimensional spectacle, brought to life by a skilled team of 3D artists. Whether showcasing products with realism, crafting engaging animations, or building immersive virtual experiences, we've got you covered. Our meticulous digital replicas capture every nuance and detail with astonishing accuracy, breathing
life into your products.`}</p>
        <p className='text-xs md:text-sm text-center mt-5 mb-10 px-[52px] '>{`From intricate design elements to functional features, our 3D models empower customers to explore from every angle before purchase. In architectural visualization, we transcend blueprints, offering a virtual world where structures and spaces come alive. This immersive experience allows stakeholders to comprehend designs with unparalleled clarity, facilitating informed decision-making for architects, designers, and clients.`}</p>

        <div className='flex justify-center '>
          <h3 className='block'>
             <Link aria-label='contact-us' to="/contact-us" className='text-xs md:text-sm font-semibold text-white px-6 py-2 bg-[#FF6900] rounded-3xl'>Generate Realistic 3D Models</Link>
          </h3>
         
        </div>
      </div>
    </div>
  )
}

export default Slider3D;