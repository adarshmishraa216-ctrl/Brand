"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const bgImageSrc = "/akriti-bgtop.jpg";
  const containerBgColor = "#F3F3F3";
  const primaryButtonBg = "#007850";
  const buttonRadius = "49px";

  return (
    <section
      style={{ backgroundColor: containerBgColor }}
      className="relative w-full flex justify-center overflow-hidden"
    >
      {/* Background Image */}
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
          width={350}
          height={150}
          className="absolute opacity-70 z-5"
          style={{ left: "-100px", top: "12px", filter: "blur(2px)" }}
        />
        <Image
          src="/akriti-leaf2.png"
          alt="Decorative Right Leaf"
          width={350}
          height={300}
          className="absolute opacity-70 z-5"
          style={{ right: "-20px", top: "10px", filter: "blur(2px)" }}
        />
      </div>

      {/* Main Content */}
      <div
        className="
          relative z-10 w-full max-w-[1440px] 
          flex flex-row items-center justify-between 
          px-4 sm:px-8 md:px-[145px] py-6 md:py-16
        "
      >
        {/* Left Section */}
        <div className="flex flex-col justify-center text-left z-20 w-1/2 pr-4">
          <p
            className="text-sm sm:text-base text-gray-700 mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ maxWidth: "100%" }}
          >
            Ayurvedic Breast Health & Firmness Gel
          </p>

          <h2
            className="font-normal mb-3 font-rubik text-[22px] sm:text-[26px] md:text-[36px] leading-tight"
            style={{
              color: "#000000",
              fontWeight: 400,
              lineHeight: "110%",
            }}
          >
            A Modern Woman&apos;s Ayurveda Ritual
          </h2>

          <h3
            className="mb-6 font-meowscript text-[32px] sm:text-[38px] md:text-[48px]"
            style={{
              color: "#DF67A3",
              fontWeight: 400,
              fontFamily: "Meow Script, cursive",
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
              className="text-white text-base font-medium py-[10px] px-[28px] shadow-md hover:opacity-90 transition duration-200"
            >
              Buy Aakriti Now
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-end md:justify-end">
  <Image
    src="/akriti-first-rightgirl.png"
    alt="Woman with Aakriti product"
    width={380}
    height={420}
    priority
    className="
      object-contain
      w-[320px]     /* Bigger on very small screens */
      sm:w-[380px]  /* Slightly larger on small tablets */
      md:w-[420px]  /* Standard desktop size */
      lg:w-[480px]  /* Optional - a bit larger on big monitors */
      h-auto
    "
  />
</div>


      </div>
    </section>
  );
};

export default HeroBanner;
