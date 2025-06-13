"use client";

import { FilesWindow } from "@/components/content/files-window";
import { InboxWindow } from "@/components/content/inbox-window";
import { InfoWindow } from "@/components/content/info-window";
import { NewsWindow } from "@/components/content/news-window";
import { SearchWindow } from "@/components/content/search-window";
import { SupportWindow } from "@/components/content/support-window";
import { TaskWindow } from "@/components/content/task-window";
import { TrashWindow } from "@/components/content/trash-window";
import { Window } from "@/components/standard-window";
import { Taskbar } from "@/components/taskbar";
import { DesktopIcon } from "@/components/ui/desktop-icon";
import {
  setIsFilesOpen,
  setIsInboxOpen,
  setIsInfoOpen,
  setIsNewsOpen,
  setIsSearchOpen,
  setIsSupportOpen,
  setIsTasksOpen,
  setIsTrashOpen,
} from "@/lib/features/app-reducer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export const Desktop = () => {
  const [zIndexOrder, setZIndexOrder] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const app = useAppSelector((state) => state.app);
  const isTrashOpen = app.isTrashOpen;
  const isInfoOpen = app.isInfoOpen;
  const isTasksOpen = app.isTasksOpen;
  const isFilesOpen = app.isFilesOpen;
  const isInboxOpen = app.isInboxOpen;
  const isSearchOpen = app.isSearchOpen;
  const isNewsOpen = app.isNewsOpen;
  const isSupportOpen = app.isSupportOpen;

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
        <div className="absolute h-full top-2 left-2 pl-8 pr-8 pt-4 pb-4 z-0">
          <div
            id="terminal_icons"
            className="flex flex-col h-full flex-wrap justify-start items-center gap-8"
          >
            {/* Desktop Icons */}
            <DesktopIcon
              title={"Trash"}
              image={
                "https://data.melcap.cc/storage/v1/object/public/desktop-icons/recycle_bin.png"
              }
              onClick={() => dispatch(setIsTrashOpen(!isTrashOpen))}
            />
            <DesktopIcon
              title={"Info"}
              image={
                "https://data.melcap.cc/storage/v1/object/public/desktop-icons/text_file.png"
              }
              onClick={() => dispatch(setIsInfoOpen(!isInfoOpen))}
            />
            <DesktopIcon
              title={"Tasks"}
              image={
                "https://data.melcap.cc/storage/v1/object/public/desktop-icons/tasks.png"
              }
              onClick={() => dispatch(setIsTasksOpen(!isTasksOpen))}
            />
            <DesktopIcon
              title={"Files"}
              image={
                "https://data.melcap.cc/storage/v1/object/public/desktop-icons/folder_open.png"
              }
              onClick={() => dispatch(setIsFilesOpen(!isFilesOpen))}
            />
            <DesktopIcon
              title={"Inbox"}
              image={
                "https://data.melcap.cc/storage/v1/object/public/desktop-icons/mail.png"
              }
              onClick={() => dispatch(setIsInboxOpen(!isInboxOpen))}
            />
            <DesktopIcon
              title="Search"
              image={
                "https://data.melcap.cc/storage/v1/object/public/desktop-icons/search.png"
              }
              onClick={() => dispatch(setIsSearchOpen(!isSearchOpen))}
            />
            <DesktopIcon
              title="News"
              image={
                "https://data.melcap.cc/storage/v1/object/public/desktop-icons/search.png"
              }
              onClick={() => dispatch(setIsNewsOpen(!isNewsOpen))}
            />
            <DesktopIcon
              title="Support"
              image={
                "https://data.melcap.cc/storage/v1/object/public/desktop-icons/support.png"
              }
              onClick={() => dispatch(setIsSupportOpen(!isSupportOpen))}
            />
          </div>
        </div>
        {/* Desktop Windows */}
        <Window
          width={400}
          height={100}
          title={"Trash"}
          start={{ x: 10, y: 10 }}
          open={isTrashOpen}
          onClose={() => dispatch(setIsTrashOpen(false))}
          zIndex={getZIndex("trash")}
          onWindowClick={() => bringToFront("trash")}
        >
          <TrashWindow />
        </Window>
        <Window
          width={300}
          height={300}
          title={"Info"}
          start={{ x: 20, y: 20 }}
          open={isInfoOpen}
          onClose={() => dispatch(setIsInfoOpen(false))}
          zIndex={getZIndex("info")}
          onWindowClick={() => bringToFront("info")}
        >
          <InfoWindow user={user} />
        </Window>
        <Window
          width={800}
          height={475}
          title={"Tasks"}
          start={{ x: 30, y: 30 }}
          open={isTasksOpen}
          onClose={() => dispatch(setIsTasksOpen(false))}
          zIndex={getZIndex("tasks")}
          onWindowClick={() => bringToFront("tasks")}
        >
          <TaskWindow />
        </Window>
        <Window
          width={400}
          height={400}
          title={"Files"}
          start={{ x: 40, y: 40 }}
          open={isFilesOpen}
          onClose={() => dispatch(setIsFilesOpen(false))}
          zIndex={getZIndex("files")}
          onWindowClick={() => bringToFront("files")}
        >
          <FilesWindow />
        </Window>
        <Window
          width={400}
          height={300}
          title={"Messages"}
          start={{ x: 50, y: 50 }}
          open={isInboxOpen}
          onClose={() => dispatch(setIsInboxOpen(false))}
          zIndex={getZIndex("inbox")}
          onWindowClick={() => bringToFront("inbox")}
        >
          <InboxWindow />
        </Window>
        <Window
          width={400}
          height={500}
          title={"Employee Search"}
          start={{ x: 60, y: 60 }}
          open={isSearchOpen}
          onClose={() => dispatch(setIsSearchOpen(false))}
          zIndex={getZIndex("search")}
          onWindowClick={() => bringToFront("search")}
        >
          <SearchWindow />
        </Window>
        <Window
          width={400}
          height={600}
          title={"News"}
          start={{ x: 70, y: 70 }}
          open={isNewsOpen}
          onClose={() => dispatch(setIsNewsOpen(false))}
          zIndex={getZIndex("news")}
          onWindowClick={() => bringToFront("news")}
        >
          <NewsWindow />
        </Window>
        <Window
          width={300}
          height={200}
          title={"Support"}
          start={{ x: 80, y: 80 }}
          open={isSupportOpen}
          onClose={() => dispatch(setIsSupportOpen(false))}
          zIndex={getZIndex("support")}
          onWindowClick={() => bringToFront("support")}
        >
          <SupportWindow />
        </Window>
      </div>
      <div>
        <Taskbar />
      </div>
    </div>
  );
};
