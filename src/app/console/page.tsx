"use client";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect, useState } from "react";
import { Mobile } from "../_interfaces/mobile";
import { Loader } from "@/components/ui/loading-dots";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { Role, setRole } from "@/lib/features/user-reducer";
import { useRouter } from "next/navigation";

export default function Console() {
  const [isLoading, setIsLoading] = useState(true);
  const role = useAppSelector((state) => state.user.role);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);

    if (role === Role.User) {
      const savedRole = localStorage.getItem("role");

      if (JSON.parse(savedRole) === Role.Admin) {
        dispatch(setRole(Role.Admin));
        setIsLoading(false);
      } else {
        router.push("/");
      }
    } else {
      setIsLoading(false);
    }
  }, [dispatch, role, router]);

  return (
    <div className="w-full h-full">
      <BrowserView className="w-full h-full">
        {isLoading ? (
          <div className="flex flex-row justify-center items-center gap-4 m-auto h-full w-full">
            <Loader />
          </div>
        ) : (
          <div>{"Welcome to the Console"}</div>
        )}
      </BrowserView>
      <MobileView className="w-full h-full">
        <Mobile />
      </MobileView>
    </div>
  );
}
