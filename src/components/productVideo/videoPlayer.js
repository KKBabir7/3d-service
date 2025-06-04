"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const VideoPlayer = ({videoUrl, loadingImg}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadStart = () => {
        setIsLoading(true);
    };

    const handleCanPlayThrough = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading &&
                <div className="absolute flex justify-center w-full h-full">
                    <div className="absolute top-1/2 -translate-y-1/2">
                        <svg class="animate-spin -ml-1 mr-3 h-16 w-16 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                    {/* <img loading="lazy" className="object-cover w-full" src={loadingImg} alt="loading image" /> */}
<Image
    src={loadingImg}
    alt="slider"
    fill
    className="object-cover"
    sizes="100vw"
  />
                     {/* <Image
                        src={loadingImg}
                        alt="Loading"
                        fill
                        className="object-cover w-full"
                        sizes="100vw"
                      /> */}
                    
                </div>
            }

            <div className="flex justify-center w-full h-full">
                <video
                    className="object-cover" width="100%" height="auto"
                    onLoadedData={handleCanPlayThrough}
                    onLoadStart={handleLoadStart}
                    playsinline
                    autoPlay
                    muted
                    loop
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>
        </>
    );
};

export default VideoPlayer;
