"use client";
import { Ref, useEffect, useRef, useState } from "react";
import { UtilityButton } from "./ui/utility-button";
import { useAppDispatch } from "@/lib/hooks";
import { userLogout } from "@/lib/features/user-actions";
import { setStartup } from "@/lib/features/app-reducer";

interface MenuProps {
  onClose: () => void;
  ref: Ref<HTMLDivElement>;
}

const Menu = (props: MenuProps) => {
  const { onClose, ref } = props;
  const dispatch = useAppDispatch();

  const logout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("role");
      window.localStorage.removeItem("isLoggedIn");
    }

    dispatch(userLogout());
    dispatch(setStartup(true));
  };

  const onSelect = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 ">
      <div
        ref={ref}
        className="absolute bottom-12 left-4 border p-2 min-w-3xs bg-black"
      >
        <div
          className="hover:bg-gray-200 hover:text-black"
          onClick={() => {
            logout();
            onSelect();
          }}
        >
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export const Taskbar = () => {
  const [dateState, setDateState] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [menuRef]);

  const addYears = (date: Date, years: number) => {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
  };

  const futureDate = addYears(dateState, 146);

  return (
    <div className="pl-4 flex flex-row p-2 w-full justify-between z-50 fixed bottom-0 bg-(--background)">
      <UtilityButton text={"Menu"} onClick={() => setOpen(true)} />
      {open && <Menu ref={menuRef} onClose={() => setOpen(false)} />}
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
