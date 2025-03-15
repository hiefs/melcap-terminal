"use client";

import { X } from "lucide-react";
import { RefObject, useRef } from "react";
import Draggable from "react-draggable";
import { WindowSpacer } from "./ui/window-spacer";

interface WindowProps {
  children?: React.ReactNode;
  width: number;
  height: number;
  title?: string;
}

export default function Window({
  children,
  width,
  height,
  title,
}: Readonly<WindowProps>) {
  const dragable = useRef<HTMLDivElement>(null);

  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      nodeRef={dragable as RefObject<HTMLElement>}
    >
      <div
        ref={dragable}
        className="border shadow-md bg-stone-950"
        style={{ width, height }}
      >
        <div
          id="window_header"
          className="window flex handle h-8 p-1 items-center border-b justify-between"
        >
          <button className="button border ml-1">
            <X size={14} />
          </button>
          {title ? (
            <>
              <WindowSpacer />
              <p>{title || ""}</p>
              <WindowSpacer />
            </>
          ) : (
            <WindowSpacer />
          )}
        </div>
        <div id="window_content" className="p-2">
          {children}
        </div>
      </div>
    </Draggable>
  );
}
