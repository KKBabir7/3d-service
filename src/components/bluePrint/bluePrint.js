
'use client'
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";


const BluePrint = () => {
    return (
        <div>
            <div className='flex justify-center gap-7 mb-5 '>
                <div className='w-[80px] sm:w-[400px] border-b border-[#FF6900]'></div>
                <h2 className='text-[28px] md:text-[40px] -mb-2 md:-mb-4 font-bold'>2D BLUE PRINT</h2>
                <div className='w-[80px] sm:w-[400px] border-b border-[#FF6900]'></div>
            </div>
            <div className='container mx-auto pt-10 pb-10 md:pb-10'>
                <div className='flex  justify-center items-center  '>
                    <div>
                        {/* <img loading="lazy" src={tree} 
                        width={950}
                        alt='integration photo'
                        /> */}
                        {/* <LazyLoadImage
                            src={"/img/tree.webp"}
                            // width={950}
                            alt='integration photo'
                            className="w-full"
                            // effect="blur"
                        /> */}
                        <div className="w-full">
      <Image
        src="/img/tree.webp" // Make sure this path is correct
        alt="Integration photo"
        width={1600}
        height={900}
        className="w-full h-auto object-cover"
      />
    </div>
                    </div>

                </div>

                <div className="mt-10">

                    <p className='text-xs md:text-sm text-justify px-4 md:px-[30px]'>{`3D stduio, we prioritize clarity and efficiency in every aspect of asset management. Our commitment to transparency ensures that clients always have a clear, real-time view of their assets.

Using the latest technology and dependable systems, we provide seamless access to asset status, usage, and performance — all backed by detailed reports and intuitive monitoring tools. With us, you're always informed and in control.`}</p>



                </div>

            </div>
        </div>
    );
};

export default BluePrint;