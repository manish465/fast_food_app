import { Switch, Route } from "react-router-dom";

import {
    AddProduct,
    Home,
    Product,
    Profile,
    SignIn,
    SignUp,
    SingleProduct,
} from "./pages";

const App = () => {
    return (
        <Switch>
            <Route path='/add'>
                <AddProduct />
            </Route>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/product'>
                <Product />
            </Route>
            <Route path='/profile'>
                <Profile />
            </Route>
            <Route path='/sign-in'>
                <SignIn />
            </Route>
            <Route path='/sign-up'>
                <SignUp />
            </Route>
            <Route path='single-product'>
                <SingleProduct />
            </Route>
        </Switch>
    );
};

export default App;
