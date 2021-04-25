import { useContext } from "react";
import { userContext } from "../context/auth";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { url } from "../adapter";
import {
    FlexColoumn,
    Padding,
    TextBox,
    SizedBox,
    Button,
    FlexRow,
    ChangePage,
} from "../styles";

const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 10% 20%;
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    font-family: antonio;
    color: ${({ theme }) => theme.colors.primaryColor};
`;

const SignIn = () => {
    const { register, getValues } = useForm();
    const { setAuthData } = useContext(userContext);
    const history = useHistory();
    const handelSignIn = () => {
        const data = {
            email: getValues("email"),
            password: getValues("password"),
        };

        axios
            .post(url + "users/sign-in", data)
            .then((res) => {
                localStorage.setItem("auth", JSON.stringify(res.data));
                setAuthData((prev) => ({
                    ...prev,
                    user: res.data.user,
                    isAdmin: res.data.user.roles === "Admin",
                    isAuthenticated: true,
                }));
            })
            .then(() => {
                history.push("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <MainContainer>
            <Padding padding='30px 40px'>
                <FlexColoumn>
                    <Heading>Sign In</Heading>
                    <TextBox {...register("email")} placeholder='Enter Email' />
                    <SizedBox height='15px' />
                    <TextBox
                        {...register("password")}
                        placeholder='Enter Password'
                    />
                    <SizedBox height='15px' />
                    <FlexRow space_between>
                        <Button primary onClick={handelSignIn}>
                            Sign In
                        </Button>
                        <ChangePage to='/sign-up'>
                            <Button>Sign Up</Button>
                        </ChangePage>
                    </FlexRow>
                </FlexColoumn>
            </Padding>
        </MainContainer>
    );
};

export default SignIn;
