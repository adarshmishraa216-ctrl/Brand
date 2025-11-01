"use client";
import React from "react";
import NextImage from "next/image";

const Footer = () => {
  const bgColor = "#2A4E42";
  const textColor = "#FFFFFF";

  // --- Image & Icon Paths ---
  const logoSrc = "/akriti-footer-ing.png";

  const socialIcons = {
    facebook: "/akriti-footer-fb.png",
    instagram: "/akriti-footer-insta.png",
    x: "/akriti-footer-x.png",
    youtube: "/akriti-footer-yt.png",
  };

  const quickLinks = [
    "About Aakriti",
    "Benefits",
    "Ingredients",
    "How to Use",
    "Reviews",
    "FAQs",
  ];

  const aboutLinks = ["About us", "Our Story", "Blogs"];

  return (
    <footer className="w-full" style={{ backgroundColor: bgColor }}>
      <div
        className="w-full max-w-[1400px] mx-auto text-sm"
        style={{ color: textColor }}
      >
        {/* ================= MOBILE VIEW ================= */}
        <div className="block lg:hidden text-center py-8 px-6">
          {/* Logo */}
          <div className="flex justify-center mb-3">
            <NextImage
              src={logoSrc}
              alt="Charvak Ayurveda Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 leading-snug">
            Charvak Ayurveda, Ayurvedic science for modern wellness.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-5 mt-2">
            {Object.entries(socialIcons).map(([key, src]) => (
              <a
                key={key}
                href={`#${key}`}
                aria-label={key}
                className="w-7 h-7 flex items-center justify-center"
              >
                <NextImage
                  src={src}
                  alt={key}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div
          className="hidden lg:flex flex-wrap justify-between pt-12 pb-8 px-8 lg:px-16 border-b border-gray-600"
          style={{ minHeight: "250px" }}
        >
          {/* Column 1: Logo, Description & Social Links */}
          <div className="w-full sm:w-1/2 lg:w-3/12 mb-8 lg:mb-0">
            <div className="mb-4">
              <NextImage
                src={logoSrc}
                alt="Charvak Ayurveda Logo"
                width={120}
                height={50}
              />
            </div>

            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Charvak Ayurveda, Ayurvedic science for modern wellness.
            </p>

            <div className="flex space-x-3 mt-4">
              {Object.entries(socialIcons).map(([key, src]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  aria-label={key}
                  className="w-8 h-8 flex items-center justify-center transition"
                >
                  <NextImage src={src} alt={key} width={32} height={32} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-2/12 mb-8 lg:mb-0">
            <h4 className="font-bold mb-4 whitespace-nowrap">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="w-full sm:w-1/2 lg:w-2/12 mb-8 sm:mb-0">
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="w-full sm:w-1/2 lg:w-4/12">
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center space-x-2">
                <span>&#9742;</span>
                <span>+919779968899</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>&#9993;</span>
                <span>care@charvak.com</span>
              </p>
              <p className="flex items-start space-x-2 pt-1">
                <span>&#9906;</span>
                <span className="max-w-xs">
                  1st Floor, Plot No. 1072, JLPL Sector 82, S.A.S Nagar, Mohali,
                  India
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-8 lg:px-16 text-xs text-gray-400 border-t border-gray-700">
          <p className="mb-2 md:mb-0">
            © 2025 Charvak Ayurveda All rights reserved
          </p>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition">
              Terms of Use
            </a>
            <a href="#legal" className="hover:text-white transition">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
