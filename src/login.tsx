import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./Auth";

const Login = () => {
    const authState = useAuthContext();

    useEffect(() => {
        if (!authState?.isLoggedIn) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://reqres.in/api/login", true);
            xhr.setRequestHeader(
                'content-type', 'application/json'
            );
            xhr.onload = function () {
                if (xhr.status == 200) {
                    authState.updateAuthContext(JSON.parse(xhr.response), true);
                    // authState.updateIsLoggedInState(true);
                }
            };
            xhr.send(JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }));
        }
        // setUser(currentUser)
    }, [authState?.isLoggedIn]);

    return (
        <>
            Login is

            <Link to="/">App</Link>
        </>
    )
}

export default Login;