"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const bgImageSrc = "/akriti-herobanner-new.png";
  const containerBgColor = "#F3F3F3";
  const primaryButtonBg = "#007850";
  const buttonRadius = "49px";

  return (
    <section
      style={{ backgroundColor: containerBgColor }}
      className="relative w-full flex justify-center overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImageSrc})`,
          opacity: 0.82,
          mixBlendMode: "screen",
          zIndex: 0,
        }}
      />

      {/* Decorative Leaves (hidden on mobile) */}
      <div className="hidden md:block">
        <Image
          src="/akriti-leaf.png"
          alt="Decorative Left Leaf"
          width={500}
          height={500}
          className="absolute opacity-70 z-5"
          style={{ left: "-150px", top: "px", filter: "blur(1px)" }}
        />
        <Image
          src="/akriti-leaf2.png"
          alt="Decorative Right Leaf"
          width={400}
          height={280}
          className="absolute opacity-70 z-5"
          style={{ right: "-20px", top: "px", filter: "blur(1px)" }}
        />
      </div>

      {/* Main Content */}
      <div
        className="
          relative z-10 w-full max-w-[1440px] 
          flex flex-row items-start md:items-center justify-between 
          px-4 sm:px-2 md:px-[120px] 
          py-2 sm:py-2 md:py-6 
        "
      >
        {/* Left Section (Heading and Text) */}
        <div 
          className="flex flex-col justify-center text-left z-20 w-1/2 pr-4 space-y-0 md:space-y-2" 
          style={{ maxWidth: '600px' }} 
        >
          {/* Top small text - MODIFIED: Reduced font size on mobile */}
          <p
            className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 md:mb-1 whitespace-nowrap  text-ellipsis"
            style={{ maxWidth: "100%" }}
          >
            Ayurvedic Breast Health & Firmness Gel
          </p>

          {/* 1. Main Heading: A Modern Woman's Ayurveda Ritual */}
          <h2
            // MODIFIED: Added mobile size (text-2xl) and scoped fixed size to desktop (lg:text-[36px])
            className="font-normal mb-2 md:mb-1 text-[20px] lg:text-[36px] md:text-4xl"
            style={{
              color: "#000000",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%", 
            }}
          >
            A Modern Woman&apos;s Ayurveda Ritual
          </h2>

          {/* 2. Sub-Heading: The Natural Way */}
          <h3
            // MODIFIED: Added mobile size (text-3xl) and scoped fixed size to desktop (lg:text-[48px])
            className="mb-4 md:mb-[14px] text-[24px] lg:text-[48px] md:text-5xl"
            style={{
              color: "#DF67A3",
              fontFamily: "Meow Script, cursive", 
              fontWeight: 400, 
              lineHeight: "100%", 
              letterSpacing: "0%", 
              fontStyle: "normal",
            }}
          >
            The Natural Way
          </h3>

          {/* Buttons */}
          <div className="flex justify-start">
            <Link
              href="/buy-aakriti"
              style={{
                backgroundColor: primaryButtonBg,
                borderRadius: buttonRadius,
              }}
              className="text-white text-base font-medium py-[10px] px-[26px] shadow-md hover:opacity-90 transition duration-200"
            >
              Buy Aakriti Now
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-end md:justify-end items-end scale-112 sm:transform sm:translate-x-4 transform -translate-y-1">
          <Image
            src="/akriti-first-rightgirl.png"
            alt="Woman with Aakriti product"
            width={360}
            height={400}
            priority
            className="
              object-contain
              w-[340px] sm:w-[360px] md:w-[400px] lg:w-[440px]
              h-auto md:h-[300px] md:scale-108 md-transform 
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;