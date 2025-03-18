"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DesktopIconProps {
  title: string;
  image: string;
  alert?: boolean;
  onClick?: () => void;
}

export const DesktopIcon = (props: DesktopIconProps) => {
  const { alert, title, image, onClick } = props;
  const [active, setActive] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActive(!active);
  };

  const handleDoubleClick = () => {
    onClick?.();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative" ref={iconRef}>
      {alert && (
        <span className="absolute top-0 right-0 flex size-3 z-10">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
        </span>
      )}
      <button
        className="button flex flex-col items-center relative"
        onDoubleClick={handleDoubleClick}
        onClick={handleClick}
      >
        <Image src={image} alt={""} height={36} width={36} />
        <span
          className={
            "p-1 mt-2 text-xs " +
            (active ? "bg-neutral-300 text-black" : "bg-neutral-800")
          }
        >
          {title}
        </span>
      </button>
    </div>
  );
};
