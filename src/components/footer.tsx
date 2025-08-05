import Link from "next/link";
import React from "react";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full md:h-[151px] border-t border-[#141414] bg-[#354119] md:px-[60px] px-5">
      <div className="mx-auto max-w-[1440px] px-5 transition-all duration-300 flex md:flex-row flex-col-reverse justify-between items-center h-full">
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 md:mt-0 mt-6 ">
          <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-1"
            >
              <Image src="/logo.svg" alt="logo" width={56} height={56} />
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center md:mt-0 mt-6">
          <Image src="/telegram.svg" width={24} height={24} alt="linkedin" />
          <Image src="/twitter.svg" width={24} height={24} alt="twitter" />
        </div>
        <h5 className="text-[#ffffff]/90 md:mt-0 mt-6">
          © 2025 Option AI. All rights reserved.
        </h5>
      </div>
    </div>
  );
}
