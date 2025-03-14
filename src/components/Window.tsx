"use client";

import { X } from "lucide-react";
import { RefObject, useRef } from "react";
import Draggable from "react-draggable";
import { WindowSpacer } from "./ui/window-spacer";

interface WindowProps {
  children?: React.ReactNode;
  width: number;
  height: number;
}

export default function Window({
  children,
  width,
  height,
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
        className="border rounded shadow-md bg-stone-950"
        style={{ width, height }}
      >
        <div
          id="window_header"
          className="window flex handle h-8 p-1 items-center border-b justify-between"
        >
          <button className="button border">
            <X size={14} />
          </button>
          <WindowSpacer />
          <p>Window Title</p>
        </div>
        <div id="window_content" className="p-2">
          placeholder
          {children}
        </div>
      </div>
    </Draggable>
  );
}
