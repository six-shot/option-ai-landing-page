import React from "react";
import Image from "next/image";
import { InfiniteSlider } from "./infinite-slider";

// Testimonial data array
const testimonials = [
  {
    id: 1,
    text: "I started with just one bundle of DeCharge Minis, mostly out of curiosity. We installed them near a college campus where there's always EV traffic.",
    name: "Cornrad liakksis",
    role: "Student",
  },
  {
    id: 2,
    text: "The rewards system is incredible! I've earned more from my investments than I ever expected. LifeFi makes investing feel accessible and profitable.",
    name: "Sarah Chen",
    role: "Investor",
  },
  {
    id: 3,
    text: "LifeFi's platform is revolutionary. The combination of traditional investing with crypto rewards is exactly what the market needed.",
    name: "Marcus Johnson",
    role: "Trader",
  },
  {
    id: 4,
    text: "Finally, a platform that bridges the gap between traditional finance and crypto. The rewards are real and the interface is intuitive.",
    name: "Elena Rodriguez",
    role: "Financial Advisor",
  },
  {
    id: 5,
    text: "The airdrop rewards are fantastic! I've been using LifeFi for just a few months and already earned significant returns through their reward system.",
    name: "David Kim",
    role: "Crypto Enthusiast",
  },
  {
    id: 6,
    text: "As someone new to investing, LifeFi made it so easy to get started. The rewards are a great incentive to learn and grow my portfolio.",
    name: "Alex O.",
    role: "New Investor",
  },
  {
    id: 7,
    text: "I started with just one bundle of DeCharge Minis, mostly out of curiosity. We installed them near a college campus where there's always EV traffic.",
    name: "Cornrad O.",
    role: "Student",
  },
  {
    id: 8,
    text: "The rewards system is incredible! I've earned more from my investments than I ever expected. LifeFi makes investing feel accessible and profitable.",
    name: "Sarah O.",
    role: "Investor",
  },
  {
    id: 9,
    text: "LifeFi's platform is revolutionary. The combination of traditional investing with crypto rewards is exactly what the market needed.",
    name: "Marcus O.",
    role: "Trader",
  },
  {
    id: 10,
    text: "Finally, a platform that bridges the gap between traditional finance and crypto. The rewards are real and the interface is intuitive.",
    name: "Elena O.",
    role: "Financial Advisor",
  },
  {
    id: 11,
    text: "The airdrop rewards are fantastic! I've been using LifeFi for just a few months and already earned significant returns through their reward system.",
    name: "David O.",
    role: "Crypto Enthusiast",
  },
  {
    id: 12,
    text: "As someone new to investing, LifeFi made it so easy to get started. The rewards are a great incentive to learn and grow my portfolio.",
    name: "Alex O.",
    role: "New Investor",
  },
];

// Helper function to render a testimonial card
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="w-full">
    <div className="p-8 bg-white border border-[#BDF738] flex gap-3  items-start rounded-[32px] w-full">
      <div className="w-[77px] flex justify-center">
        <Image
          src="/avatar.svg"
          alt="avatar"
          width={50}
          height={40}
          className="w-10 h-10 sm:w-[47px] sm:h-[47px]"
        />
      </div>
      <div>
        <p className="text-[24px] leading-[20px] sm:leading-[24px] text-[#141414]  font-extrabold break-words">
          {testimonial.name}
        </p>
        <p className="text-[#667085] mt-[5px] leading-[20px]">
          {testimonial.role}
        </p>
        <div className="py-3 flex items-center gap-3">
          <Image src="/star.svg" alt="star" width={27} height={27} />
          <Image src="/star.svg" alt="star" width={27} height={27} />
          <Image src="/star.svg" alt="star" width={27} height={27} />
        </div>

        <p className="text-[#141414] text-[24px] leading-[40px]  tracking-[-0.96px]">
          {testimonial.text}
        </p>
      </div>
    </div>
  </div>
);

export default function Trusted() {
  return (
    <section
      style={{
        backgroundImage: 'url("/hero-mask.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="pt-[119px]"
    >
      <h2 className="text-balance text-center text-[48px] leading-[48px] font-extrabold tracking-[-0.48px] text-[#0E121B] [text-shadow:0px_12.096px_90.72px_rgba(152,152,152,0)] mb-[62px]">
        What Traders Are Saying
      </h2>
      <div className="@container bg-[#F7FBF1]  px-[60px]">
        <div className="hidden lg:block overflow-hidden mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 h-[743px] py-[99px] ] rounded-[16px]  gap-6 relative z-0">
            {/* Column 1 */}
            <div className="col-span-1">
              <InfiniteSlider
                direction="vertical"
                speed={50}
                gap={24}
                className=""
              >
                {testimonials.slice(0, 13).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </InfiniteSlider>
            </div>

            {/* Column 2 */}
            <div className="col-span-1">
              <InfiniteSlider
                direction="vertical"
                speed={70}
                gap={24}
                reverse={true}
                className=""
              >
                {testimonials.slice(0, 13).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
