import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets:  ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});



export const metadata: Metadata = {
  title: "Option AI",
  description: "The First AI-Powered Derivatives Trading Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
