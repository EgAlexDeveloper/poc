import { useContext } from "react";
import { AuthContext } from "./context";

const useAuthContext = () => {
    const authState = useContext(AuthContext);

    if (authState === undefined) {
        throw new Error("useAuthContext can only be used inside AuthProvider");
    }

    return authState;
};

export default useAuthContext;