"use client";
import React from "react";
import NextImage from "next/image";

const HeroBanner = () => {
  const bgImageSrc = "/akriti-buttom-model.png";
  const buttonColor = "#1B8065";
  const topHeadingFont = "'Roboto', sans-serif";

  return (
    <section
      className={`relative w-[90vw] mx-auto my-6 overflow-hidden rounded-2xl flex justify-center items-center
      h-[180px] sm:h-[300px] md:h-[360px] lg:h-[300px] xl:h-[280px]`}
    >
      {/* Background Image */}
      <NextImage
        src={bgImageSrc}
        alt="Aakriti Banner Background"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto flex items-center px-6 sm:px-10">
        <div className="flex flex-col items-start text-white w-full sm:w-auto">
          
          {/* Main Heading */}
          <h1
            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-2 leading-tight"
            style={{ fontFamily: topHeadingFont }}
          >
            Feel Beautiful. Stay Confident. Live Natural.
          </h1>

          {/* Sub Heading with Meow Script font */}
          <p
            style={{
              fontFamily: "'Meow Script', cursive",
              color: "#DF67A3",
              lineHeight: "100%",
            }}
            className="font-light mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Nurture Your Natural Grace.
          </p>

          {/* Button */}
          <button
            className="text-white font-medium shadow-lg transition-transform duration-200 hover:scale-[1.03] w-full sm:w-auto text-base sm:text-lg"
            style={{
              backgroundColor: buttonColor,
              padding: "12px 20px",
              borderRadius: "50px",
            }}
          >
            Buy Aakriti Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
