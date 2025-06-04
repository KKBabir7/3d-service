'use client'
import React from "react";
import { InlineWidget } from "react-calendly";
import ScrolTop from "../scrolTop/scrolTop";
import NavbarContact from "../navbar/navbarContact";
import Footer from "../footer/footer";

function BookACall() {
  return (
    <>
    {/* <div className="w-full bg-[#dee2e2]">
    
    </div> */}
    <ScrolTop/>
    <NavbarContact/>
      <div className="h-full md:h-[800px]">
        <InlineWidget 
        url="https://calendly.com/talk2kow/"
        styles={{
          height: '700px'
        }}
         />
      </div>
      <Footer />
    </>

  );
}

export default BookACall;
