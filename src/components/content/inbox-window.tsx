"use client";

import { useAppSelector } from "@/lib/hooks";
import { Mail } from "@/lib/interfaces";
import MarkdownRenderer from "@/lib/markdown-renderer";
import { useState } from "react";

interface InboxNotificationProps {
  sender: string;
  subject: string;
  selected: boolean;
}

const InboxNotification: React.FC<InboxNotificationProps> = ({
  sender,
  subject,
  selected,
}) => {
  return (
    <div
      className={
        "w-full h-18 flex flex-col justify-center border-2 p-2 " +
        `${
          selected
            ? "bg-neutral-300 text-black"
            : "bg-black hover:bg-neutral-800 "
        }`
      }
    >
      <p className="text-base overflow-hidden whitespace-nowrap truncate w-full">
        {sender}
      </p>
      <p className="text-xs">{subject}</p>
    </div>
  );
};

export const InboxWindow = () => {
  const [selectedMessage, setSelectedMessage] = useState<Mail | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const mail = useAppSelector((state) => state.mail.mail);

  const handleTileClick = (tile: Mail, index: number) => {
    if (selectedIndex === index) {
      setSelectedMessage(null);
      setSelectedIndex(null);
    } else {
      setSelectedMessage(tile);
      setSelectedIndex(index);
    }
  };

  return (
    <>
      {mail.length === 0 && (
        <div className="w-full flex flex-col h-full justify-center items-center">
          <p className="mb-4 ">
            <span>No new messages.</span>
          </p>
        </div>
      )}
      {mail.length > 0 && (
        <>
          <div className="w-full flex flex-col h-1/2 overflow-auto gap-2">
            {mail.map((tile, index) => (
              <div key={index} onClick={() => handleTileClick(tile, index)}>
                <InboxNotification
                  sender={tile.sender}
                  subject={tile.subject}
                  selected={selectedIndex === index}
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col h-1/2 overflow-auto border-t-2 border-dashed">
            {selectedMessage && (
              <div className="mt-2">
                <p>From: {selectedMessage.sender}</p>
                <p>To: You</p>
                <p className="mb-2">Subject: {selectedMessage.subject}</p>
                <hr className="mb-4" />

                <div className="mt-2">
                  <MarkdownRenderer filename={selectedMessage.message} />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
