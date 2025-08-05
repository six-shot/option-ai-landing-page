import React from "react";
import { HeroHeader } from "./navbar";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { InfiniteSlider } from "./infinite-slider";

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
  return (
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
        <div className="max-w-[1440px] mx-auto flex flex-col md:pt-[110px] pt-[64px] items-center    w-full h-full z-20 relative md:px-0 px-5">
          <h1 className="md:text-[80px] text-[36px] md:leading-[96px] text-[#0E121B] leading-[36px] font-black text-center">
            The First AI-Powered Derivatives <br /> Trading Bot
          </h1>
          <p className=" text-[#141414] leading-8 tracking-[0.27px]  md:text-[24px] text-base mt-8  text-center">
            Effortless crypto options trading via Option AI&apos;s on-chain
            Telegram bot for all traders.
          </p>

          <div className="flex w-full   items-center  justify-center flex-row gap-3 md:mt-[48px] mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="#">
                <span>Whitepaper</span>
              </Link>
            </Button>
            <Button asChild variant="default" size="lg">
              <Link href="#">
                <span>Chart</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#">
                <span>Pitchdeck</span>
              </Link>
            </Button>
          </div>
          <section className="pt-[64px] w-full flex items-center justify-center ">
            <Image src="/hero.svg" alt="hero-chart" width={1123} height={822} />
          </section>
        </div>
      </section>
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
