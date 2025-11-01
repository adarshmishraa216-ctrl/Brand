"use client";
import React from "react";

const MobileBuyButton = () => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-white text-center py-4 z-50 md:hidden"
      style={{
        boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <button
        className="mx-auto block text-white font-semibold text-base hover:scale-[1.02] transition-all duration-200"
        style={{
          width: "380px",
          height: "48px",
          backgroundColor: "#007850",
          borderRadius: "49px",
          paddingTop: "12px",
          paddingRight: "16px",
          paddingBottom: "12px",
          paddingLeft: "16px",
          gap: "10px",
        }}
      >
        Buy Aakriti Now
      </button>
    </div>
  );
};

export default MobileBuyButton;
