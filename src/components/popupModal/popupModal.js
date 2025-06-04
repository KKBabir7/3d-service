"use client";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute bg-gray-600 bg-opacity-50 inset-0"></div>
          <div className="relative bg-white p-10 rounded-lg w-96 border-l-4 border-[#B1CC40]">
            {/* Close button */}
            <div className="absolute top-0 right-0 m-2">
              <button
                className=""
                onClick={onClose}
              >
                < IoIosCloseCircleOutline className="h-5 w-5 font-bold text-red-500" />
              </button>
            </div>
           <div className="text-sm text-center font-semibold">
            <h1>We have received your mail address.</h1>
            <h1>Please check your email to explore our newsletter.</h1>
           </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
