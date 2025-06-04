'use client'
import React, { useEffect, useRef, useState } from 'react';

const DivSlider = ({ startPos, currentPos, childLength, children }) => {
  const [sliderId, setSliderId] = useState(null); // Initially set to null
  const [getSliderWith, setSliderWidth] = useState(0);
  const [getPossition, setPossition] = useState(startPos);
  
  // Generate sliderId only on the client side
  useEffect(() => {
    setSliderId(`slider_${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  const sliderParrentWidth = () => {
    const sliderParrent = document.getElementById(sliderId);
    sliderParrent && setSliderWidth(sliderParrent.offsetWidth);
  }

  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth((slwidth) => sliderRef.current.offsetWidth);

      for (let index = 0; index < childLength; index++) {
        sliderRef.current.children[0].children[index].style.width = sliderRef.current.offsetWidth + 'px';
      }
    }
  }, [sliderId]);

  useEffect(() => {
    setPossition((pos) => startPos + currentPos);
  }, [currentPos]);

  // Avoid rendering DivSlider if sliderId is not yet set (to prevent hydration issues)
  if (!sliderId) {
    return null;
  }

  return (
    <div ref={sliderRef} id={sliderId} className="relative overflow-hidden" style={{ height: '100%' }} >
      <div className="transition-all duration-300 absolute top-0 left-0 h-full" style={{ width: (getSliderWith * childLength) + 'px', left: (getSliderWith * (-getPossition)) + 'px' }}>
        {children}
      </div>
    </div>
  );
};

export default DivSlider;
