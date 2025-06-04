
"use client";
import { Suspense, lazy, useState } from "react";
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'

import { LazyLoadImage } from "react-lazy-load-image-component";
import VideoPlayerLatest from "./videoPlayerLatest.js";
import Image from "next/image.js";

// import video from "./video/production.mp4";
// import video from './video/production.mp4';

// const VideoPlay = lazy(() => import('./VideoPlay.jsx'));
// const VideoPlay = lazy(() => import('./VideoPlay.js'));

export default function ProductVideoLatest({ videoUrl, loadingImg, tagList = [] }) {

    const [playBool, setPlayBool] = useState(false);

    const playVideo = () => {
        setPlayBool(true);
        const video = document.getElementById("productVideo");
        video.play();
    }


    return (
        <div id="videoElement" className="">
            <div className="mt-[76px]">
                <div className="relative  flex flex-col justify-center items-center h-auto md:h-screen">
                     <h1 className="threedh1Frtee font-tag-font">3D Modeling and Rendering Services</h1>
                    <Suspense fallback={
                        <div className="flex justify-center w-full h-full">
                            <div className="absolute top-1/2 -translate-y-1/2">
                                <svg class="animate-spin -ml-1 mr-3 h-16 w-16 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>

                           
 
 <div className="relative w-full h-full"> 
   
  <Image
    src={loadingImg.src}
    alt="loading"
    fill
    className="object-cover"
    sizes="100vw"
  />
</div>
                        </div>
                    }>
                        <VideoPlayerLatest videoName="3d-video" loadingImg={loadingImg} videoUrl={videoUrl}/>

                        {/* <VideoPlayer loadingImg={loadingImg} videoUrl={videoUrl} /> */}
                        {/* <VideoPlay /> */}
                        {/* tag line */}
                        {
                            tagList.length > 0 &&
                            <div className="absolute top-1/2 -translate-y-1/2 w-full divoless">
                                <Carousel uniqueId="id_1050" delay={3000}
                                    item={1}
                                    indicators={false}
                                >
                                    {tagList.map((item, index) =>
                                        <div key={index} className="flex justify-center font-tag-font opacity-60 "><h1 className="text-2xl md:text-7xl font-bold uppercase text-white ">{item}</h1></div>
                                    )}
                                </Carousel>
                            </div>
                        }

                    </Suspense>

                    {/* <h2 className="text-3xl font-bold uppercase text-kow-text-black pt-7">HERE IS YOUR TAGLINE</h2> */}
                </div>
            </div>
        </div>

    );
};


// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}
