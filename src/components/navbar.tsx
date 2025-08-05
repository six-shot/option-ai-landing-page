"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Options", href: "/options" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="">
      <nav
        data-state={menuState && "active"}
        className=" fixed top-0 left-0 right-0 md:top-10 z-[200] "
      >
        <div className="px-[60px]">
          <div className="max-w-[1440px] mx-auto px-5 md: w-full rounded-[24px]  bg-[#627D12] md:h-[92px] h-[72px] flex items-center">
            <div className="transition-all duration-300 flex justify-between w-full">
              <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 w-full">
                <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                  <Link href="/" aria-label="home" className="">
                    <Image src="/logo.svg" alt="logo" width={56} height={56} />
                  </Link>

                  <button
                    onClick={() => setMenuState(!menuState)}
                    aria-label={menuState ? "Close Menu" : "Open Menu"}
                    className="relative z-20 block cursor-pointer lg:hidden"
                    data-state={menuState ? "active" : "inactive"}
                  >
                    <div className="flex flex-col gap-[4px]">
                      <div
                        className={`w-[30px] h-[2px] bg-black transition-all duration-300 ${
                          menuState ? "rotate-45 translate-y-[6px]" : ""
                        }`}
                      />
                      <div
                        className={`w-[30px] h-[2px] bg-black transition-all duration-300 ${
                          menuState ? "opacity-0 scale-0" : ""
                        }`}
                      />
                      <div
                        className={`w-[30px] h-[2px] bg-black transition-all duration-300 ${
                          menuState ? "-rotate-45 -translate-y-[6px]" : ""
                        }`}
                      />
                    </div>
                  </button>
                </div>
                <div className="hidden lg:block">
                  <ul className="flex gap-8 text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={` hover:text-[#fff] block duration-150 font-medium ${
                            pathname === item.href
                              ? "text-[#fff]"
                              : "text-[#fff]/80"
                          }`}
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`fixed top-[72px] left-0 right-0 bottom-0 z-[1000] bg-black/80 backdrop-blur-md transition-all duration-300 lg:hidden ${
                    menuState ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onClick={() => setMenuState(false)}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ${
                      menuState ? "translate-y-0" : "translate-y-full"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-6">
                      <ul className="space-y-6 text-base">
                        {menuItems.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={item.href}
                              className={`text-muted-foreground hover:text-accent-foreground block duration-150 ${
                                pathname === item.href
                                  ? "text-black"
                                  : "text-[#525866]"
                              }`}
                              onClick={() => setMenuState(false)}
                            >
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-6 border-t">
                        <Button
                          asChild
                          variant="default"
                          size="sm"
                          className="w-full"
                        >
                          <Link href="#" onClick={() => setMenuState(false)}>
                            <span className="text-black">Get Started</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[22px] items-center">
                  <div className="flex gap-4 items-center">
                    <Image
                      src="/tg-blue.svg"
                      alt="telegram"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/twitter-black.svg"
                      alt="twitter"
                      width={30}
                      height={30}
                    />
                  </div>
                  <Button asChild size="sm">
                    <Link href="#">
                      <span>Get Started</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
