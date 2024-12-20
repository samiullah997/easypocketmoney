import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import {
  ClerkProvider,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EasyPocketMoney",
  description: "EasyPocketMoney is a simple way to manage your money and earn from yours pair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkLoading>
            <div className="flex items-center justify-center h-screen text-2xl">loading...</div>
          </ClerkLoading>
          <ClerkLoaded>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col h-screen"><Navbar/> {children}</div>
          </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
