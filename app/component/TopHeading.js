"use client";
import React from "react";

const TopHeading = () => {
  return (
    <div
      style={{ backgroundColor: "#2A4E42" }}
      className="flex w-full justify-center"
    >
      <div className="w-full max-w-[1440px]">
        <div
          className="
            flex flex-col sm:flex-row items-center justify-center 
            py-2 px-3 text-center
          "
        >
          <p
            className="
              text-white text-sm sm:text-base font-light 
              leading-snug tracking-wide
            "
          >
            Free Shipping on All Prepaid Orders • COD Available • 100% Ayurvedic & Made in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeading;
