"use client";
import React from "react";
import Image from "next/image";

const HowToUseSection = () => {
  const sectionBgColor = "#FFFFFF";
  const innerBoxColor = "#F3F4F6";
  const instructionTextColor = "#4B5563";
  const listTextColor = "#6B7280";

  const steps = [
    {
      numberImg: "/akriti-use-1.png",
      title: "Take a Small Amount",
      description:
        "Scoop a small quantity of Aakriti gel on your fingertips. Use enough to cover the target area comfortably.",
    },
    {
      numberImg: "/akriti-use-2.png",
      title: "Apply Gently",
      description:
        "Massage in circular upward motions for 3–5 minutes to ensure even absorption.",
    },
    {
      numberImg: "/akriti-use3.png",
      title: "Let It Absorb",
      description:
        "Allow the gel to fully absorb into the skin. Use twice daily morning and night for best results.",
    },
  ];

  const bestResultsList = [
    "Apply after a shower on clean, dry skin.",
    "Avoid during pregnancy or breastfeeding.",
    "Store in a cool, dry place, away from direct sunlight.",
  ];

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center"
      style={{ backgroundColor: sectionBgColor }}
    >
      {/* ===== Decorative Grey Wave Background — only on Desktop ===== */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-[250px]"
          style={{ opacity: 0.15, fill: "#F3F4F6" }}
        >
          <path
            d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,245.3C672,277,768,267,864,250.7C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* ===== Desktop Version ===== */}
      <div className="hidden lg:flex w-full flex-row items-start justify-between gap-12 px-8 py-20 max-w-[1400px] mx-auto relative z-10">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-[700px] flex-shrink-0 flex justify-center items-end">
          <Image
            src="/akriti-use-model.png"
            alt="Woman holding product jar"
            fill
            className="object-cover lg:object-contain object-right-bottom scale-x-[-1]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start p-8 lg:p-16">
          <div className="mb-12">
            <img src="akriti-use-head.png" alt="How to use heading" />
          </div>

          <div className="flex flex-col space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Image
                  src={step.numberImg}
                  alt={`Step ${index + 1}`}
                  width={30}
                  height={45}
                  className="flex-shrink-0 mt-1"
                />
                <div className="flex flex-col">
                  <h3
                    className="text-lg font-medium"
                    style={{ color: instructionTextColor }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base mt-1"
                    style={{ color: instructionTextColor }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h4
              className="text-base font-medium"
              style={{ color: instructionTextColor }}
            >
              For best results:
            </h4>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {bestResultsList.map((item, index) => (
                <li
                  key={index}
                  className="text-sm"
                  style={{ color: listTextColor }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Mobile Version ===== */}
      <div className="block lg:hidden w-full flex flex-col items-center px-6 py-10 relative z-10">
        <div className="flex flex-col items-center mb-4">
          <img
            src="akriti-use-head.png"
            alt="How to use heading"
            className="w-[220px]"
          />
        </div>

        <div
          className="w-full rounded-2xl p-5 shadow-sm flex flex-col"
          style={{ backgroundColor: innerBoxColor }}
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            {steps.slice(0, 2).map((step, index) => (
              <div key={index} className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <Image
                    src={step.numberImg}
                    alt={`Step ${index + 1}`}
                    width={22}
                    height={30}
                    className="flex-shrink-0"
                  />
                  <h3
                    className="text-[13px] font-semibold leading-tight"
                    style={{ color: instructionTextColor }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-[12px] leading-snug"
                  style={{ color: instructionTextColor }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start space-y-2 w-[70%]">
              <div className="flex items-center space-x-2">
                <Image
                  src={steps[2].numberImg}
                  alt="Step 3"
                  width={20}
                  height={30}
                  className="flex-shrink-0"
                />
                <h3
                  className="text-[13px] font-semibold leading-tight"
                  style={{ color: instructionTextColor }}
                >
                  {steps[2].title}
                </h3>
              </div>
              <p
                className="text-[12px] leading-snug"
                style={{ color: instructionTextColor }}
              >
                {steps[2].description}
              </p>
            </div>

            <div className="relative w-[160px] h-[150px] flex-shrink-0 self-center mb-0">
              <Image
                src="/akriti-use-model.png"
                alt="Model"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 text-left w-full">
          <h4
            className="text-sm font-semibold mb-1"
            style={{ color: instructionTextColor }}
          >
            For best results:
          </h4>
          <ul className="list-disc ml-6 space-y-1">
            {bestResultsList.map((item, index) => (
              <li
                key={index}
                className="text-[13px] leading-tight"
                style={{ color: listTextColor }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
