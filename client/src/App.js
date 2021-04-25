import { useEffect, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

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
    const { setAuthData } = useContext(userContext);
    const history = useHistory();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("auth"));
        data ? history.push("/") : history.push("/sign-in");
        setAuthData(
            data
                ? {
                      token: data.token,
                      user: data.user,
                      isAdmin: data.user.roles === "Admin",
                      isAuthenticated: data ? true : false,
                  }
                : null,
        );
    }, [setAuthData, history]);
    return (
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
    );
};

export default App;
