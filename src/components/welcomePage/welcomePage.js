

// import sideArt from "../../images/sideArtV1.webp"
// import logowhite from "../../images/logo2.webp"
// import Image from "next/image";

// const WelcomePage = () => {
//     return (
//         <div className=''>
//             <div className='bg-[#7C9C30] relative '>
//                 <div className="container mx-auto ">
//                     <div className="flex flex-col lg:flex-row items-center py-5 lg:py-0">

//                         <div className="hidden lg:block absolute bottom-0 left-0 ">
//                             <div className="relative w-[250px] lg:w-[320px] xl:w-[360px]">
//                                 <div className="">
//                                     <Image
//                                         src={sideArt}
//                                         alt="sideArt"
//                                         className="w-auto h-auto"
//                                         width={360} // Width for optimal display
//                                         height={360} // Height for optimal display
//                                         priority 
//                                     />
//                                 </div>
//                                 <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
//                                     <Image
//                                         src={logowhite}
//                                         alt="logo"
//                                         width={200}
//                                         height={150}
//                                         priority 
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="block lg:hidden">
//                             <Image
//                                 className="w-[120px] pb-5"
//                                 src={logowhite}
//                                 alt="logo"
//                                 width={120}
//                                 height={120}
//                                 priority 
//                             />
//                         </div>

//                         <div className=" flex justify-end lg:h-[400px] items-center">
//                             <p className="w-full px-3 lg:w-3/4 lg:pl-20 lg:px-0 xl:px-20 text-white text-sm md:text-base text-justify">
//                             The KOW Company has been a leading name in the world of E-commerce as a relentless player in Studio Image &amp; 3D post-production contents. We are constantly developing visual contents with creativity, and precision and turning them into stunning realities. With a versatile range of services in traditional image editing, we are equally proud of our remarkable 3D modeling, rendering, and architectural visualization abilities.

// We have skilled artists and designers who create stunning 3D visuals and lifelike renderings that leave a lasting mark. To make things more streamlined, Retouched.ai is our advanced AI integration that sets us apart. This amazing technology has allowed us to redefine how we enhance product images. Retouched.ai easily and quickly removes backgrounds from your photos with the help of Ai. The result is an intricate, clean image that helps your product to be more attractive.

// At The KOW Company, we don&apos;t meet your expectations; we beat them. We&apos;re all about excellent quality and creative solutions to help your brand stand out, turning your every visual into something extraordinary.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default WelcomePage;


import sideArt from "../../images/sideArtV1.webp";
import logowhite from "../../images/logo2.webp";
import Image from "next/image";

const WelcomePage = () => {
    return (
        <div>
            <div className="bg-[#FF6900] relative">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center py-5 lg:py-0">

                        {/* Side Image and Center Logo */}
                        <div className="hidden lg:block absolute bottom-0 left-0">
                            <div className="relative w-[250px] lg:w-[320px] xl:w-[360px]">
                                <Image
                                    src={sideArt}
                                    alt="sideArt"
                                    className="w-auto h-auto"
                                    width={360}
                                    height={360}
                                    priority
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                    <Image
                                        src={logowhite}
                                        alt="logo"
                                        width={200}
                                        height={150}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Logo for Mobile */}
                        <div className="block lg:hidden pt-1  pb-1 flex justify-center min-h-[60px]">
                            <Image
                                className="w-[120px]"
                                src={logowhite}
                                alt="logo"
                                width={120}
                                height={60}
                                priority
                            />
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col justify-center lg:h-[450px] items-end order-1 lg:order-none">
                            <div className="w-full px-3 lg:w-[75%] xl:w-[75%] lg:pl-20 text-white text-sm md:text-base text-justify space-y-3">
                                <p>
                                    3D Company has been a leading name in the world of E-commerce as a relentless player in Studio Image &amp; 3D post-production contents. We are constantly developing visual contents with creativity and precision, turning them into stunning realities.
                                
                                    With a versatile range of services in traditional image editing, we are equally proud of our remarkable 3D modeling, rendering, and architectural visualization abilities.
                                 </p>
                                 <p>
                                    We have skilled artists and designers who create stunning 3D visuals and lifelike renderings that leave a lasting mark.
                               
                                
                                    To make things more streamlined, Retouched is our advanced AI integration that sets us apart. This amazing technology has allowed us to redefine how we enhance product images.
                               
                                    Retouched easily and quickly removes backgrounds from your photos with the help of Ai. The result is an intricate, clean image that helps your product to be more attractive.
                                </p>
                                <p>
                                    At 3D Company, we don&apos;t meet your expectations; we beat them. We&apos;re all about excellent quality and creative solutions to help your brand stand out, turning your every visual into something extraordinary.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
