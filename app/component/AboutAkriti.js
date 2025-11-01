"use client";
import React from "react";
import Image from "next/image";

const AboutAakritiSection = () => {
  const subHeadingColor = "#DF67A3";
  const textColor = "#000000";
  const iconBoxBg = "#FFF2E1";
  const darkGreenIconBg = "#2A4E42";
  const sectionBgColor = "#2A4E42";

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-center py-16 px-8 lg:px-16 gap-12">

        {/* Left Section: Image of the girl */}
        {/* Desktop version (unchanged) */}
        <div className="hidden lg:flex flex-shrink-0 relative w-[400px] sm:w-[500px] h-[500px] sm:h-[600px] justify-center items-center order-2 lg:order-1">
          <Image
            src="/akriti-girlimage2.png"
            alt="Girl holding Aakriti product"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Right Section: Text + Boxes + Mobile image */}
        <div className="flex flex-col items-center text-center max-w-2xl order-1 lg:order-2">
          
          {/* About Aakriti heading */}
          <div className="w-full flex justify-center mb-0">
            <Image
              src="/akriti-about.png"
              alt="About Aakriti Heading Graphic"
              width={200}
              height={40}
            />
          </div>

          {/* Girl image – visible only on mobile */}
          <div className="flex lg:hidden justify-center mb-0 w-full">
            <div className="relative w-[280px] sm:w-[500px] h-[300px] sm:h-[600px]">
              <Image
                src="/akriti-girlimage2.png"
                alt="Girl holding Aakriti product"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Pink text (for Desktop) */}
          <h3
            className="hidden md:block font-meowscript text-4xl mb-2"
            style={{
              color: subHeadingColor,
              fontFamily: "Meow Script, cursive",
              fontWeight: 400,
              fontSize: "40px",
              lineHeight: "100%",
              textAlign: "center",
            }}
          >
            The Ayurvedic path to <br /> confidence, balance, and natural care.
          </h3>

          {/* Paragraph (for Desktop) */}
          <p
            className="hidden md:block text-base mb-8 leading-relaxed text-center"
            style={{ color: textColor }}
          >
            With Aakriti, we aim to bring Ayurveda back into daily self-care — safe,
            authentic, and rooted in science. It's more than a gel; it's a ritual of
            self-respect, crafted for women who believe in caring for themselves
            naturally.
          </p>

          {/* Four Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mb-3 md:mb-8">
            {[
              { src: "/akriti_tree-3-fill.png", label: "100% Ayurvedic" },
              { src: "/akriti_test-tube-fill.png", label: "Lab Tested" },
              { src: "/akriti-GMP-2page.png", label: "GMP Certified" },
              { src: "/akriti-ISO-page2.png", label: "ISO Approved" },
            ].map((box, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl"
                style={{ backgroundColor: iconBoxBg }}
              >
                <div
                  className="w-16 h-16 mb-2 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: darkGreenIconBg }}
                >
                  <Image src={box.src} alt={box.label} width={32} height={32} />
                </div>
                <p
                  className="text-sm font-medium text-center"
                  style={{ color: textColor }}
                >
                  {box.label}
                </p>
              </div>
            ))}
          </div>

          {/* Pink text for Mobile */}
          <h3
            className="block md:hidden font-meowscript text-4xl mt-2"
            style={{
              color: subHeadingColor,
              fontFamily: "Meow Script, cursive",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "100%",
              textAlign: "center",
            }}
          >
            The Ayurvedic path to <br /> confidence, balance, and natural care.
          </h3>
        </div>
      </div>

      {/* Bottom wave – only visible on desktop */}
      <div
        className="hidden md:block absolute bottom-0 left-0 w-full h-32"
        style={{
          backgroundColor: sectionBgColor,
          clipPath: "ellipse(100% 100% at 50% 100%)",
          zIndex: 0,
        }}
      ></div>
    </section>
  );
};

export default AboutAakritiSection;
