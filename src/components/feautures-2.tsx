"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Feautures2() {
  const [selectedAsset, setSelectedAsset] = useState<"ETH" | "BTC">("ETH");
  const [amount, setAmount] = useState("1");
  const [progressPosition, setProgressPosition] = useState(50); // 0-100 percentage

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full h-full max-w-[1440px] mx-auto items-center">
          <div className="w-full lg:row-span-2">
            <div className="w-full border border-[#C5F53D] bg-white rounded-[16px] p-8 ">
              {/* Strategy Details */}
              <div className=" bg-[#F4FFE1] h-[171px] px-2.5 py-3 rounded-[14px] space-y-3 text-[#141414] mb-6">
                <div className="flex justify-between h-[18px]">
                  <span className="text-xs ">Strategy</span>
                  <span className="text-xs ">{selectedAsset} Call</span>
                </div>
                <div className="flex justify-between h-[18px]">
                  <span className="text-xs ">Exercising</span>
                  <span className="text-xs ">Manual</span>
                </div>
                <div className="flex justify-between h-[18px]">
                  <span className="text-xs ">Liquidation</span>
                  <span className="text-xs ">None</span>
                </div>
                <div className="flex justify-between h-[18px]">
                  <span className="text-xs ">Profit Zone</span>
                  <span className="text-xs text-gray-600">
                    {selectedAsset === "ETH" ? ">$3,257" : ">$45,257"}
                  </span>
                </div>
                <div className="flex justify-between h-[18px]">
                  <span className="text-xs ">Max. Loss Zone</span>
                  <span className="text-xs ">
                    {selectedAsset === "ETH" ? "<$3,130" : "<$44,130"}
                  </span>
                </div>
              </div>

              {/* Asset Selection */}
              <div className="space-y-3 bg-[#F4FFE1] h-[108px] rounded-[14px] px-3 flex flex-col justify-center ">
                <div className=" text-xs text-[#141414] mb-[7px]">Asset</div>
                <div className="flex gap-3 bg-white rounded-[7px] p-[1px]">
                  <button
                    onClick={() => setSelectedAsset("ETH")}
                    className={`flex items-center justify-center gap-[7px]  pr-[30px] pl-[20px] h-[41px] font-bold rounded-[10px] text-xs transition-all duration-200 ${
                      selectedAsset === "ETH"
                        ? "primary text-[#090909]"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <div className="px-1">
                      {" "}
                      <Image src="/eth.svg" alt="ETH" width={12} height={17} />
                    </div>
                    ETH
                  </button>
                  <button
                    onClick={() => setSelectedAsset("BTC")}
                    className={`flex items-center justify-center gap-2 py-2 px-6 h-[41px] font-bold rounded-[10px] text-xs  transition-all duration-200 ${
                      selectedAsset === "BTC"
                        ? "primary text-[#090909]"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <div className="px-1">
                      {" "}
                      <Image src="/btc.svg" alt="BTC" width={15} height={17} />
                    </div>
                    BTC
                  </button>
                </div>
              </div>

              {/* Amount Input */}
              <div className=" bg-[#F4FFE1] rounded-[14px] p-3 mt-[13px] h-[115px] px-3 flex flex-col justify-center">
                <div className="text-xs font-medium text-[#141414]">Amount</div>
                <div className="flex justify-between items-center h-[42px] bg-white px-[14px] rounded-[11px]">
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-transparent text-sm outline-none text-[15px] placeholder:text-[#141414]"
                  />
                  <div className="text-xs text-gray-500 ">Calls</div>
                </div>
                <h5 className="text-[#666] text-[10px]">
                  {" "}
                  Limit: {selectedAsset === "ETH" ? "30.5261" : "2.1561"}
                </h5>
              </div>

              {/* Period Selection */}
              <div className="bg-[#F4FFE1] rounded-[14px] h-[99px] mt-[11px] flex flex-col justify-center px-3">
                <div className="text-xs font-medium text-[#141414] ">
                  Period:
                  <span className="font-bold">
                    {" "}
                    {Math.round(progressPosition / 10 + 1)} days
                  </span>
                </div>
                <div className="w-full h-[6px]" />
                <div className="h-[21px] flex items-center">
                  <div
                    className="w-full bg-white rounded-full h-[7px] relative cursor-pointer"
                    onMouseDown={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const percentage = Math.max(
                        0,
                        Math.min(100, (x / rect.width) * 100)
                      );
                      setProgressPosition(percentage);
                    }}
                    onMouseMove={(e) => {
                      if (e.buttons === 1) {
                        // Left mouse button pressed
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const percentage = Math.max(
                          0,
                          Math.min(100, (x / rect.width) * 100)
                        );
                        setProgressPosition(percentage);
                      }
                    }}
                  >
                    <div
                      className="primary w-[28px] h-[21px] rounded-full absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
                      style={{ left: `${progressPosition}%` }}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        const progressBar = e.currentTarget
                          .parentElement as HTMLElement;
                        const handleMouseMove = (e: MouseEvent) => {
                          const rect = progressBar.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const percentage = Math.max(
                            0,
                            Math.min(100, (x / rect.width) * 100)
                          );
                          setProgressPosition(percentage);
                        };
                        const handleMouseUp = () => {
                          document.removeEventListener(
                            "mousemove",
                            handleMouseMove
                          );
                          document.removeEventListener(
                            "mouseup",
                            handleMouseUp
                          );
                        };
                        document.addEventListener("mousemove", handleMouseMove);
                        document.addEventListener("mouseup", handleMouseUp);
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-full h-[6px]" />

                <div className="text-[10px] text-[#141414CC] ">
                  Expiration Date:
                  <span className="font-bold">
                    {" "}
                    {(() => {
                      const days = Math.round(progressPosition / 10 + 1);
                      const futureDate = new Date();
                      futureDate.setDate(futureDate.getDate() + days);
                      return (
                        futureDate.toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                        }) +
                        ", " +
                        futureDate.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        })
                      );
                    })()}
                  </span>
                </div>
              </div>

              {/* Profit Zone */}
              <div className="mt-[11px] bg-[#F4FFE1] rounded-[14px] p-3 h-[116px]">
                <div className="text-xs font-medium text-[#141414]">
                  Profit Zone
                </div>
                <div className="flex items-center justify-between px-[14px] h-[42px] bg-white rounded-lg mt-[7px]">
                  <div className="flex gap-[5px] items-center">
                    <span className="text-[11px] text-[#141414]">
                      {selectedAsset === "ETH" ? ">$3,257 " : ">$45,257"}
                    </span>
                    <div className="flex items-center ">
                      <Image
                        src="/dropup.svg"
                        alt="dropup"
                        width={4}
                        height={4}
                        className="mt-[1px]"
                      />
                      <span className="text-[8px] text-[#3AA67B]">
                        {selectedAsset === "ETH" ? "+4%" : "+4%"}
                      </span>
                    </div>
                  </div>
                  <Image
                    src="/dropdown.svg"
                    alt="dropdown"
                    width={8}
                    height={5}
                  />
                </div>
                <div className="text-[10px] mt-[7px] text-[#666666]">
                  Strike Prices:{" "}
                  <span className="font-bold text-[#141414]">
                    {selectedAsset === "ETH" ? "$3,130 (ATM)" : "$44,130 (ATM)"}
                  </span>
                </div>
              </div>

              {/* Call Description */}
              <div className="space-y-2 mt-[21px]">
                <div className="text-[24px]text-[#141414] leading-8 font-black">
                  Call
                </div>
                <div className="text-[16px] text-[#525866] font-medium leading-6">
                  Profitable if the price rises sharply
                </div>
              </div>
            </div>
          </div>

          {/* <Card className="bg-white border border-[#C5F53D] shadow-lg h-full">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900">$3,485,000</div>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                +33%
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-32 bg-gray-50 rounded-lg relative p-4">
              <div className="absolute top-2 left-2 right-2 flex justify-between text-xs text-gray-500">
                <span>100k</span>
                <span>60k</span>
                <span>30k</span>
              </div>
              <svg className="w-full h-full mt-6" viewBox="0 0 200 60">
                <path
                  d="M0 50 L20 45 L40 40 L60 35 L80 30 L100 25 L120 20 L140 15 L160 10 L180 8 L200 5"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="100" cy="25" r="4" fill="#000" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-lg">Put</div>
              <div className="text-sm text-gray-600">
                Profitable if the price rises sharply
              </div>
            </div>
          </CardContent>
        </Card> */}

          {/* <Card className="bg-white border border-[#C5F53D] shadow-lg h-full">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Bull Call Spread
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-sm text-gray-600">
              Profitable if the price rises to a certain level
            </div>

            <div className="flex items-center justify-center h-32">
              <div className="relative">
                <div className="w-20 h-20 border-2 border-green-500 rounded-lg flex items-center justify-center bg-green-50">
                  <div className="w-8 h-8 bg-green-500 rounded"></div>
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 border border-dashed border-green-300 rounded"></div>
                <div className="absolute -top-3 -right-3 w-10 h-10 border border-dashed border-gray-300 rounded"></div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 border border-dashed border-gray-300 rounded"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border border-dashed border-gray-300 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card> */}

          {/* <Card className="bg-white border border-[#C5F53D] shadow-lg h-full">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Bull Put Spread
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-sm text-gray-600">
              Profitable if the price stays to a certain level
            </div>

            <div className="flex items-center justify-center h-32">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-green-500 rounded-full flex items-center justify-center bg-white">
                  <div className="text-center">
                    <div className="text-xl font-bold">1024</div>
                    <div className="text-sm text-gray-600">ETH</div>
                  </div>
                </div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs px-3 py-1"
                  >
                    Top up
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs px-3 py-1"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}

          {/* <Card className="bg-white border border-[#C5F53D] shadow-lg h-full">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Straddle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-sm text-gray-600">
              Profitable if the price rises or falls sharp
            </div>

            <div className="flex items-center justify-center h-32">
              <div className="relative">
                <div className="w-20 h-16 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mb-2"></div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span>0.1</span>
                    <span>0.2</span>
                    <span>0.3</span>
                    <span>0.4</span>
                    <span>0.5</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}
        </div>
      </div>
    </div>
  );
}
