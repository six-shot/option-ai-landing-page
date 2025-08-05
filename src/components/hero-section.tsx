"use client";

import React from "react";
import { HeroHeader } from "./navbar";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { InfiniteSlider } from "./infinite-slider";
import BlurImage from "./miscellaneous/blur-image";

const sliderItems = [
  { text: "PRIVACY", icon: "/check.svg" },
  { text: "FULL CUSTODY", icon: "/check.svg" },
  { text: "DECENTRALIZED", icon: "/check.svg" },
  { text: "AI BASED STRATGIES", icon: "/check.svg" },
  { text: "SIMPLIFY OPTIONS TRADING", icon: "/check.svg" },
  { text: "PRIVACY", icon: "/check.svg" },
  { text: "FULL CUSTODY", icon: "/check.svg" },
  { text: "DECENTRALIZED", icon: "/check.svg" },
  { text: "AI BASED STRATGIES", icon: "/check.svg" },
  { text: "SIMPLIFY OPTIONS TRADING", icon: "/check.svg" },
  { text: "PRIVACY", icon: "/check.svg" },
  { text: "FULL CUSTODY", icon: "/check.svg" },
  { text: "DECENTRALIZED", icon: "/check.svg" },
  { text: "AI BASED STRATGIES", icon: "/check.svg" },
  { text: "SIMPLIFY OPTIONS TRADING", icon: "/check.svg" },
  { text: "PRIVACY", icon: "/check.svg" },
  { text: "FULL CUSTODY", icon: "/check.svg" },
  { text: "DECENTRALIZED", icon: "/check.svg" },
  { text: "AI BASED STRATGIES", icon: "/check.svg" },
  { text: "SIMPLIFY OPTIONS TRADING", icon: "/check.svg" },
];

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.95,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <div>
      <div className="px-[60px]">
        <div
          style={{
            backgroundImage: 'url("/hero-mask.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className=" w-full bg-[#F7FBF1] "
        >
          <HeroHeader />
          <section className=" relative  md:px-[60px] pt-[92px] w-full flex flex-col items-center ">
            <motion.div
              className="max-w-[1440px] mx-auto flex flex-col md:pt-[110px] pt-[64px] items-center    w-full h-full z-20 relative md:px-0 px-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="md:text-[80px] text-[36px] md:leading-[96px] text-[#0E121B] leading-[36px] tracking-[-4px] font-black text-center"
                variants={itemVariants}
              >
                The First AI-Powered Derivatives <br /> Trading Bot
              </motion.h1>
              <motion.p
                className=" text-[#141414] leading-8 tracking-[0.27px]  md:text-[24px] text-base mt-8  text-center"
                variants={itemVariants}
              >
                Effortless crypto options trading via Option AI&apos;s on-chain
                Telegram bot for all traders.
              </motion.p>

              <motion.div
                className="flex w-full   items-center  justify-center flex-row gap-3 md:mt-[48px] mt-8"
                variants={itemVariants}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button asChild variant="outline" size="lg">
                    <Link href="#">
                      <span>Whitepaper</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button asChild variant="default" size="lg">
                    <Link href="#">
                      <span>Chart</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button asChild variant="outline" size="lg">
                    <Link href="#">
                      <span>Pitchdeck</span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.section
                className="pt-[64px] w-full flex items-center justify-center"
                variants={imageVariants}
              >
                <BlurImage
                  src="/hero.svg"
                  alt="hero-chart"
                  width={1123}
                  height={822}
                />
              </motion.section>
            </motion.div>
          </section>
        </div>
      </div>
      <div className="w-full h-[152px] bg-[#627D12] -mt-[120px] relative z-[100] flex items-center ">
        <InfiniteSlider
          direction="horizontal"
          gap={120}
          speed={60}
          className="h-full flex items-center"
        >
          {sliderItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image src={item.icon} alt="check" width={24} height={24} />
              <span className="uppercase font-bold text-white tracking-[-1px] text-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
