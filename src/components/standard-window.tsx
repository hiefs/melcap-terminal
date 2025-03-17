"use client";

import { X } from "lucide-react";
import React, { RefObject, useRef, useState } from "react";
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
  const [drag, setDrag] = useState({
    active: false,
    x: 0,
    y: 0,
  });
  const [dims, setDims] = useState({
    w: width,
    h: height,
  });

  const windowStyle: React.CSSProperties = {
    width: `${dims.w}px`,
    height: `${dims.h}px`,
    zIndex: zIndex,
    position: "absolute",
  };

  const startResize = (e: React.MouseEvent) => {
    setDrag({
      active: true,
      x: e.clientX,
      y: e.clientY,
    });
    document.addEventListener("mouseup", stopResize);
  };

  const resizeFrame = (e: React.MouseEvent) => {
    const { active, x, y } = drag;
    if (active) {
      const xDiff = e.clientX - x;
      const yDiff = e.clientY - y;
      const newW = Math.max(dims.w + xDiff, width); // Ensure width does not go below initial width
      const newH = Math.max(dims.h + yDiff, height); // Ensure height does not go below initial height

      setDrag({ ...drag, x: e.clientX, y: e.clientY });
      setDims({ w: newW, h: newH });
    }
  };

  const stopResize = () => {
    setDrag({ ...drag, active: false });
    document.removeEventListener("mouseup", stopResize);
  };

  const handleClose = () => {
    onClose?.();
    setDims({ w: width, h: height });
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
            style={windowStyle}
            onClick={onWindowClick}
            onMouseMove={resizeFrame}
            onMouseUp={stopResize}
          >
            <div
              id="window_header"
              className="flex handle h-8 p-1 items-center border-b justify-between"
              onClick={onWindowClick}
            >
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
              <button className="button border mr-1" onClick={handleClose}>
                <div className="w-4 h-4 flex items-center justify-center">
                  <X size={14} />
                </div>
              </button>
            </div>
            <div
              id="window_content"
              className="p-2 overflow-auto"
              style={{ height: `calc(${dims.h}px - 40px)` }}
            >
              {children}
            </div>
            <button
              className="window absolute bottom-0 right-0 p-4"
              onMouseDown={startResize}
            ></button>
          </div>
        </Draggable>
      )}
    </>
  );
};
