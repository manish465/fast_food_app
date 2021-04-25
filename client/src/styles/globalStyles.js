import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/Antonio-VariableFont_wght.ttf";

export default createGlobalStyle`
    
    @font-face{
        src:url(${font});
        font-family:antonio;
    }
    body{
        margin: 0;
        padding: 0;
        font-family:antonio;
        background-color:${({ theme }) => theme.colors.primaryColor};
    }
`;
