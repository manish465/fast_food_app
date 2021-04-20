import { useState, useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
    FlexColoumn,
    Padding,
    TextBox,
    SizedBox,
    Button,
    FlexRow,
    ChangePage,
} from "../styles";

import deafultIMG from "../assets/images/profile.jpg";

dotenv.config();

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

const DisplayForm = styled.form`
    width: 100%;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
`;

const SignUp = () => {
    const [image, setImage] = useState(deafultIMG);
    const { register, getValues, watch } = useForm();
    const history = useHistory();
    const profilePicture = watch("profile_pic");
    useEffect(() => {
        try {
            setImage(URL.createObjectURL(profilePicture[0]));
        } catch (e) {
            setImage(deafultIMG);
        }
    }, [profilePicture]);

    const handelSubmit = () => {
        const data = {
            name: getValues("name"),
            email: getValues("email"),
            password_1: getValues("password_1"),
            password_2: getValues("password_2"),
            address: getValues("address"),
            phone_no: getValues("phone_no"),
            profile_pic: image,
            roles: getValues("roles"),
        };

        axios
            .post(`${process.env.SERVER_URL}api/users/sign-up`, data)
            .then((response) => {
                response ? history.push("/sign-in") : null;
            })
            .catch((error) => console.log(error));
    };

    return (
        <MainContainer>
            <Padding padding='30px 40px'>
                <FlexColoumn>
                    <Heading>Sign Up</Heading>
                    <AddImageIMG src={image} />
                    <SizedBox height='15px' />
                    <DisplayForm>
                        <AddImageButtonLabel>
                            Add Profile Picture
                            <AddImageButton
                                type='file'
                                {...register("profile_pic")}
                            />
                        </AddImageButtonLabel>
                        <SizedBox height='15px' />
                        <TextBox
                            {...register("name")}
                            placeholder='Enter Name'
                        />
                        <SizedBox height='15px' />
                        <TextBox
                            {...register("email")}
                            placeholder='Enter Email'
                        />
                        <SizedBox height='15px' />
                        <TextBox
                            {...register("password_1")}
                            placeholder='Enter Password'
                        />
                        <SizedBox height='15px' />
                        <TextBox
                            {...register("password_2")}
                            placeholder='Re-Enter Password'
                        />
                        <SizedBox height='15px' />
                        <TextBox
                            {...register("address")}
                            placeholder='Enter Address'
                        />
                        <SizedBox height='15px' />
                        <TextBox
                            {...register("phone_no")}
                            placeholder='Enter Phone'
                        />
                        <SizedBox height='15px' />
                        <Select {...register("roles")}>
                            <option>User</option>
                            <option>Admin</option>
                        </Select>
                    </DisplayForm>
                    <SizedBox height='15px' />
                    <FlexRow space_between>
                        <Button primary onClick={handelSubmit}>
                            Sign Up
                        </Button>
                        <ChangePage to='/sign-in'>
                            <Button>Sign In</Button>
                        </ChangePage>
                    </FlexRow>
                </FlexColoumn>
            </Padding>
        </MainContainer>
    );
};

export default SignUp;
