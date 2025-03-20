"use client";

import { openLinkInNewTab } from "@/utils/tools/tools";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FileIconProps {
  title: string;
  url: string;
}

export const FileIcon = (props: FileIconProps) => {
  const { title, url } = props;
  const [active, setActive] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActive(!active);
  };

  const handleDoubleClick = () => {
    openLinkInNewTab(url);
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
        <Image
          src={
            "https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/file.png"
          }
          alt={""}
          height={48}
          width={48}
        />
        <span
          className={
            "p-1 mt-2 text-xs " +
            (active ? "bg-neutral-300 text-black" : "bg-neutral-800")
          }
          style={{
            maxWidth: "80px", // Set a maximum width for the title container
            whiteSpace: "normal", // Allow text to wrap
            wordWrap: "break-word", // Break long words
          }}
        >
          {title}
        </span>
      </button>
    </div>
  );
};
