'use client'

import Link from "next/link";
import ScrolTop from "../scrolTop/scrolTop";
import NavbarHome from "../navbar/navbar";
import './blog.css'
import Navbar2D from "../navbar/navbar2D";
import Navbar3D from "../navbar/navbar3D";
import NavbarContact from "../navbar/navbarContact";




const BlogHeader = ({btnColor , btnColor2d, btnColor3d}) => {
    return (
        <>
         <ScrolTop />
         <NavbarContact />
     <h1 className="mt-5" style={{fontSize:'30px',textAlign:'center',fontWeight:'bold'}}>BLOG</h1>
       
      <div className="flex blogAllFor2D3D space-x-2 border-b">
        <h2>
          <Link 
              href='/blog'
            className={btnColor ? 'allblogColor px-4 py-2 text-sm font-medium relative' : 'px-4 py-2 text-sm font-medium relative'}   
          >All Blog</Link></h2>
          <h2>
             <Link 
              href='/blog/3d'
              className={btnColor3d ? 'allblogColor px-4 py-2 text-sm font-medium relative' : 'px-4 py-2 text-sm font-medium relative'}   
          >3D</Link>
          </h2>
          <h2>
           <Link 
              href='/blog/2d'
              className={btnColor2d ? 'allblogColor px-4 py-2 text-sm font-medium relative' : 'px-4 py-2 text-sm font-medium relative'}   
          >2D</Link></h2>
      </div>

    
        </>
    );
};

export default BlogHeader;