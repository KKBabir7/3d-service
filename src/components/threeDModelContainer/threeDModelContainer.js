'use client'
import React, { Suspense, lazy } from "react";
// import ViewModel from '../ViewModel/ViewModel';
import  Link  from "next/link";
import Image from "next/image";
import holosnap  from '../../../public/img/Holosnap-Logo_H_Color.webp'
// import ShoeModel from '../../component3d/ProductVisualization3d/Furniture/Model/ShoeModel';

// const ShoeModel = lazy(() =>
//   import("../../component3d/ProductVisualization3d/Furniture/Model/ShoeModel")
// );

const ThreeDModelContainer = () => {
  return (
    <>
      <div className="py-10 w-full bg-gray-200 flex items-center">
        <div className="container mx-auto ">
          <div className="flex lg:flex-row flex-col gap-1 items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center justify-items-center items-center gap-5  md:gap-10 w-full  px-2 md:px-16">
              <div className="mb-10">
              <div className="relative w-full h-full">
  <Image
    src={holosnap}
    alt="Holosnap Logo"
   
    className="object-contain"
    sizes="100vw"
    priority={false} // or remove to enable default lazy loading
  />
</div>
              </div>

              <div className="flex flex-col justify-items-center md:pt-10 items-center">
              <p className="text-black text-justify">
             {"Holosnap is a cutting-edge 3D service that converts your ordinary photos into high-quality, interactive 3D models — no modeling expertise required. Leveraging advanced AI and computer vision, Holosnap analyzes depth and spatial features from 2D images to generate lifelike 3D content with remarkable precision.Perfect for designers, architects, developers, and 3D creatives, Holosnap simplifies what was once a complex process. Whether you're building for virtual reality, augmented reality, digital media, or product visualization, our service empowers you to bring flat visuals to life.With Holosnap, turning images into immersive 3D models is fast, accurate, and effortless."}
              </p>
              <div className="flex justify-center mt-3 md:mt-6 mb-5 md:mb-0">
               <h3 className="block">
                <Link className="text-xs   md:text-sm font-semibold text-white px-6 py-2 bg-[#FF6900] rounded-3xl" aria-label="contact-us" href="/contact-us">
                  
                 
                    Explore Holosnap
                 
                </Link>
                 </h3>
              </div>
              </div>
            </div>
            
            {/* <div className='h-[320px] md:h-[500px] w-full md:w-[570px]'>
                            <Suspense fallback={<div className='flex justify-center  items-center'>
                               
                                <img loading="lazy" className='md:mt-16 md:ml-2' src='/img/shoeLogo.webp' />
                            </div>}>
                                <ShoeModel />
                            </Suspense>
                            
                        </div> */}
          </div>
          
        </div>
       
      </div>
    </>
  );
};

export default ThreeDModelContainer;
