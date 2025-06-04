
"use client";
import Image from "next/image";
import  Link  from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Integration = () => {
    return (
        <div id="integration" className="pb-16">
            <div className='flex justify-center gap-10 mt-6 mb-16 md:my-16'>
                <div className='w-[400px] border-b border-[#FF6900]'></div>
                <h2 className='text-[28px] md:text-[40px] -mb-2 md:-mb-4 font-bold'>INTEGRATION</h2>
                <div className='w-[400px] border-b border-[#FF6900]'></div>
            </div>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-2 '>
                    <div>
                        {/* <img loading="lazy" src={integration1}
                            width={270}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                        /> */}
<Image
  src="/img/integration1.webp"
  alt="integration photo"
  width={270}
  height={0}  
  className="shadow-gray-500 shadow-lg h-auto"
/>
                    </div>
                    <div>
                        {/* <img loading="lazy" src={integration2}
                            width={300}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                        /> */}
                        {/* <LazyLoadImage
                            src={"/img/integration2.webp"}
                            width={300}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                            // effect="blur"
                        /> */}
                        <Image
  src="/img/integration2.webp"
  alt="integration photo"
  width={300}
  height={0}  
  className="shadow-gray-500 shadow-lg"
/>
                    </div>
                    <div>
                        {/* <img loading="lazy" src={integration3}
                            width={270}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                        /> */}
                        {/* <LazyLoadImage
                            src={"/img/integration3.webp"}
                            width={270}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                            // effect="blur"
                        /> */}
                                              <Image
  src="/img/integration3.webp"
  alt="integration photo"
  width={270}
  height={0}  
  className="shadow-gray-500 shadow-lg h-auto"
/>
                    </div>
                </div>

                <div className="mt-10">

                    <p className='text-xs text-center md:text-sm px-[54px]'>{`Pioneering the Future of 3D Content Production

In a time where innovation thrives on collaboration, we’re proud to unveil a transformative partnership between Covision Media, NUREG GmbH, Studio. This dynamic alliance merges cutting-edge technology, industry-leading production, and creative excellence to redefine 3D content creation.

Experience the synergy:
– Covision Media brings AI-driven 3D scanning innovation.
– NUREG GmbH delivers top-tier content production and studio expertise.
– 3D Company adds its signature brilliance in post-production.

Together, we’re shaping the next generation of immersive visual experiences.`}</p>
                    <p className='text-xs md:text-sm text-center mt-5 mb-10 px-[52px] '>{`From concept to completion, we push boundaries, defy limits, and sculpt the future—one polygon at a time. `}</p>
                    <div className='flex justify-center'>
                        <h3 className="block">
                        <Link href="#" aria-label="intergration-btn" className='text-xs md:text-sm font-semibold text-white px-6 py-2 bg-[#FF6900] rounded-3xl'>
                            Explore the 3D Content
                        </Link>
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Integration;