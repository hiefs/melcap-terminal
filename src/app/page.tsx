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

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined" && user.eId !== "") {
      window.localStorage.setItem("user", JSON.stringify(user));
      window.localStorage.setItem("role", JSON.stringify(Role.User));
      window.localStorage.setItem("isLoggedIn", "true");
    }
  }, [user]);

  useEffect(() => {
    getEmployees().then((data) => {
      dispatch(setEmployees(data));
    });
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
