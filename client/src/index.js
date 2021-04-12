import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
            <App />
        </Router>
    </ThemeProvider>,
    document.getElementById("root"),
);
