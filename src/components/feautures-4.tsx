"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurImage from "./miscellaneous/blur-image";

export default function Features4() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  const cards = [
    {
      title:
        "Revolutionize Your Trading Journey With AI-Powered Predefined Strategies",
      description:
        "Harness the power of predefined AI strategies to simplify your crypto options trading.",
      image: "/revolutionize.svg",
      marks: [
        "Back Tested Strategies",
        "67% Success Rate",
        "Strategies for Beginners & Seasoned Traders",
      ],
    },
    {
      title: "Buyback & Burn",
      description:
        "50% of all revenue is dedicated to Options AI Buyback & Burn Program making $Option a deflationary token.",
      image: "/buy-and-burn.svg",
      marks: [
        "50% Revenue Allocation",
        "Deflationary Token",
        "Revenue generated from Trading Fees & Ads",
      ],
    },
  ];

  return (
    <div
      style={{
        backgroundImage: 'url("/hero-mask.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      id="feature"
      className="pt-[185px] pb-[51px] px-[60px]"
    >
      <div className="max-w-[1440px] mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <div className="flex flex-col gap-y-[94px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col lg:flex-row gap-x-[62px]  items-center"
            >
              {/* Text Section */}
              <motion.div
                {...fadeInLeft}
                className={`w-[500px]  flex gap-2 items-start flex-col z-[3] relative text-white  ${
                  index === 0
                    ? "order-2 lg:order-1"
                    : index === 1
                    ? "order-2 lg:order-2 lg:ml-[5%]"
                    : "order-2 lg:order-1"
                }`}
              >
                <div className="w-full flex flex-col gap-y-[24px] text-[#0E121B]">
                  <h3 className="text-[48px] leading-[57px]   w-full font-extrabold">
                    {card.title}
                  </h3>
                  <p className="w-full  text-[20px] leading-[24px]">
                    {card.description}
                  </p>
                  <div className="flex gap-[27px] flex-col">
                    {card.marks.map((mark, markIndex) => (
                      <div key={markIndex} className="flex gap-3 items-center">
                        <Image
                          src="mark.svg"
                          alt="mark"
                          width={24}
                          height={24}
                        />
                        <p className="text-[#0E121B] text-[16px] leading-[19px]">
                          {mark}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                {...fadeInRight}
                className={` w-[841px] h-[674px] flex items-center justify-center bg-[#F7FBF1] rounded-[16px] px-[32px] relative ${
                  index === 0
                    ? "order-1 lg:order-2"
                    : index === 1
                    ? "order-1 lg:order-1"
                    : "order-1 lg:order-2"
                }`}
              >
                <BlurImage
                  src={card.image}
                  alt={card.title}
                  width={762}
                  height={506}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
