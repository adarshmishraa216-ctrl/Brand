"use client";
import React from "react";
import Image from "next/image";

const BenefitsSection = () => {
  const headingColor = "#000000"; // This might not be used if heading is an image
  const benefitBoxBg = "#FEFEF0"; // The light color of the inner boxes
  const benefitIconBg = "#2A4E42"; // Dark green icon background
  const benefitTextColor = "#000000"; 
  
  // The background image for the main section (desktop)
  const bgImageSrc = "/akriti-benefit.png"; 

  // The solid background color for the mobile card
  const mobileCardBgColor = "#2A4E42"; 
  
  return (
    <section 
      // FIX: Set the outermost container background to WHITE for both mobile and desktop.
      // The original `bg-[#E6EAE2]` is now changed to white to provide the "white outside" effect.
      // If the E6EAE2 was intended for desktop, that would need to be re-applied conditionally.
      className="relative w-full overflow-hidden bg-white min-h-[500px] flex items-center justify-center py-1 px-4"
    >
      
      {/* Background Image (Original Desktop Layer) - This is for the main section, visible on desktop */}
      <div className="absolute inset-0 z-0 hidden md:block"> {/* Ensure this is hidden on mobile */}
        <Image
          src={bgImageSrc} 
          alt="Forest background"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* ================= DESKTOP VIEW (RESTORED TO ORIGINAL - NO CHANGES) ================= */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto hidden md:flex flex-col items-center">
       
        <div className="flex flex-col items-center mb-12 py-8">
          <Image
            src="/akriti-benfit-iconh.png"
            alt="Benefits of Aakriti Heading Graphic"
            width={300}
            height={50}
            className="mb-2 transform translate-x-1"
          />
        </div>

        {/* Product Image */}
        <div className="relative z-10 w-[2000px] h-[750px] mb-5 lg:mb-0 flex justify-center items-center mt-[-250px] transform translate-x-1 -translate-y-8">
          <Image
            src="/akriti-benfit-product.png"
            alt="Aakriti Product Stacked"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Benefit Boxes - Absolute Positioning (Original Desktop Logic) */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-[1200px] flex items-center justify-center">
            {/* Box 1 */}
            <div
              className="absolute flex items-center p-4 rounded-xl shadow-md w-full max-w-[450px]"
              style={{ backgroundColor: benefitBoxBg, top: "25%", left: "-7%" }}
            >
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: benefitIconBg }}
              >
                <Image
                  src="/akriti-benefit_balance-fill.png"
                  alt="Benefit Icon 1"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-base" style={{ color: benefitTextColor }}>
                Beneficial in uneven tones and <br /> breast shapes
              </p>
            </div>

            {/* Box 2 */}
            <div
              className="absolute flex items-center p-4 rounded-xl shadow-md w-full max-w-[450px]"
              style={{
                backgroundColor: benefitBoxBg,
                bottom: "25%",
                left: "-7%",
              }}
            >
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: benefitIconBg }}
              >
                <Image
                  src="/akriti-benefit_leaf-3-fill.png"
                  alt="Benefit Icon 2"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-base" style={{ color: benefitTextColor }}>
                Helpful in improving and reshaping <br /> breast curves
              </p>
            </div>

            {/* Box 3 */}
            <div
              className="absolute flex items-center p-4 rounded-xl shadow-md w-full max-w-[450px]"
              style={{ backgroundColor: benefitBoxBg, top: "25%", right: "-8%" }}
            >
              <p
                className="text-base text-right flex-grow mr-4"
                style={{ color: benefitTextColor }}
              >
                Enhances softness and nourishes <br /> deeply for healthy skin.
              </p>
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: benefitIconBg }}
              >
                <Image
                  src="/akriti-benefit_leaf-2-fill (1).png"
                  alt="Benefit Icon 3"
                  width={24}
                  height={24}
                />
              </div>
            </div>

            {/* Box 4 */}
            <div
              className="absolute flex items-center p-4 rounded-xl shadow-md w-full max-w-[450px]"
              style={{
                backgroundColor: benefitBoxBg,
                bottom: "25%",
                right: "-8%",
              }}
            >
              <p
                className="text-base text-right flex-grow mr-4"
                style={{ color: benefitTextColor }}
              >
                Made with 100% Ayurvedic, safe, <br /> and trusted ingredients.
              </p>
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: benefitIconBg }}
              >
                <Image
                  src="/akriti-benefit_leaf-fill.png"
                  alt="Benefit Icon 4"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW (Full Card with SOLID Dark Green Background) ================= */}
      
      {/* Wrapper to center the mobile card */}
      <div className="w-full flex justify-center py-0 relative z-10 block md:hidden"> 
        
        {/* Mobile Card Container: SOLID Dark Green Background, Rounded Corners */}
        <div 
          className="relative w-full mx-2 max-w-[380px] h-auto p-4 rounded-2xl  overflow-hidden flex flex-col items-center"
          style={
            {
                backgroundImage: `url(${bgImageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: mobileCardBgColor,
            }
          }
        >
            {/* Content (Relative Z-Index ensures content is on top of the solid background) */}
            <div className="relative z-10 w-full flex flex-col items-center">
                
                {/* 1. Mobile Heading - THIS IS THE ONLY HEADING IMAGE RENDERED */}
                <Image
                    src="/akriti-benfit-iconh.png" 
                    alt="Benefits of Aakriti Heading Graphic"
                    width={320}
                    height={70}
                    className="mb-6 mt-2" 
                />

                {/* 2. Benefits List */}
                <div className="flex flex-col gap-4 w-full">
                    {/* Box 1 - Icon Left */}
                    <div
                        className="flex items-center p-4 rounded-xl shadow-md w-full"
                        style={{ backgroundColor: "#FFF2E1" }} 
                    >
                        <div
                            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                            style={{ backgroundColor: benefitIconBg }}
                        >
                            <Image src="/akriti-benefit_balance-fill.png" alt="Icon 1" width={20} height={20} />
                        </div>
                        <p className="text-sm" style={{ color: benefitTextColor }}>
                            Beneficial in uneven tones and breast shapes
                        </p>
                    </div>

                    {/* Box 2 - Icon Right */}
                    <div
                        className="flex items-center justify-between p-4 rounded-xl shadow-md w-full"
                        style={{ backgroundColor: "#FFF2E1" }} 
                    >
                        <p className="text-sm text-right mr-4" style={{ color: benefitTextColor }}>
                            Enhances softness and nourishes deeply for healthy skin.
                        </p>
                        <div
                            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: benefitIconBg }}
                        >
                            <Image src="/akriti-benefit_leaf-2-fill (1).png" alt="Icon 2" width={20} height={20} />
                        </div>
                    </div>

                    {/* Box 3 - Icon Left */}
                    <div
                        className="flex items-center p-4 rounded-xl shadow-md w-full"
                        style={{ backgroundColor:"#FFF2E1" }} 
                    >
                        <div
                            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                            style={{ backgroundColor: benefitIconBg }}
                        >
                            <Image src="/akriti-benefit_leaf-3-fill.png" alt="Icon 3" width={20} height={20} />
                        </div>
                        <p className="text-sm" style={{ color: benefitTextColor }}>
                            Helpful in improving and reshaping breast curves
                        </p>
                    </div>

                    {/* Box 4 - Icon Right */}
                    <div
                        className="flex items-center justify-between p-4 rounded-xl shadow-md w-full"
                        style={{ backgroundColor: "#FFF2E1" }} 
                    >
                        <p className="text-sm text-right mr-4" style={{ color: benefitTextColor }}>
                            Made with 100% Ayurvedic, safe, and trusted ingredients.
                        </p>
                        <div
                            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: benefitIconBg }}
                        >
                            <Image src="/akriti-benefit_leaf-fill.png" alt="Icon 4" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;