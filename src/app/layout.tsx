/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import StoreProvider from "./_providers/StoreProvider";

const sourceCode = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Terminal",
  description: "Please complete your tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCode.variable} antialiased flex flex-col h-screen overflow-hidden`}
      >
        <Suspense fallback={<Loading />}>
          <StoreProvider>
            <header></header>
            <main className="main flex-grow relative">{children}</main>
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
