"use client";
import { useEffect, useState } from "react";
import { UtilityButton } from "./ui/utility-button";
import { useAppDispatch } from "@/lib/hooks";
import { userLogout } from "@/lib/features/user-actions";
import { setStartup } from "@/lib/features/app-reducer";

export const Taskbar = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const dispatch = useAppDispatch();

  const addYears = (date: Date, years: number) => {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("role");
      window.localStorage.removeItem("isLoggedIn");
    }

    dispatch(userLogout());
    dispatch(setStartup(true));
  };

  // BUILD THE START MENU PLEASE
  // Needs Logout Button

  const futureDate = addYears(dateState, 146);
  return (
    <div className="pl-4 flex flex-row p-2 w-full justify-between z-50 fixed bottom-0 bg-(--background)">
      <p className="flex text-left pr-8 gap-4">
        <UtilityButton text="Start" />
        <UtilityButton text="Log out" onClick={() => logout()} />
      </p>
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
