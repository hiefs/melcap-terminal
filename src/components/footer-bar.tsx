"use client";
import { useEffect, useState } from "react";

export const Taskbar = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const addYears = (date: Date, years: number) => {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
  };

  const futureDate = addYears(dateState, 149);
  return (
    <div className="pl-4 flex flex-row border-t p-2 border-gray-300 w-full justify-between">
      <p className="text-left pr-8">Terminal</p>
      <div className="flex flex-row gap-4 pr-8">
        <p className="justify-end">
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </p>
        <p className="justify-end">
          {futureDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};
