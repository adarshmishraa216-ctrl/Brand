"use client";
import React from "react";
import NextImage from "next/image";

const FAQSection = () => {
  // Styles and Colors
  const sectionBgColor = "#FFFFFF";
  const questionColor = "#6B7280";
  const plusIconImageSrc = "/akriti-freq-plus.png";

  // Assets
  const headingImageSrc = "/akriti-freq-head.png";
  const sideImageSrc = "/akriti-freq-product.png";

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "How often should I use Aakriti?",
      answer: "Use twice daily morning and night for best results.",
    },
    {
      id: 2,
      question: "How long before I see visible results?",
      answer: "Results vary, but many users report changes within 4-6 weeks.",
    },
    {
      id: 3,
      question: "Is Aakriti safe for sensitive skin?",
      answer:
        "Yes, Aakriti is formulated with gentle ingredients suitable for most skin types.",
    },
    {
      id: 4,
      question: "Can I use it during pregnancy or breastfeeding?",
      answer:
        "We advise consulting a doctor before use during pregnancy or breastfeeding.",
    },
    {
      id: 5,
      question: "Who can use Aakriti?",
      answer:
        "It is suitable for most adult women seeking breast health and firmness.",
    },
  ];

  const handleToggle = (id) => {
    console.log(`Toggling FAQ item ${id}`);
  };

  return (
    <section
      className="relative w-full overflow-hidden flex justify-center py-5"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE — FAQ LIST */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* Heading Image */}
          <div className="mb-8 sm:mb-10">
            <img
              src={headingImageSrc}
              alt="Frequently Asked Questions Heading"
              className="w-auto h-auto max-w-full"
            />
          </div>

          {/* FAQ Items */}
          <div className="w-full space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="w-full py-2 cursor-pointer"
                onClick={() => handleToggle(faq.id)}
              >
                <div className="flex justify-between items-center pr-2 bg-zinc-100 rounded-md px-4 py-3 hover:bg-zinc-200 transition">
                  <span
                    className="text-base sm:text-lg font-medium leading-tight"
                    style={{ color: questionColor }}
                  >
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-2">
                    <NextImage
                      src={plusIconImageSrc}
                      alt="Toggle Answer"
                      width={40}
                      height={20}
                      className="transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — PRODUCT IMAGE (Hidden on small screens) */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[650px] flex justify-center items-center p-5 lg:p-1 transform rotate-1 scale-110 transition-transform duration-500 -mt-6 lg:mt-0 hidden lg:flex">
          <NextImage
            src={sideImageSrc}
            alt="Aakriti Product Box"
            fill
            className="object-contain scale-110 transform -translate-y-7"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
