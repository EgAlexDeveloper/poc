import React, { createContext } from "react";
import { AuthState } from "./types";

export const AuthContext = createContext<AuthState>(new AuthState());