import { useState } from "react";
import styled from "styled-components";
import { NavBar } from "../components";
import { FlexColoumn, Padding, TextBox, SizedBox, ChangePage } from "../styles";
import deafultIMG from "../assets/images/fast-food.jpg";

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
    border: 3px solid ${({ theme }) => theme.colors.primaryColor};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryColor};
    padding: 10px 80px;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.default};
    &:focus {
        outline: none;
    }
`;

const AddImageIMG = styled.img`
    width: 200px;
    object-fit: contain;
    border-radius: 5%;
`;

const AddImageButton = styled.input`
    width: 0;
    height: 0;
    overflow: hidden;
    display: hidden;
`;

const AddImageButtonLabel = styled.label`
    padding: 10px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const AddProduct = () => {
    const [image, setImage] = useState(deafultIMG);

    const handelChange = (event) => {
        try {
            setImage(URL.createObjectURL(event.target.files[0]));
        } catch (err) {
            setImage(deafultIMG);
        }
    };

    return (
        <>
            <NavBar />
            <MainContainer>
                <Padding padding='30px 40px'>
                    <FlexColoumn>
                        <Heading>Add A Product</Heading>
                        <AddImageIMG src={image} />
                        <SizedBox height='15px' />
                        <AddImageButtonLabel>
                            Add Profile Picture
                            <AddImageButton
                                type='file'
                                onChange={handelChange}
                            />
                        </AddImageButtonLabel>
                        <SizedBox height='15px' />
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
                        <SizedBox height='25px' />
                        <ChangePage to='/'>
                            <SaveButton>SAVE</SaveButton>
                        </ChangePage>
                    </FlexColoumn>
                </Padding>
            </MainContainer>
        </>
    );
};

export default AddProduct;
