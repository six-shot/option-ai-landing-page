"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import BlurImage from "./miscellaneous/blur-image";

interface Feature {
  id: string;
  title: string;
  content: {
    title: string;
    description: string[];
  };
}

const features: Feature[] = [
  {
    id: "privacy",
    title: "USDX stablecoin",
    content: {
      title: "What is the underlying asset of the USDX stablecoin?",
      description: [
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
      ],
    },
  },
  {
    id: "dao",
    title: "Tokenized stocks?",
    content: {
      title: "What are tokenized stocks?",
      description: [
        "Tokenized stocks are digital representations of traditional stocks that are traded on blockchain platforms. They allow investors to buy and sell shares of companies without the need for intermediaries like brokers or exchanges.",
      ],
    },
  },
  {
    id: "audited",
    title: "What are tokenized stocks?",
    content: {
      title: "What are tokenized stocks?",
      description: [
        "Tokenized stocks are digital representations of traditional stocks that are traded on blockchain platforms. They allow investors to buy and sell shares of companies without the need for intermediaries like brokers or exchanges.",
      ],
    },
  },
  {
    id: "real-life",
    title: "What are tokenized stocks?",
    content: {
      title: "Built For Real Life",
      description: [
        "LifeFi is designed for everyday people, not just crypto enthusiasts. Our intuitive interface makes complex financial tools accessible to everyone.",
        "We focus on real-world use cases, helping you save, invest, and grow your wealth with tools that actually work in your daily life.",
      ],
    },
  },
];

export default function AnalysisChart() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div
      style={{
        backgroundImage: 'url("/hero-mask-white.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" bg-[#627D12] md:px-[60px] pt-[121px] pb-[124px]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-[62px]">
          <h2 className="text-balance text-[48px] leading-[48px] font-extrabold tracking-[-0.48px] text-[#ffff] ">
            Top Trade Analysis Charts
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-[48px] bg-white px-6 h-[723px]  items-center rounded-[16px]">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-8 ">
              {features.map((feature) => (
                <div key={feature.id}>
                  <motion.button
                    onClick={() => setActiveTab(feature.id)}
                    className={`w-full rounded-[16px] text-left transition-colors duration-200 ${
                      activeTab === feature.id
                        ? "bg-[#F7FBF1] p-4 border border-[#EFF0F3]"
                        : "hover:bg-[#F7FBF1] bg-white border-2 border-[#EFF0F3] h-[60px] px-4 sm:px-5 lg:px-6 cursor-pointer"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === feature.id ? (
                      <div className="flex flex-row justify-between items-start gap-6 h-full">
                        <div className="w-full">
                          <h3
                            className={`font-medium text-lg leading-[28px]  tracking-[-0.6px] ${
                              activeTab === feature.id
                                ? "text-[#061833]"
                                : "text-[#061833]/80"
                            }`}
                          >
                            {feature.content.title}
                          </h3>
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm sm:text-base leading-relaxed sm:leading-[24px] font-[family-name:var(--font-fig-tree)] text-[#667085] tracking-[-0.32px] mt-2"
                          >
                            {feature.content.description[0]}
                          </motion.p>
                        </div>
                        <div className="w-[29px] h-[29px] bg-[#DEF4B4] rounded-full  flex items-center justify-center flex-shrink-0">
                          <Image
                            src="/right.svg"
                            alt={feature.title}
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center h-full">
                        <h3
                          className={`font-medium text-lg leading-[28px]  tracking-[-0.6px] ${
                            activeTab === feature.id
                              ? "text-[#061833]"
                              : "text-[#061833]/80"
                          }`}
                        >
                          {feature.title}
                        </h3>
                      </div>
                    )}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {features.map(
                (feature) =>
                  activeTab === feature.id && (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-[860px h-[542px] rounded-[16px] bg-[#F7FBF1] flex justify-center items-center"
                    >
                      <BlurImage
                        src="/usdx.svg"
                        alt="usdx"
                        width={762}
                        height={506}
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
