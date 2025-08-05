import Image from "next/image";
import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

// Define the feature data array
const features = [
  {
    id: 1,
    title: "Leverage",
    description:
      "Options AI uses AI to automate trading strategies for bullish, bearish, and neutral markets.",
    icon: "strategies.svg",
  },
  {
    id: 2,
    title: "Seamless Telegram Integration",
    description:
      "Trade via Telegram with a bot offering real-time insights for easy on-the-go management.",
    icon: "seamless.svg",
  },
  {
    id: 3,
    title: "On-Chain Derivatives Trading",
    description:
      "Options AI offers AI-driven on-chain derivatives trading without third-party settlement needs.",
    icon: "on-chain.svg",
  },
  {
    id: 4,
    title: "Low Fees + High Accessibility",
    description:
      "Options AI provides low fees and a user-friendly platform for all crypto derivatives traders.",
    icon: "lowfee.svg",
  },
  {
    id: 5,
    title: "Self-Custody and Decentralization",
    description:
      "Options AI ensures users control their assets with a decentralized, self-custody-focused platform",
    icon: "self-custody.svg",
  },
  {
    id: 6,
    title: "Real-Time Market Sentiment Analysis",
    description:
      "Machine learning analyzes market sentiment for dynamic, data-driven trading strategy adjustments.",
    icon: "real-time.svg",
  },
];

export default function Features3() {
  return (
    <section
      style={{
        backgroundImage: 'url("/hero-mask.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-[138px]  "
    >
      <div className="@container md:px-[60px] px-5">
        <div className="text-center">
          <h2 className="text-balance text-[48px] leading-[48px] font-extrabold tracking-[-0.48px] text-[#0E121B] [text-shadow:0px_12.096px_90.72px_rgba(152,152,152,0)]">
            Empower Your Trading with <br />
            Advanced Tools and Resources Options
          </h2>
        </div>
        <div className="grid-cols-3 mx-auto mt-8 grid max-w-[1440px] gap-3  md:mt-[62px] ">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className={`bg-[#F7FBF1]  transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-zinc-950/10 cursor-pointer flex flex-col gap-6`}
            >
              <CardHeader>
                <CardDecorator>
                  <Image
                    src={feature.icon}
                    width={50}
                    height={50}
                    alt={feature.title.toLowerCase()}
                  />
                </CardDecorator>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <p className="text-[#141414] text-[24px] font-black">
                  {feature.title}
                </p>
                <p className="text-base  text-[#141414] font-medium ">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative  ">
    <div className="">{children}</div>
  </div>
);
