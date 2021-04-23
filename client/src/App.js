import { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { userContext } from "./context/auth";
import {
    AddProduct,
    Home,
    Order,
    Product,
    Profile,
    SignIn,
    SignUp,
    SingleProduct,
} from "./pages";
import { PrivateAuthRoute, PrivateAdminRoute } from "./PrivateRoute";

const App = () => {
    const { authData, setAuthData } = useContext(userContext);

    useEffect(() => {
        try {
            setAuthData(JSON.parse(localStorage.getItem("auth")));
        } catch (err) {
            setAuthData({
                token: null,
                user: null,
                isAdmin: false,
                isAuthenticated: false,
            });
        }
    }, [setAuthData]);
    return (
        <>
            {authData ? (
                <Switch>
                    <Route path='/sign-in'>
                        <SignIn />
                    </Route>
                    <Route path='/sign-up'>
                        <SignUp />
                    </Route>
                    <PrivateAuthRoute path='/' exact>
                        <Home />
                    </PrivateAuthRoute>
                    <PrivateAdminRoute path='/add'>
                        <AddProduct />
                    </PrivateAdminRoute>
                    <PrivateAuthRoute path='/order'>
                        <Order />
                    </PrivateAuthRoute>
                    <PrivateAuthRoute path='/product' exact>
                        <Product />
                    </PrivateAuthRoute>
                    <PrivateAuthRoute path='/profile'>
                        <Profile />
                    </PrivateAuthRoute>
                    <PrivateAuthRoute path='/product/:id'>
                        <SingleProduct />
                    </PrivateAuthRoute>
                </Switch>
            ) : null}
        </>
    );
};

export default App;
