import { createAsyncThunk } from "@reduxjs/toolkit";
import { Role, setIsLoggedIn, setRole, setUser, User } from "./user-reducer";
import { Employee } from "../interfaces";
import {
  setIsInfoOpen,
  setIsTasksOpen,
  setIsFilesOpen,
  setIsInboxOpen,
  setIsSearchOpen,
  setIsNewsOpen,
} from "./app-reducer";

export const userLogin = createAsyncThunk(
  "user/login",
  async (employee: Employee, { dispatch }) => {
    const user: User = {
      eId: employee.employee_id,
      name: employee.name,
      department: employee.specialty,
      title: employee.position,
      race: employee.race,
      age: employee.age,
      enrolledDate: employee.created_at,
    };

    dispatch(setUser(user));
    dispatch(setRole(Role.User));
    dispatch(setIsLoggedIn(true));
  }
);

export const userLogout = createAsyncThunk(
  "user/logout",
  async (_, { dispatch }) => {
    dispatch(
      setUser({
        eId: "",
        name: "",
        department: "",
        title: "",
        race: "",
        age: 0,
        enrolledDate: "",
      })
    );
    dispatch(setRole(Role.User));
    dispatch(setIsLoggedIn(false));
    dispatch(setIsInfoOpen(false));
    dispatch(setIsTasksOpen(false));
    dispatch(setIsFilesOpen(false));
    dispatch(setIsInboxOpen(false));
    dispatch(setIsSearchOpen(false));
    dispatch(setIsNewsOpen(false));
  }
);
