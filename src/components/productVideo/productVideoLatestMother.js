'use client';

import { Suspense, lazy, useState, useEffect } from "react";
import { Carousel } from 'react-div-carousel';
import 'react-div-carousel/dist/index.css';

import VideoPlayerLatest from "./videoPlayerLatest.js";
import Image from "next/image.js";

const VideoPlay = lazy(() => import('./videoPlay.js'));

export default function ProductVideoLatestMother({ videoUrl, loadingImg, tagList = [], videoType }) {
    const [playBool, setPlayBool] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const playVideo = () => {
        setPlayBool(true);
        const video = document.getElementById("productVideo");
        video?.play();
    };

    // Only render carousel after client mounts
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div id="videoElement" className="">
            <div className="pt-[54px] md:pt-0">
                <div className="relative flex flex-col justify-center items-center h-auto md:h-screen">
                    <Suspense fallback={
                        <div className="flex justify-center w-full h-full">
                            <div className="absolute top-1/2 -translate-y-1/2">
                                <svg className="animate-spin h-16 w-16 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                            <div className="relative w-full h-full">
                                <Image
                                    src={loadingImg}
                                    alt="Loading"
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>
                        </div>
                    }>
                        <VideoPlayerLatest videoName="home-video" loadingImg={loadingImg} videoType={videoType} videoUrl={videoUrl} />

                        {/* Carousel with tagList - Render after client mount only */}
                        {isClient && tagList.length > 0 && (
                            <div className="absolute top-1/2 -translate-y-1/2 w-full divoless">
                                <Carousel
                                    uniqueId="id_1050"
                                    delay={3000}
                                    item={1}
                                    indicators={false}
                                >
                                    {tagList.map((item, index) => (
                                        <div key={index} className="flex justify-center font-tag-font opacity-60">
                                            <h2 className="text-2xl md:text-7xl font-bold uppercase " style={{color:'#fff',borderColor:'#e5e7eb'}}>{item}</h2>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
