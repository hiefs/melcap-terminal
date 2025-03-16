"use client";

import { X } from "lucide-react";
import React, { RefObject, useRef } from "react";
import Draggable from "react-draggable";
import { WindowSpacer } from "./ui/window-spacer";

interface WindowProps {
  children?: React.ReactNode;
  width: number;
  height: number;
  title?: string;
  start?: { x: number; y: number };
}

export const Window = (props: WindowProps) => {
  const { children, width, height, title, start } = props;
  const dragable = useRef<HTMLDivElement>(null);

  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      nodeRef={dragable as RefObject<HTMLElement>}
      defaultPosition={{ x: start?.x || 10, y: start?.y || 10 }}
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
          <button className="button border ml-1 w-4 h-4">
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
};
