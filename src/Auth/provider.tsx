import React, { FC, HTMLAttributes, useMemo, useState } from "react";
import { AuthContext } from ".";
import { AuthState, User } from "./types";

interface Props extends HTMLAttributes<HTMLElement> { }

const AuthProvider: FC<Props> = (props: Props) => {
    const initState = new AuthState();

    const updateAuthContext = (user: User, isLoggedIn?: boolean): void => updateAuthState({ ...initState, user: user, isLoggedIn: isLoggedIn! });

    const [authState, updateAuthState] = useState({ ...initState, updateAuthContext });

    return (
        <AuthContext.Provider value={authState}>
            {props.children}
        </AuthContext.Provider >
    );
};


export default AuthProvider;