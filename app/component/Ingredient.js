"use client";
import React from "react";
import Image from "next/image";

const IngredientsSection = () => {
  const sectionBgColor = "#FFFFFF";


  return (
    <section
      className="relative w-full overflow-hidden flex justify-center py-10"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="w-full max-w-[1200px] px-4 sm:px-6">
        
        {/* ✅ MOBILE VERSION (Visible below lg) */}
        <div className="flex flex-col items-center justify-center gap-6 lg:hidden">
          
          {/* 1. Heading + Veg Image SIDE BY SIDE and CENTERED */}
          {/* MODIFIED: Reduced width constraints and gap to ensure fit on narrow screens. */}
          <div className="flex flex-row items-center justify-center gap-2 w-full px-4">
            
            {/* Heading Image */}
            {/* Reduced max-width to 55% of the container */}
            <div className="relative w-[70%] h-auto flex justify-end"> 
              <Image
                src="/akriti-ingredient-head.png"
                alt="Aakriti Ingredients Heading"
                width={400} // Set fixed width for better mobile scaling
                height={100}
                className="object-contain"
              />
            </div>

            {/* Veg Image */}
            {/* Reduced size to 40% of the container */}
            <div className="relative w-[60%] h-[150px] sm:w-[200px] sm:h-[200px] flex justify-start">
              <Image
                src="/akriti-ingredient-veg.png"
                alt="Ayurvedic Ingredients"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 2. Ingredient Table (Scrollable) */}
          <div className="w-full overflow-x-auto">
            <div className="flex justify-start">
              <img
                src="/akriti-ingredient-table.png"
                alt="Ingredient Table"
                className="w-[150%] sm:w-[130%] h-auto max-w-none"
              />
            </div>
          </div>
          
          {/* 3. Preservatives Note */}
          

        </div>

        {/* ✅ DESKTOP VERSION (Unchanged) */}
        <div className="hidden lg:flex w-full flex-row items-start justify-between gap-12 px-8">
          {/* Left Section */}
          <div className="flex flex-col w-full lg:w-1/2 flex-shrink-0 mt-20">
            <div className="mb-8 w-full flex justify-center lg:justify-start">
              <Image
                src="/akriti-ingredient-head.png"
                alt="Aakriti Ingredients Heading"
                width={300}
                height={90}
              />
            </div>

            <div className="w-full">
              <img
                src="/akriti-ingredient-table.png"
                alt="Ingredient Table"
                className="w-full h-auto max-w-none scale-110"
              />
            </div>
            
           
          </div>

          {/* Right Section */}
          <div className="relative w-full lg:w-1/2 h-[400px] flex justify-center items-center mt-10 lg:mr-10 lg:mt-5">
            <Image
              src="/akriti-ingredient-veg.png"
              alt="Ayurvedic Raw Materials"
              fill
              className="object-contain scale-[2] lg:-translate-x-6 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;