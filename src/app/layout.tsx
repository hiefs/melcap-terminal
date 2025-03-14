import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const sourceCode = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Archives Terminal",
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
        <header>
          <Header />
        </header>
        <main className="flex-grow relative">{children}</main>
        <footer className="text-center uppercase">
          authorized personnel only
        </footer>
      </body>
    </html>
  );
}
