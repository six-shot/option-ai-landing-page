"use client";
import React from "react";
import BlurImage from "./miscellaneous/blur-image";

export default function Feautures2() {


  return (
    <div
      style={{
        backgroundImage: 'url("/hero-mask.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col pt-[171px] pb-[47px]"
    >
      <h2 className="text-balance text-center text-[48px] leading-[48px] font-extrabold tracking-[-0.48px] text-[#0E121B] [text-shadow:0px_12.096px_90.72px_rgba(152,152,152,0)] mb-[62px]">
        Our Options
      </h2>
      <div className="px-[60px] w-full">
        <div className="flex justify-center items-center">
          <BlurImage
            src="option-dashboard.svg"
            alt="option-dashboard"
            width={1402}
            height={929}
          />
        </div>
      </div>
    </div>
  );
}
