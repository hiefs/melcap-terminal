import { createAsyncThunk } from "@reduxjs/toolkit";
import { Role, setIsLoggedIn, setRole, setUser, User } from "./user-reducer";
import { Employee } from "../interfaces";

export const login = createAsyncThunk(
  "user/login",
  async (employee: Employee, { dispatch }) => {
    const user: User = {
      eId: employee.employee_id,
      name: employee.name,
      department: employee.specialty,
      title: employee.position,
    };

    dispatch(setUser(user));
    dispatch(setRole(Role.User));
    dispatch(setIsLoggedIn(true));
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { dispatch }) => {
    dispatch(setUser({ eId: "", name: "", department: "", title: "" }));
    dispatch(setRole(Role.User));
    dispatch(setIsLoggedIn(false));
  }
);
