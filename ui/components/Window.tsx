"use client";

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
      <div ref={dragable} className="bg-sky-500" style={{ width, height }}>
        <div id="window_header" className="handle h-8 bg-gray-300"></div>
        <div id="window_content">
          placeholder
          {children}
        </div>
      </div>
    </Draggable>
  );
}
