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
      h-[220px] sm:h-[300px] md:h-[360px] lg:h-[200px] xl:h-[200px]`} // 👈 Reduced desktop height
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

      {/* Content */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto flex items-center px-6 sm:px-10">
        <div className="flex flex-col items-start text-white w-full sm:w-auto">
          {/* Main Heading */}
          <h1
            className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-2 leading-tight"
            style={{ fontFamily: topHeadingFont }}
          >
            Feel Beautiful. Stay Confident. Live Natural.
          </h1>

          {/* Subtext */}
          <p
            className="font-light mb-6 text-xl sm:text-2xl md:text-4xl"
            style={{
              color: "#DF67A3",
              fontFamily: "Meow Script",
              lineHeight: "100%",
            }}
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
