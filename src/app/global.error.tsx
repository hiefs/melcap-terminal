"use client"; // Error boundaries must be Client Components

import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/navigation";

const sourceCode = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  return (
    // global-error must include html and body tags
    <html>
      <body
        className={`${sourceCode.variable} antialiased flex h-screen w-full justify-center items-center`}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <p className="mb-6 bg-white text-black pl-2 pr-2">
            An error has occured
          </p>
          <p>A problem has been detected. </p>
          <p>Please restart the machine.</p>
          <button
            onClick={() => router.push("/")}
            className="button border pl-4 pr-4 mt-6"
          >
            Restart
          </button>
        </div>
      </body>
    </html>
  );
}
