import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Padding = styled.div`
    padding: ${({ padding }) => padding};
`;

export const Margin = styled.div`
    margin: ${({ margin }) => margin};
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
`;

export const FlexColoumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextBox = styled.input`
    width: 80%;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    border: ${({ theme, primary }) =>
        primary ? "none" : `3px solid ${theme.colors.primaryColor}`};
    background-color: ${({ theme, primary }) =>
        primary ? theme.colors.primaryColor : "transparent"};
    color: ${({ theme, primary }) =>
        primary ? theme.colors.secondaryColor : theme.colors.primaryColor};
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.default};
    &:focus {
        outline: none;
    }
`;

export const SizedBox = styled.div`
    height: ${({ height }) => (height ? height : "0")};
    width: ${({ width }) => (width ? width : "0")};
`;

export const ChangePage = styled(Link)`
    font-style: none;
    color: transparent;
`;

export { GlobalStyle, theme };
