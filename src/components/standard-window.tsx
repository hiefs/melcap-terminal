"use client";

import { X } from "lucide-react";
import React, { RefObject, useRef } from "react";
import Draggable from "react-draggable";
import { WindowSpacer } from "./ui/window-spacer";

interface WindowProps {
  open: boolean;
  children?: React.ReactNode;
  width: number;
  height: number;
  zIndex: number;
  onWindowClick: () => void;
  title?: string;
  start?: { x: number; y: number };
  onClose?: () => void;
}

export const Window = (props: WindowProps) => {
  const {
    children,
    width,
    height,
    title,
    start,
    open,
    zIndex,
    onWindowClick,
    onClose,
  } = props;
  const dragable = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose?.();
  };

  return (
    <>
      {open && (
        <Draggable
          handle=".handle"
          bounds="parent"
          nodeRef={dragable as RefObject<HTMLElement>}
          defaultPosition={{ x: start?.x || 10, y: start?.y || 10 }}
        >
          <div
            ref={dragable}
            className="border shadow-md bg-stone-950 z-50"
            style={{ width, height, zIndex, position: "absolute" }}
            onClick={onWindowClick}
          >
            <div
              id="window_header"
              className="flex handle h-8 p-1 items-center border-b justify-between"
              onClick={onWindowClick}
            >
              <button className="button border ml-1" onClick={handleClose}>
                <div className="w-4 h-4 flex items-center justify-center">
                  <X size={14} />
                </div>
              </button>
              {title ? (
                <div className="window w-full flex flex-row items-center">
                  <WindowSpacer />
                  <p>{title}</p>
                  <WindowSpacer />
                </div>
              ) : (
                <div className="window w-full flex flex-row items-center">
                  <WindowSpacer />
                </div>
              )}
            </div>
            <div id="window_content" className="p-2">
              {children}
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};
