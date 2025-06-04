

'use client'

import dynamic from 'next/dynamic'
import ScrolTop from '@/components/scrolTop/scrolTop'
import Hero from '@/components/hero/hero'
import Destinations from '@/components/destinations/destinations'


// Lazy Load Components
const NavbarHome = dynamic(() => import('@/components/navbar/navbar'))
const ProductVideoLatestMother = dynamic(() => import('@/components/productVideo/productVideoLatestMother'))
const WelcomePage = dynamic(() => import('@/components/welcomePage/welcomePage'))
const ThreeDModelContainer = dynamic(() => import('@/components/threeDModelContainer/threeDModelContainer'))
const DivSliderParrent = dynamic(() => import('@/components/slider/divSliderParrent'))
const Slider3D = dynamic(() => import('@/components/slider/slider3D'))
const Record = dynamic(() => import('@/components/record/record'))
const Retouched = dynamic(() => import('@/components/retouched/retouched'))
const Integration = dynamic(() => import('@/components/integration/integration'))
const BluePrint = dynamic(() => import('@/components/bluePrint/bluePrint'))
const IndustryTrends = dynamic(() => import('@/components/industryTrends/industryTrends'))
const GetUpdate = dynamic(() => import('@/components/getUpdate/getUpdate'))
const Footer = dynamic(() => import('@/components/footer/footer'))

function HomeClient() {
    const tagList = ["Retouching", "Recoloring", "Editing", "3D Modeling", "Texture Creation"];

    return (
        <>
            <ScrolTop />
            <NavbarHome />
            <div className="bg-[#DEE2E2] bgImage pb-3 flex flex-col relative">
                <Hero />
                {/* <ProductVideoLatestMother
                    videoUrl="../video/main_video.webm"
                    loadingImg="../video/loading-image.webp"
                    tagList={tagList}
                    videoType="video/webm"
                /> */}

                
                    {/* <WelcomePage /> */}
                    <Destinations />
                    <ThreeDModelContainer />
                <DivSliderParrent />
                <Slider3D />
                <Record />
                <Retouched />
                <Integration />
                <BluePrint />
                <IndustryTrends />
                <GetUpdate />
            </div>
            <Footer />
        </>
    )
}

export default HomeClient
