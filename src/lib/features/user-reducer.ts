import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Role {
  User = "employee",
  Admin = "manager",
}

export interface User {
  eId: string;
  name: string;
  department: string;
  title: string;
}

interface userState {
  user: User;
  role: Role;
  isLoggedIn: boolean;
}

const initialState: userState = {
  user: {
    eId: "",
    name: "",
    department: "",
    title: "",
  },
  role: Role.User,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setRole: (state, action: PayloadAction<Role>) => {
      state.role = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setRole, setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
