import { useState } from "react";

import styled from "styled-components";
import {
    FlexColoumn,
    Padding,
    TextBox,
    SizedBox,
    Button,
    FlexRow,
} from "../styles";

import deafultIMG from "../assets/images/profile.jpg";

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
    box-shadow: ${({ theme }) => theme.shadow.default};
    &:focus {
        outline: none;
    }
`;

const AddImageIMG = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 50%;
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

const SignUp = () => {
    const [image, setImage] = useState(deafultIMG);

    const handelChange = (event) => {
        try {
            setImage(URL.createObjectURL(event.target.files[0]));
        } catch (err) {
            setImage(deafultIMG);
        }
    };

    return (
        <MainContainer>
            <Padding padding='30px 40px'>
                <FlexColoumn>
                    <Heading>Sign Up</Heading>
                    <AddImageIMG src={image} />
                    <SizedBox height='15px' />
                    <AddImageButtonLabel>
                        Add Profile Picture
                        <AddImageButton type='file' onChange={handelChange} />
                    </AddImageButtonLabel>
                    <SizedBox height='15px' />
                    <TextBox placeholder='Enter Name' />
                    <SizedBox height='15px' />
                    <TextBox placeholder='Enter Email' />
                    <SizedBox height='15px' />
                    <TextBox placeholder='Enter Password' />
                    <SizedBox height='15px' />
                    <TextBox placeholder='Re-Enter Password' />
                    <SizedBox height='15px' />
                    <TextBox placeholder='Enter Address' />
                    <SizedBox height='15px' />
                    <TextBox placeholder='Enter Phone' />
                    <SizedBox height='15px' />
                    <Select>
                        <option>Admin</option>
                        <option>User</option>
                    </Select>
                    <SizedBox height='15px' />
                    <FlexRow space_between>
                        <Button primary>Sign Up</Button>
                        <Button>Sign In</Button>
                    </FlexRow>
                </FlexColoumn>
            </Padding>
        </MainContainer>
    );
};

export default SignUp;
