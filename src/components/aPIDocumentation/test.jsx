import { Link } from "react-router-dom";
import HeaderOne from "../../componentAPI/microComponent/HeaderOne";
import ParagraphOne from "../../componentAPI/microComponent/ParagraphOne";
import NavbarAPI from "../../componentAPI/NavbarAPI";
import './style.css'
import { useEffect, useRef, useState } from "react";
import SectionOne from "../../componentAPI/Content/SectionOne";
import SectionTwo from "../../componentAPI/Content/SectionTwo";
import SectionThree from "../../componentAPI/Content/SectionThree";

const APIDocsText = () => {
    const [isSticky, setIsSticky] = useState(false);
    const boxRef = useRef(null);

    const scrollAction = () => {
        const box_one_par = boxRef.current;
        if (!box_one_par) return; // Check if the box is defined

        // const box_one_par = document.querySelector(`#box_two`);
        const windowHeight = window.innerHeight;
        const elementTop = box_one_par.getBoundingClientRect().top;

        console.log(
            "window hegith ", windowHeight,
            "visible", elementTop
        );

        // if (elementTop < windowHeight - offset) {
        if (elementTop < 0) {
            console.log("Testing iiii :")
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }

    }

    useEffect(() => {

        window.addEventListener('scroll', scrollAction);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', scrollAction);
            // document.body.style.overflow = 'auto';
        };
    }, []);




    return (
        <div className="overflow-hidden">
            <NavbarAPI />

            <div ref={boxRef} className="min-h-screen">
                <div className="flex h-full relative">
                    {/* sidebar */}
                    <div style={{ position: isSticky ? 'fixed' : 'absolute' }} className="absolute z-20 h-full left-0 top-0 pl-[120px] pr-[33px] pt-[75px] border-r-[1px] border-[#1E1E1E]">
                        <div className="w-[308px] flex flex-col gap-[42px]">
                            <ParagraphOne>In this section, you will find the following detailed information</ParagraphOne>
                            <div className="flex flex-col gap-[33px]">


                                <a href="#" className="flex gap-3 group hover:text-[#009665]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:fill-[#009665]">
                                        <path d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8 13H12" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8 17H16" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="font-anek-latin text-base font-normal">API Resources</span>
                                </a>

                                <a href="#" className="flex gap-3 group hover:text-[#009665]">
                                    <svg className="group-hover:fill-[#009665]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M6.36997 9.50993C2.28997 9.79993 2.29997 15.7099 6.36997 15.9999H16.03C17.2 16.0099 18.33 15.5699 19.2 14.7799C22.06 12.2799 20.53 7.27991 16.76 6.79991C15.41 -1.34009 3.61998 1.74993 6.40998 9.50993" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 16V19" className="stroke-[#292D32] group-hover:stroke-[#009665]" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" className="stroke-[#292D32] group-hover:stroke-[#009665]" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18 21H14" className="stroke-[#292D32] group-hover:stroke-[#009665]" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 21H6" className="stroke-[#292D32] group-hover:stroke-[#009665]" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="font-anek-latin text-base font-normal">API Endpoints Overview</span>
                                </a>


                                <a href="#" className="flex gap-3 group hover:text-[#009665]">
                                    <svg className="group-hover:fill-[#009665]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97C22 16.97 20 18.97 16 18.97H15.5C15.19 18.97 14.89 19.12 14.7 19.37L13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.13999 19.15 8.78 18.97 8.5 18.97Z" className="stroke-[#292D32] group-hover:stroke-[#009665]" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8 8.69995L6 10.7L8 12.7" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 8.69995L18 10.7L16 12.7" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13 8.37L11 13.03" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="font-anek-latin text-base font-normal">Detailed Endoints Description</span>
                                </a>

                                <a href="#" className="flex gap-3 group hover:text-[#009665]">
                                    <svg className="group-hover:fill-[#009665]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.5 15.5L15.5 8.5" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.5 15.5L8.5 8.5" className="stroke-[#292D32] group-hover:stroke-white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="font-anek-latin text-base font-normal">Detailed Endoints Description</span>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* main content*/}
                    <div className="w-full">
                        <div className="flex flex-col">
                            <div style={{ position: isSticky ? 'fixed' : 'absolute' }} className="absolute top-0 bg-white left-[462px] border-b-[1px] border-black w-full">
                                <ul className="anek-latin-font flex gap-14 pl-[52px] py-3">
                                    <li><Link to="#" className="text-[#009665] text-xl font-[700]">API</Link></li>
                                    <li><Link to="#" className="text-xl font-[400]">SDK</Link></li>
                                    <li><Link to="#" className="text-xl font-[400]">UI Component</Link></li>
                                </ul>
                            </div>

                            <div className="w-[750px] ml-[462px] mt-[70px] pl-[52px] pb-[47px]">
                             <div className="flex flex-col gap-[28px]">
                                <SectionOne />
                                <hr className="w-[766px] ml-[52px]"></hr>
                                <SectionTwo />
                                <hr className="w-[766px] ml-[52px]"></hr>
                                <SectionThree />
                                </div>       

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default APIDocsText;