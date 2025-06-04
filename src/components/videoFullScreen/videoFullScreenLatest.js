import React, { useMemo, useState } from 'react';

const VideoFullScreenLatest = ({ video, videoName }) => {

    const [isLoading, setIsLoading] = useState(true);

    const handleLoadStart = () => {
        setIsLoading(true);
    };

    const handleCanPlayThrough = () => {
        setIsLoading(false);
    };

    const videoPlayer = useMemo(() => (
        <>
            <div>
                <div className="">
                    <div className="relative flex flex-col justify-center items-center md:h-screen">
                        <div className="flex justify-center w-full md:h-full">
                            <video className="object-cover" width="100%" height="auto"
                                onLoadedData={handleCanPlayThrough}
                                onLoadStart={handleLoadStart}
                                playsInline
                                autoPlay
                                muted
                                loop
                            >
                                <source src={video} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ), [videoName, isLoading]);

    return videoPlayer;

};

export default VideoFullScreenLatest;