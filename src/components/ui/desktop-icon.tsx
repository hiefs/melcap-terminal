"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DesktopIconProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export const DesktopIcon = (props: DesktopIconProps) => {
  const { title, image, onClick } = props;
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
    <div className="flex flex-col items-center" ref={iconRef}>
      <button
        className="button flex flex-col items-center"
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
