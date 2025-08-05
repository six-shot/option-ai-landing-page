import Image from "next/image";
import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Features() {
  return (
    <section className="py-[124px] relative">
      <div
        style={{
          backgroundImage: 'url("/hero-mask.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.4,
        }}
        className="absolute inset-0 -z-10"
      />
      <div className="relative z-10">
        <div className="@container md:px-[60px] px-5">
          <div className="text-center">
            <h2 className="text-balance text-[48px] leading-[48px] font-extrabold tracking-[-0.48px] text-[#0E121B] [text-shadow:0px_12.096px_90.72px_rgba(152,152,152,0)]">
              Revolutionizing Crypto <br /> Options
            </h2>
          </div>
          <div className="grid-cols-3 mx-auto mt-8 grid max-w-[1440px] gap-3  md:mt-[62px] ">
            <Card className="group bg-white border border-[#C5F53D] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-zinc-950/10 cursor-pointer flex flex-col gap-6">
              <CardHeader>
                <CardDecorator>
                  <Image
                    src="leverage.svg"
                    width={30}
                    height={30}
                    alt="users"
                  />
                </CardDecorator>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <p className="text-[#141414] text-[24px] font-black">
                  Leverage
                </p>
                <p className="text-base  text-[#141414] font-medium ">
                  Control more crypto with minimal investment
                </p>
              </CardContent>
            </Card>
            <Card className="group bg-white border border-[#C5F53D] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-zinc-950/10 cursor-pointer flex flex-col gap-6">
              <CardHeader>
                <CardDecorator>
                  <Image
                    src="leverage.svg"
                    width={30}
                    height={30}
                    alt="users"
                  />
                </CardDecorator>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <p className="text-[#141414] text-[24px] font-black">
                  Risk Management
                </p>
                <p className="text-base  text-[#141414] font-medium ">
                  Hedge against potential cryptocurrency losses
                </p>
              </CardContent>
            </Card>
            <Card className="group bg-white border border-[#C5F53D] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-zinc-950/10 cursor-pointer flex flex-col gap-6">
              <CardHeader>
                <CardDecorator>
                  <Image
                    src="leverage.svg"
                    width={30}
                    height={30}
                    alt="users"
                  />
                </CardDecorator>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <p className="text-[#141414] text-[24px] font-black">
                  Sentiment Driven
                </p>
                <p className="text-base  text-[#141414] font-medium ">
                  Trade based on your sentiment in any market condition
                </p>
              </CardContent>
            </Card>
          </div>
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
