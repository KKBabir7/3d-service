
"use client";
import Link from "next/link";
import ReactCompareImage from "react-compare-image";

const Retouched = () => {
    return (
        <div id="ai">
            <div className="container mx-auto py-4  md:pt-20 ">
                <div className=" justify-center items-center grid grid-cols-1 lg:grid-cols-[500px_auto] gap-6 md:gap-28">
                    <div className=" h-[670px] relative z-50 mt-5 lg:mt-0 bg-white sm:ml-20 md:ml-28  ">
                        <div className="h-full overflow-hidden ">
                            <div className="imageCompareWrap">
                                    <ReactCompareImage
                                        leftImage={"/img/model.webp"}
                                        rightImage={"/img/model-BR.webp"}
                                    />
                            </div>
                        </div>
                    </div>

                    <div className="px-3 lg:px-0 text-center lg:text-left ">
                        <h2 className="text-[28px] md:text-[44px]  font-bold border-b-2 leading-[50px] border-[#FF6900]" style={{textTransform:'uppercase'}}>3D WORK WITH AI</h2>
                        <div className="">
                            <p className="text-sm  text-center lg:text-justify pt-7">  Retouched is your go-to solution for fast, free, and precise background removal — powered by advanced artificial intelligence. Designed with photographers, graphic designers, e-commerce brands, and content creators in mind, this tool delivers clean, professional results in just seconds.

Say goodbye to tedious manual editing and file juggling. With a streamlined interface and smart automation, Retouched offers a seamless editing experience that feels effortless — no Photoshop skills required. Whether you're prepping product photos or crafting standout visuals, Retouched helps you work smarter and achieve studio-quality outcomes with ease. </p>
                            <p className="text-sm  pt-5 text-center lg:text-justify">{`Beyond Background Removal — Powerful Creative Tools with Retouched

Retouched goes far beyond basic background removal. With Preset Backgrounds, you can instantly replace dull or cluttered backdrops with high-quality, visually appealing alternatives that elevate your images.

Need platform-specific edits? The Smart Resizing feature automatically adjusts your visuals for perfect display on platforms like Facebook, Shopify, and Amazon — ensuring every image meets the ideal format and resolution.

Unleash your imagination with AI Background Generation. Simply enter a prompt to generate realistic scenes or imaginative, abstract environments tailored to your vision — no design skills required.

For the finishing touch, Professional Touch-Up applies subtle enhancements to give your images a polished, studio-grade look. Whether you're creating content for business or creativity, Retouched provides the tools to make every image stand out. `}</p>
                           
                        </div>


                        <div className='flex justify-center lg:justify-start pt-7 '>
                            <h3 className="block">
                            <Link className="cursor-pointer text-xs  font-semibold text-white px-8 py-2 bg-[#FF6900] rounded-3xl" href="" target="_blank" rel="noreferrer">
                                 Remove Image Background with AI
                            </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Retouched;