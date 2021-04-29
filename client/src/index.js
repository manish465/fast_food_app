import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

import UserContext from "./context/auth";
import ProductContext from "./context/product";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProductContext>
            <UserContext>
                <Router>
                    <App />
                </Router>
            </UserContext>
        </ProductContext>
    </ThemeProvider>,
    document.getElementById("root"),
);
