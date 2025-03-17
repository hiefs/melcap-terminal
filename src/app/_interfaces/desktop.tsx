"use client";

import { Window } from "@/components/standard-window";
import { Taskbar } from "@/components/taskbar";
import { DesktopIcon } from "@/components/ui/desktop-icon";
import {
  setIsFilesOpen,
  setIsInboxOpen,
  setIsInfoOpen,
  setIsNewsOpen,
  setIsSearchOpen,
  setIsTasksOpen,
  setIsTrashOpen,
} from "@/lib/features/app-reducer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export const Desktop = () => {
  const [zIndexOrder, setZIndexOrder] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  //const user = useAppSelector((state) => state.user.user);
  const app = useAppSelector((state) => state.app);
  const isTrashOpen = app.isTrashOpen;
  const isInfoOpen = app.isInfoOpen;
  const isTasksOpen = app.isTasksOpen;
  const isFilesOpen = app.isFilesOpen;
  const isInboxOpen = app.isInboxOpen;
  const isSearchOpen = app.isSearchOpen;
  const isNewsOpen = app.isNewsOpen;

  const bringToFront = (windowId: string) => {
    setZIndexOrder((prevOrder) => [
      ...prevOrder.filter((id) => id !== windowId),
      windowId,
    ]);
  };

  const getZIndex = (windowId: string) => {
    return zIndexOrder.indexOf(windowId) + 1;
  };

  return (
    <div className="flex w-full h-full flex-col citadel">
      <div className="flex-grow relative p-12">
        <div className="absolute h-2/3 top-2 left-2 pl-8 pr-8 pt-4 pb-4 z-0">
          <div
            id="terminal_icons"
            className="flex flex-col justify-center items-center gap-8"
          >
            {/* Desktop Icons */}
            <DesktopIcon
              title={"Trash"}
              image={
                "https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/recycle_bin.png"
              }
              onClick={() => dispatch(setIsTrashOpen(!isTrashOpen))}
            />
            <DesktopIcon
              title={"Info"}
              image={
                "https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/text_file.png"
              }
              onClick={() => dispatch(setIsInfoOpen(!isInfoOpen))}
            />
            <DesktopIcon
              title={"Tasks"}
              image={
                "https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/tasks.png"
              }
              onClick={() => dispatch(setIsTasksOpen(!isTasksOpen))}
            />
            <DesktopIcon
              title={"Files"}
              image={
                "https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/folder_open.png"
              }
              onClick={() => dispatch(setIsFilesOpen(!isFilesOpen))}
            />
            <DesktopIcon
              title={"Inbox"}
              image={
                "https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/mail.png"
              }
              onClick={() => dispatch(setIsInboxOpen(!isInboxOpen))}
            />
            <DesktopIcon
              title="Search"
              image={
                "https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/search.png"
              }
              onClick={() => dispatch(setIsSearchOpen(!isSearchOpen))}
            />
            <DesktopIcon
              title="News"
              image={
                "https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/news.png"
              }
              onClick={() => dispatch(setIsNewsOpen(!isNewsOpen))}
            />
          </div>
        </div>
        {/* Desktop Windows */}
        <Window
          width={400}
          height={300}
          title={"Trash"}
          start={{ x: 10, y: 10 }}
          open={isTrashOpen}
          onClose={() => dispatch(setIsTrashOpen(false))}
          zIndex={getZIndex("trash")}
          onWindowClick={() => bringToFront("trash")}
        >
          <p>Trash Window</p>
        </Window>
        <Window
          width={400}
          height={300}
          title={"Info"}
          start={{ x: 20, y: 30 }}
          open={isInfoOpen}
          onClose={() => dispatch(setIsInfoOpen(false))}
          zIndex={getZIndex("info")}
          onWindowClick={() => bringToFront("info")}
        >
          <p>Info Window</p>
        </Window>
        <Window
          width={400}
          height={300}
          title={"Tasks"}
          start={{ x: 130, y: 30 }}
          open={isTasksOpen}
          onClose={() => dispatch(setIsTasksOpen(false))}
          zIndex={getZIndex("tasks")}
          onWindowClick={() => bringToFront("tasks")}
        >
          <p>Please remember to complete your tasks</p>
        </Window>
        <Window
          width={400}
          height={300}
          title={"Files"}
          start={{ x: 90, y: 30 }}
          open={isFilesOpen}
          onClose={() => dispatch(setIsFilesOpen(false))}
          zIndex={getZIndex("files")}
          onWindowClick={() => bringToFront("files")}
        >
          <p>Files Window</p>
        </Window>
        <Window
          width={400}
          height={300}
          title={"Messages"}
          start={{ x: 130, y: 30 }}
          open={isInboxOpen}
          onClose={() => dispatch(setIsInboxOpen(false))}
          zIndex={getZIndex("inbox")}
          onWindowClick={() => bringToFront("inbox")}
        >
          <p>Inbox</p>
        </Window>
        <Window
          width={400}
          height={300}
          title={"Employee Search"}
          start={{ x: 130, y: 30 }}
          open={isSearchOpen}
          onClose={() => dispatch(setIsSearchOpen(false))}
          zIndex={getZIndex("search")}
          onWindowClick={() => bringToFront("search")}
        >
          <p>employee list</p>
        </Window>
        <Window
          width={400}
          height={300}
          title={"News"}
          start={{ x: 130, y: 30 }}
          open={isNewsOpen}
          onClose={() => dispatch(setIsNewsOpen(false))}
          zIndex={getZIndex("news")}
          onWindowClick={() => bringToFront("news")}
        >
          <p>News!</p>
        </Window>
      </div>
      <div>
        <Taskbar />
      </div>
    </div>
  );
};
