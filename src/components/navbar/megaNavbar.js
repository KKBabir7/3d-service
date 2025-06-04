
'use client';
import logo from "../../images/logo2.png"
// import { CgMenuGridO } from "react-icons/cg";
import Link from 'next/link'


const MegaNavbar = () => {
//   const [getMenuBool, setMenuBool] = useState(false); 
  return (
    <>
      {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
      <div className="bg-[black]   w-full top-0 z-[999]  shadow-xl md:shadow-none" style={{boxShadow:'none'}}>
        <div className="container mx-auto py-1">
          <div className="flex items-center py-1 gap-16 ml-2">
            {/* <Link href={"/"}>
              <img loading="lazy" src={logo}
                width={60}
                height={30}
                alt="logo" />
            </Link> */}
            {/* --------------------------------------For Large Screen------------------------------------------ */}
            {/* <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12"> */}
            <Link href="#" className="text-white text-xs font-semibold" aria-label="2D">IMAGES</Link>
            <Link href="#" className="text-white text-xs font-semibold " aria-label="3D">3D</Link>
            <Link href="#" target="_blank" className="text-white text-xs cursor-pointer   font-semibold " rel="noreferrer" aria-label="AI">AI</Link>
            <Link href="#" target="_blank" className="text-white text-xs font-semibold " aria-label="3D">Resources</Link>

          </div>
          {/* <div className="flex items-center justify-between md:hidden">
            <Link href={"/"}>
              <img loading="lazy" src={logo}
                width={80}
                height={40}
                alt="logo" />
            </Link>
            <CgMenuGridO onClick={() => setMenuBool(!getMenuBool)} className="text-[32px] text-white cursor-pointer" />
          </div> */}
        </div>
        {/* -----------------------------------For Mobile--------------------------------------- */}
        {/* {
          getMenuBool &&         <div className="block md:hidden bg-[#DEE2E2] pt-2 ">
          <div className="container mx-auto">
            <div className="flex flex-col text-center gap-4">
              <HashLink onClick={() => setMenuBool(false)} href="/2d" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">IMAGES</HashLink>
              <HashLink onClick={() => setMenuBool(false)} href="/3d" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">3D</HashLink>
              <HashLink onClick={() => setMenuBool(false)} href="/#ai" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">AI</HashLink>
              
            </div>
          </div>
        </div>
        } */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default MegaNavbar;