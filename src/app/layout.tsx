import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Taskbar } from "@/components/footer-bar";

const sourceCode = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        <header></header>
        <main className="main flex-grow relative">{children}</main>
        <footer>
          <Taskbar />
        </footer>
      </body>
    </html>
  );
}
