import { Switch, Route } from "react-router-dom";

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

const App = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/add'>
                <AddProduct />
            </Route>
            <Route path='/order'>
                <Order />
            </Route>
            <Route path='/product' exact>
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
            <Route path='/product/:id'>
                <SingleProduct />
            </Route>
        </Switch>
    );
};

export default App;
