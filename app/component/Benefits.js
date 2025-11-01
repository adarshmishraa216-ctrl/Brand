"use client";
import React from "react";
import Image from "next/image";

const BenefitsSection = () => {
  const headingColor = "#000000";
  const benefitBoxBg = "#FEFEF0";
  const benefitIconBg = "#2A4E42";
  const benefitTextColor = "#000000";

  return (
    <section className="relative w-full overflow-hidden bg-[#E6EAE2] min-h-[500px] flex items-center justify-center py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/akriti-benefit.png"
          alt="Forest background"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto hidden md:flex flex-col items-center">
        {/* Heading */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/akriti-benfit-iconh.png"
            alt="Benefits of Aakriti Heading Graphic"
            width={300}
            height={50}
            className="mb-2"
          />
        </div>

        {/* Product Image */}
        <div className="relative z-10 w-[2000px] h-[750px] mb-5 lg:mb-0 flex justify-center items-center mt-[-250px]">
          <Image
            src="/akriti-benfit-product.png"
            alt="Aakriti Product Stacked"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Benefit Boxes - Absolute Positioning */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-[1200px] flex items-center justify-center">
            {/* Box 1 */}
            <div
              className="absolute flex items-center p-4 rounded-xl shadow-md w-full max-w-[360px]"
              style={{ backgroundColor: benefitBoxBg, top: "25%", left: "0%" }}
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
              className="absolute flex items-center p-4 rounded-xl shadow-md w-full max-w-[360px]"
              style={{
                backgroundColor: benefitBoxBg,
                bottom: "25%",
                left: "0%",
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
              className="absolute flex items-center p-4 rounded-xl shadow-md w-full max-w-[360px]"
              style={{ backgroundColor: benefitBoxBg, top: "25%", right: "0%" }}
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
              className="absolute flex items-center p-4 rounded-xl shadow-md w-full max-w-[360px]"
              style={{
                backgroundColor: benefitBoxBg,
                bottom: "25%",
                right: "0%",
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

      {/* ================= MOBILE VIEW ================= */}
      <div className="relative z-10 w-full flex flex-col items-center md:hidden m-5">
        {/* Heading */}
        <Image
          src="/akriti-benfit-iconh.png"
          alt="Benefits of Aakriti Heading Graphic"
          width={320} // increased size for mobile
          height={70}
          className="mb-8"
        />

        {/* Benefits - Alternate Left/Right */}
        <div className="flex flex-col gap-4 w-full max-w-[340px]">
          {/* Box 1 - Icon Left */}
          <div
            className="flex items-center p-4 rounded-xl shadow-md"
            style={{ backgroundColor: benefitBoxBg }}
          >
            <div
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
              style={{ backgroundColor: benefitIconBg }}
            >
              <Image
                src="/akriti-benefit_balance-fill.png"
                alt="Benefit Icon 1"
                width={20}
                height={20}
              />
            </div>
            <p className="text-sm" style={{ color: benefitTextColor }}>
              Beneficial in uneven tones and breast shapes
            </p>
          </div>

          {/* Box 2 - Icon Right */}
          <div
            className="flex items-center justify-between p-4 rounded-xl shadow-md"
            style={{ backgroundColor: benefitBoxBg }}
          >
            <p
              className="text-sm text-right mr-4"
              style={{ color: benefitTextColor }}
            >
              Enhances softness and nourishes deeply for healthy skin.
            </p>
            <div
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: benefitIconBg }}
            >
              <Image
                src="/akriti-benefit_leaf-2-fill (1).png"
                alt="Benefit Icon 2"
                width={20}
                height={20}
              />
            </div>
          </div>

          {/* Box 3 - Icon Left */}
          <div
            className="flex items-center p-4 rounded-xl shadow-md"
            style={{ backgroundColor: benefitBoxBg }}
          >
            <div
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
              style={{ backgroundColor: benefitIconBg }}
            >
              <Image
                src="/akriti-benefit_leaf-3-fill.png"
                alt="Benefit Icon 3"
                width={20}
                height={20}
              />
            </div>
            <p className="text-sm" style={{ color: benefitTextColor }}>
              Helpful in improving and reshaping breast curves
            </p>
          </div>

          {/* Box 4 - Icon Right */}
          <div
            className="flex items-center justify-between p-4 rounded-xl shadow-md"
            style={{ backgroundColor: benefitBoxBg }}
          >
            <p
              className="text-sm text-right mr-4"
              style={{ color: benefitTextColor }}
            >
              Made with 100% Ayurvedic, safe, and trusted ingredients.
            </p>
            <div
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: benefitIconBg }}
            >
              <Image
                src="/akriti-benefit_leaf-fill.png"
                alt="Benefit Icon 4"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
