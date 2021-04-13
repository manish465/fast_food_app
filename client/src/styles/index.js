import styled from "styled-components";

import GlobalStyle from "./globalStyles";
import theme from "./theme";

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
    &:focus {
        outline: none;
    }
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

export const Button = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

export const SizedBox = styled.div`
    height: ${({ height }) => (height ? height : "0")};
    width: ${({ width }) => (width ? width : "0")};
`;

export { GlobalStyle, theme };
