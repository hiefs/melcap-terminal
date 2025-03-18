"use client";

import { useAppSelector } from "@/lib/hooks";
import { Mail } from "@/lib/interfaces";
import { useState } from "react";

interface InboxNotificationProps {
  sender: string;
  subject: string;
}

const InboxNotification: React.FC<InboxNotificationProps> = ({
  sender,
  subject,
}) => {
  return (
    <div className="bg-black w-full h-18 flex flex-col justify-center border-2 p-6 hover:bg-neutral-800">
      <p className="text-base text-ellipsis">{sender}</p>
      <p className="text-xs">{subject}</p>
    </div>
  );
};

export const InboxWindow = () => {
  const [selectedMessage, setSelectedMessage] = useState<Mail>();
  const mail = useAppSelector((state) => state.mail.mail);
  return (
    <>
      <div className="w-full flex flex-col h-1/2 overflow-auto gap-2">
        {mail.map((tile, index) => (
          <div key={index} onClick={() => setSelectedMessage(tile)}>
            <InboxNotification sender={tile.sender} subject={tile.subject} />
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col h-1/2 overflow-auto border-t-2 border-dashed overflow-auto">
        {selectedMessage && (
          <div className="mt-8">
            <p>From: {selectedMessage.sender}</p>
            <p>To: You</p>
            <p className="mb-2">Subject: {selectedMessage.subject}</p>
            <hr className="mb-4" />

            {selectedMessage.message.split("\\n").map((line, index) => {
              return <p key={index}>{line}</p>;
            })}
          </div>
        )}
      </div>
    </>
  );
};
