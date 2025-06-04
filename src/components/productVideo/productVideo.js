
"use client";
import Image from "next/image";
import { useState } from "react";
// import play from "/img/play-2.png"
// import video from "../../video/production.mp4"
// import video from "./video/production.mp4";
// import video from './video/production.mp4';

const ProductVideo = () => {

  const [playBool, setPlayBool] = useState(false);

  const playVideo = () => {
    setPlayBool(true);
    const video = document.getElementById("productVideo");
    video.play();
  }
  return (
    <div className="bg-[#DEE2E2]  pb-12">
      <div className="2xl:container mx-auto">


        <div className="hidden md:flex flex-col">
          <div className="relative h-full mb-48 w-full flex justify-center">
            <div className="flex justify-center w-full   absolute top-0 opacity-0 transition-all duration-300" style={{ opacity: playBool ? 1 : 0 }}>
              <video id="productVideo" width="100%" height="auto" controls muted loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div onClick={playVideo} style={{ opacity: playBool ? 0 : 1 }} className="transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative w-[250px] md:w-[350px] lg:w-[450px]" >
            <Image
  src={play}
  alt="play"
  width={500}
  height={300}
  sizes="100vw"
  style={{
    width: '100%',
    height: 'auto',
  }} />
              <h4 className="hidden md:block md:text-[40px] lg:text-5xl font-bold text-kow-text-black uppercase absolute md:-right-[185px] lg:-right-[220px] md:top-[140px] lg:top-[184px]">RETOUCH</h4>
            </div>
          </div>
          <h2 className="text-5xl text-center font-bold uppercase text-kow-text-black pt-7">HERE IS YOUR TAGLINE</h2>
        </div>

        <div className="flex md:hidden flex-col justify-center items-center">
          {
            playBool ?
              <div className="flex justify-center w-full">
                <video width="100%" height="auto" controls autoPlay muted loop>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              :
              <div onClick={() => setPlayBool(true)} className="cursor-pointer flex flex-col items-center justify-center relative max-w-full md:w-[450px]" >
               <Image
  src={play}
  alt="play"
  width={500}
  height={300}
  sizes="100vw"
  style={{
    width: '100%',
    height: 'auto',
  }} />
                {/* <h4 className="text-5xl font-bold text-kow-text-black uppercase absolute -right-[220px] top-[184px]">RETOUCH</h4> */}
              </div>
          }
          <h2 className="text-3xl font-bold uppercase text-kow-text-black pt-7">HERE IS YOUR TAGLINE</h2>
        </div>
      </div>
    </div>

  );
};

export default ProductVideo;


