

"use client";
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const VideoPlayerLatest = ({ videoUrl, loadingImg }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
      video.play().catch(error => {
        console.error("Autoplay failed:", error);
        setHasError(true);
      });
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Start loading the video
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [videoUrl]);

  return (
    <div className="relative w-full h-full">
      {/* Loading image */}
      {isLoading && loadingImg && (
        <div className="absolute inset-0 flex justify-center items-center">
           <div className="relative w-full h-full">
         {loadingImg?.src && (
        <Image
          src={loadingImg.src}
          alt="loading"
         
          className="object-cover"
        
 
    fill
    
    sizes="100vw"
          
        />
      )}
      </div>
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
          <p>Video failed to load</p>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source src={videoUrl} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayerLatest;