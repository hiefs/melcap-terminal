"use client";

import { useEffect, useState } from "react";
import { Startup } from "./_interfaces/startup";
import { Desktop } from "./_interfaces/desktop";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  Role,
  setIsLoggedIn,
  setRole,
  setUser,
} from "@/lib/features/user-reducer";
import { Loader } from "@/components/ui/loading-dots";
import { setEmployees, setStartup } from "@/lib/features/app-reducer";
import { getEmployees } from "@/utils/employee";
import { getMail } from "@/utils/mail";
import { setMail } from "@/lib/features/mail-reducer";
import { getFiles } from "@/utils/file";
import { setFiles } from "@/lib/features/file-reducer";
import { getNews } from "@/utils/news";
import { setNews } from "@/lib/features/news-reducer";

export default function Home() {
  const user = useAppSelector((state) => state.user.user);
  const app = useAppSelector((state) => state.app);
  const [isLoading, setIsLoading] = useState(true);
  const isStartupActive = app.isStartupActive;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userFromLocalStorage = window.localStorage.getItem("user");
      const roleFromLocalStorage = window.localStorage.getItem("role");
      const loginFromLocalStorage = window.localStorage.getItem("isLoggedIn");

      if (
        loginFromLocalStorage === "true" &&
        userFromLocalStorage &&
        roleFromLocalStorage
      ) {
        dispatch(setUser(JSON.parse(userFromLocalStorage)));
        dispatch(setRole(JSON.parse(roleFromLocalStorage)));
        dispatch(setIsLoggedIn(true));

        dispatch(setStartup(false));
      }
    }
  }, [dispatch]);

  // Separate useEffect for user state updates
  useEffect(() => {
    if (typeof window !== "undefined" && user.eId !== "") {
      window.localStorage.setItem("user", JSON.stringify(user));
      window.localStorage.setItem("role", JSON.stringify(Role.User));
      window.localStorage.setItem("isLoggedIn", "true");
    }
  }, [user]);

  // Separate useEffect for fetching data
  useEffect(() => {
    getEmployees().then((data) => {
      dispatch(setEmployees(data));
    });

    getMail().then((data) => {
      const currentMonth = new Date().getMonth();
      const filteredMail = data.filter((mail) => {
        const mailDate = new Date(mail.date);
        return mailDate.getMonth() === currentMonth;
      });
      dispatch(setMail(filteredMail));
    });

    getFiles().then((data) => {
      dispatch(setFiles(data));
    });

    getNews().then((data) => {
      dispatch(setNews(data));
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [dispatch]);

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div className="flex flex-row justify-center items-center gap-4 m-auto h-full w-full">
          <Loader />
        </div>
      ) : isStartupActive ? (
        <Startup open={isStartupActive} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}
