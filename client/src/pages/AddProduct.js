import styled from "styled-components";
import { NavBar } from "../components";
import { FlexColoumn, Padding, TextBox, SizedBox } from "../styles";

const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 5% 20%;
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    font-family: bold;
    color: ${({ theme }) => theme.colors.primaryColor};
`;

const Select = styled.select`
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
    &:focus {
        outline: none;
    }
`;

const SaveButton = styled.button`
    border: ${({ theme, primary }) =>
        primary ? "none" : `3px solid ${theme.colors.primaryColor}`};
    background-color: ${({ theme, primary }) =>
        primary ? theme.colors.primaryColor : "transparent"};
    color: ${({ theme, primary }) =>
        primary ? theme.colors.secondaryColor : theme.colors.primaryColor};
    padding: 10px 80px;
    border-radius: 30px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const AddProduct = () => {
    return (
        <>
            <NavBar />
            <MainContainer>
                <Padding padding='30px 40px'>
                    <FlexColoumn>
                        <Heading>Add A Product</Heading>
                        <TextBox placeholder='Enter Name' />
                        <SizedBox height='15px' />
                        <TextBox placeholder='Enter Restaurant Name' />
                        <SizedBox height='15px' />
                        <TextBox placeholder='Enter Product Description' />
                        <SizedBox height='15px' />
                        <Select>
                            <option>Burger</option>
                            <option>Drink</option>
                            <option>Fries</option>
                            <option>Sandwich</option>
                            <option>Other</option>
                        </Select>
                        <SizedBox height='15px' />
                        <TextBox placeholder='Enter Rating' />
                        <SizedBox height='15px' />
                        <SaveButton>SAVE</SaveButton>
                    </FlexColoumn>
                </Padding>
            </MainContainer>
        </>
    );
};

export default AddProduct;
