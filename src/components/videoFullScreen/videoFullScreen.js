import React from 'react';

const VideoFullScreen = ({video}) => {
    return (
        <div>
            <div className="">
                <div className="relative flex flex-col justify-center items-center md:h-screen">
                    <div className="flex justify-center w-full md:h-full">
                        <video className="object-cover" width="100%" height="auto" playsInline autoPlay muted loop>
                            <source src={video} type="video/webm" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoFullScreen;