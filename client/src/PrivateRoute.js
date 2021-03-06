import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { userContext } from "./context/auth";

export const PrivateAuthRoute = ({ children, ...rest }) => {
    const { authData } = useContext(userContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                authData ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/sign-in",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export const PrivateAdminRoute = ({ children, ...rest }) => {
    const { authData } = useContext(userContext);
    return (
        <Route
            {...rest}
            render={(props) =>
                authData && authData.isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};
