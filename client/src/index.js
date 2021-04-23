import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

import UserContext from "./context/auth";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserContext>
            <Router>
                <App />
            </Router>
        </UserContext>
    </ThemeProvider>,
    document.getElementById("root"),
);
