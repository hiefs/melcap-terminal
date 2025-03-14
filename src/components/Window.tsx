"use client";

import { SquareX } from "lucide-react";
import { RefObject, useRef } from "react";
import Draggable from "react-draggable";

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
        className="border rounded shadow-md"
        style={{ width, height }}
      >
        <div
          id="window_header"
          className="window flex handle h-8 p-1 items-center border-b justify-between"
        >
          <button className="button">
            <SquareX />
          </button>
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
