"use client";
import React, { useEffect, useState } from 'react';

const VideoPlay = () => {

    const [getVideo, setVideo] = useState('/video/The Kow Company_video.mp4'); 
    // const videoLoadFunc = async () => {
    //     try {
    //         const response = await fetch('/video/The Kow Company_video.mp4');
    //         const blob = await response.blob();
    //         setVideo(URL.createObjectURL(blob));
    //         console.log(getVideo);
    //     } catch (error) {
            
    //     }
    // }

    // useEffect(() => {
    //     videoLoadFunc(); 
    // },[])
    return (
        <div className="flex justify-center w-full h-full">
        <video onLoadedMetadata={(e)=> console.log(e)} className="object-cover" width="100%" height="auto" playsinline autoPlay muted loop>
            <source src={getVideo} type="video/mp4" />
        </video>
    </div>
    );
};

export default VideoPlay;