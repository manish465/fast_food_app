import { createGlobalStyle } from "styled-components";
import {
    Comfortaa_Bold,
    Comfortaa_Regular,
    Comfortaa_Medium,
    Comfortaa_Light,
} from "../assets/fonts";

export default createGlobalStyle`
    
    @font-face {
        font-family:bold ;
        src: url(${Comfortaa_Bold});
    }
    @font-face {
        font-family:medium ;
        src: url(${Comfortaa_Medium});
    }
    @font-face {
        font-family:regular ;
        src: url(${Comfortaa_Regular});
    }
    @font-face {
        font-family:light ;
        src: url(${Comfortaa_Light});
    }
    
    
    body{
        margin: 0;
        padding: 0;
        font-family:regular;
    }
`;
