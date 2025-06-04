"use client";
import React, { useEffect, useState } from 'react';
import DivSlider from './divSlider';
import ReactCompareImage from 'react-compare-image';
import arrowImage from '../../images/arrow.png';
import Link from 'next/link';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image';

const DivSliderParrent = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const sliderList = [
        {
            "after": "/img/Image_Slider/Background Removal_raw.webp",
            "before": "/img/Image_Slider/Background Removal_output.webp",
            "lebel": "Background removal"
        },
        {
            "after": "/img/Image_Slider/Ghost Mannequin_raw.webp",
            "before": "/img/Image_Slider/Ghost Mannequin_output.webp",
            "lebel": "Ghost Mannequin"
        },
        {
            "after": "/img/Image_Slider/Manipulation_raw.webp",
            "before": "/img/Image_Slider/Manipulation_output.webp",
            "lebel": "Manipulation"
        }, {
            "after": "/img/Image_Slider/Photo Recolor_raw.webp",
            "before": "/img/Image_Slider/Photo Recolor_output.webp",
            "lebel": "Photo Recolor"
        },
        {
            "after": "/img/Image_Slider/Retouching_raw.webp",
            "before": "/img/Image_Slider/Retouching_output.webp",
            "lebel": "Retouching"
        }
    ]
    // Use slice to get the last two elements
    const lastOneItems = sliderList.slice(-1);
    // Use slice to get the last two elements
    const lastTwoItems = sliderList.slice(-2);
    const firstOneItems = sliderList.slice(0, 1);
    const firstTwoItems = sliderList.slice(0, 2);

    const divStyle = {
        width: 350,
        marginLeft: 10,
        marginRight: 10
    }

    const nextSlidFunc = () => {
        setCurrentPosition((pos) => (pos + 1) % sliderList.length);
    }
    const prevSlidFunc = () => {
        setCurrentPosition((pos) => (pos - 1 + sliderList.length) % sliderList.length);
    }
    useEffect(() => {
        var containers = document.querySelectorAll('[data-testid="container"]');

        // Apply the CSS styles to each selected element
        containers.length > 0 && setTimeout(() => {
            containers.forEach((container) => {
                container.style.height = '100%';
            });
        }, 100);
    }, [])
    return (
        <div id='images' className='pt-0  pb-0 '>
            <div className='flex justify-center gap-7 my-10'>
                <div className='w-[400px] border-b border-[#FF6900]'></div>
                <h2 className='text-[28px] md:text-[40px]  -mb-2 lg:-mb-4 font-bold'>IMAGES</h2>
                <div className='w-[400px] border-b border-[#FF6900]'></div>
            </div>
            <div className='relative 2xl:container 2xl:mx-auto 2xl:px-0 h-[400px] lg:h-[337px] xl:h-[423px] 2xl:h-[508px] '>
                <div className=''>
                    <button
                        // disabled={currentPosition === 0}
                        className='bg-[#666] lg:bg-transparent py-2 lg:py-0 px-2 absolute top-1/2 left-0 z-40 -translate-y-1/2  disabled:opacity-10 cursor-pointer' onClick={prevSlidFunc}
                    //  disabled={currentPosition === -((sliderList.length - 1))}
                    >
                       <Image
  src={arrowImage}
  alt="left-arrow"
  width={25}
  height={25}
/>
                    </button>
                    <button
                        // disabled={currentPosition === (sliderList.length - 1)}
                        className='bg-[#666] lg:bg-transparent py-2 lg:py-0 px-2 absolute top-1/2 right-0 z-40 -translate-y-1/2 disabled:opacity-10 cursor-pointer' onClick={nextSlidFunc}>

                        {/* <img loading="lazy" className='rotate-180' src={arrowImage.src} width={25} height={25} alt="right-arrow"/> */}
                        <Image
  src={arrowImage}
  alt="right-arrow"
  width={25}
  height={25}
  className='rotate-180'
/>

                    </button>
                </div>
                {/* <div className='2xl:container 2xl:mx-auto h-[350px] grid grid-cols-1 lg:grid-cols-[350px_auto_350px] gap-3'> */}
                <div className='2xl:container 2xl:mx-auto h-full grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    <div className='hidden lg:block'>

                        <DivSlider startPos={1} width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length + 3}>
                            <>

                                {lastOneItems.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            {/* <img loading="lazy" className='w-full h-full object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' /> */}
                                           
  <Image
    src={item.after}
    alt="slider"
    fill
    className="object-cover"
    sizes="100vw"
  />

                                        </div>
                                        <h3 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h3>
                                    </div>
                                ))}
                                {sliderList.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            {/* <img loading="lazy" className='w-full h-full object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' /> */}
                                            <Image
    src={item.after}
    alt="slider"
    fill
    className="object-cover"
    sizes="100vw"
  />

                                        </div>
                                        <h3 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h3>
                                    </div>
                                ))}
                                {firstTwoItems.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            {/* <img loading="lazy" className='w-auto h-full  object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' /> */}
                                            <Image
    src={item.after}
    alt="slider"
    fill
    className="object-cover"
    sizes="100vw"
  />

                                        </div>
                                        <h3 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h3>
                                    </div>
                                ))}

                            </>
                        </DivSlider>
                    </div>
                    <div>
                        <DivSlider startPos={1} width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length + 1} >
                            <>
                                {sliderList.map((item, index) => (
                                    <div key={index} className='z-10 float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='compareImageParrent w-full h-full relative'>
                                            <LazyLoadComponent >
                                                <ReactCompareImage
                                                    leftImage={item.after}
                                                    rightImage={item.before}
                                                />
                                            </LazyLoadComponent>
                                        </div>
                                        <h3 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h3>
                                    </div>
                                ))}
                                {firstOneItems.map((item, index) => (
                                    <div key={index} className='z-10 float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='compareImageParrent w-full h-full relative'>
                                            <LazyLoadComponent >
                                                <ReactCompareImage
                                                    leftImage={item.after}
                                                    rightImage={item.before}
                                                />
                                            </LazyLoadComponent>
                                        </div>
                                        <h3 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h3>
                                    </div>
                                ))}
                            </>
                        </DivSlider>
                    </div>
                    <div className='hidden lg:block'>
                        <DivSlider startPos={2} width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length + 2}>
                            <>
                                {sliderList.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            {/* <img loading="lazy" className='w-full h-full object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' /> */}
                                            <Image
    src={item.after}
    alt="slider"
    fill
    className="object-cover"
    sizes="100vw"
  />

                                        </div>
                                        <h3 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h3>
                                    </div>
                                ))}
                                {firstTwoItems.map((item, index) => (
                                    <div key={index} className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                                        <div className='w-full h-full relative'>
                                            {/* <img loading="lazy" className='w-full h-full object-cover' src={item.after} alt="slider" fill={true} objectFit='cover' /> */}
                                            <Image
    src={item.after}
    alt="slider"
    fill
    className="object-cover"
    sizes="100vw"
  />

                                        </div>
                                        <h3 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'><span className='text-[30px] pb-[3px]'>{item.lebel.charAt(0)}</span><span>{item.lebel.substring(1, item.lebel.length)}</span><span className='ml-3 w-10 h-[1px] bg-black'></span></h3>
                                    </div>
                                ))}
                            </>
                        </DivSlider>
                    </div>
                </div>

            </div>
            <div className='container mx-auto mt-10'>

                <p className='text-xs md:text-sm px-[54px] text-center'>{`3D Company's outstanding post-production services serve as a dynamic catalyst for global retailers. Experience a palette of color brilliance, where each shade blends to craft the perfect ambiance for brands. We tailor the product visuals for any platform, making sure your products radiate brilliance, whether on a website, social media, or print media. `}</p>
                {/* <p className='text-xs md:text-sm text-center mt-5 mb-10 px-[52px] '>{`Experience a palette of color brilliance, where each hue harmonizes to craft the perfect ambiance for brands. We tailor the product visuals for any platform, making sure your products radiate brilliance, whether on a website, social media, or in print.`}</p> */}
           
                <div className='flex justify-center mt-5'>
                    <h3 className='block'>
                         <Link aria-label='Contact' href={"/contact-us"} className='text-xs md:text-sm font-semibold text-white px-6 py-2 bg-[#FF6900] rounded-3xl'>Avail Image Retouching at Scale</Link>
                    </h3>
                   
                </div> 
            </div>
        </div>
    );
};

export default DivSliderParrent;